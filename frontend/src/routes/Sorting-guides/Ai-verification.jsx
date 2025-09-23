import { useEffect, useRef, useState } from 'react';
import { Camera, Upload, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useTheme } from "@/hooks/use-theme";
import { Footer } from "@/layouts/footer";


const AiVerification = () => {
    const { theme } = useTheme();
    const [selectedFile, setSelectedFile] = useState(null);
    const [verificationResult, setVerificationResult] = useState(null);
    const [step, setStep] = useState(0); // 0: upload, 1: sending, 2: waiting, 3: result
    const [error, setError] = useState(null);
    // Live camera / websocket state
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const wsRef = useRef(null);
    const captureIntervalRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(false);
    const [wsConnected, setWsConnected] = useState(false);
    const [livePrediction, setLivePrediction] = useState(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setVerificationResult(null);
            setError(null);
            setStep(1);
            sendImageForVerification(file);
        }
    };

    const sendImageForVerification = async (file) => {
        setStep(1); // Sending
        try {
            const formData = new FormData();
            formData.append('file', file);
            setStep(2); // Waiting for response
            const response = await fetch('http://localhost:8000/predict', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) throw new Error('Failed to get AI response');
            const data = await response.json();
            setVerificationResult({
                category: data.waste_type,
                confidence: data.confidence,
                feedback: `AI classified this as ${data.waste_type}.`,
                tips: data.waste_type === 'Dry Waste' ? 'Ensure items are clean and dry before disposal.' : 'Follow local guidelines for disposal.'
            });
            setStep(3);
        } catch (err) {
            setError('Verification failed. Please try again.');
            setStep(0);
        }
    };

    const openAIModel = () => {
        window.open('https://dhairyagothi-wastesort-ai-model-appapp2-rekxjm.streamlit.app/', '_blank');
    };

    // Start webcam and connect websocket
    const startCamera = async () => {
        setError(null);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
            if (videoRef.current) videoRef.current.srcObject = stream;
            setIsCameraOn(true);
            // open websocket
            openWebSocket();
            // begin capturing frames once websocket connected
        } catch (err) {
            console.error('Camera start error', err);
            setError('Unable to access camera. Please grant permission or use file upload.');
        }
    };

    const stopCamera = () => {
        // stop media tracks
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(t => t.stop());
            videoRef.current.srcObject = null;
        }
        setIsCameraOn(false);
        stopCaptureLoop();
        closeWebSocket();
    };

    const openWebSocket = () => {
        if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) return;
        try {
            const ws = new WebSocket('ws://localhost:8000/ws/live_predict');
            wsRef.current = ws;
            ws.onopen = () => {
                console.log('ws open');
                setWsConnected(true);
                // start capture loop at ~1 fps (adjustable)
                startCaptureLoop(1000);
            };
            ws.onmessage = (evt) => {
                try {
                    const data = JSON.parse(evt.data);
                    setLivePrediction(data);
                    setStep(3);
                } catch (e) {
                    console.warn('Invalid ws message', e);
                }
            };
            ws.onclose = () => {
                console.log('ws closed');
                setWsConnected(false);
            };
            ws.onerror = (err) => {
                console.error('ws error', err);
                setError('WebSocket error. Live prediction unavailable.');
            };
        } catch (e) {
            console.error('ws open failed', e);
            setError('Unable to connect to live prediction server.');
        }
    };

    const closeWebSocket = () => {
        if (wsRef.current) {
            try { wsRef.current.close(); } catch (e) { /* ignore */ }
            wsRef.current = null;
        }
        setWsConnected(false);
    };

    const startCaptureLoop = (ms = 1000) => {
        if (captureIntervalRef.current) return;
        captureIntervalRef.current = setInterval(() => {
            captureAndSendFrame();
        }, ms);
    };

    const stopCaptureLoop = () => {
        if (captureIntervalRef.current) {
            clearInterval(captureIntervalRef.current);
            captureIntervalRef.current = null;
        }
    };

    const captureAndSendFrame = () => {
        if (!videoRef.current || !canvasRef.current || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // quality param toDataURL to reduce size
        const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
        try {
            wsRef.current.send(dataUrl);
            setStep(1); // sending
        } catch (e) {
            console.error('send failed', e);
        }
    };

    // cleanup on unmount
    useEffect(() => {
        return () => {
            stopCamera();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Normalize and format confidence value so UI shows a decimal percentage.
    // Accepts either a decimal fraction (0.92) or a percentage (92.0) and returns e.g. '92.0%'.
    const formatConfidence = (raw) => {
        let n = Number(raw);
        if (!isFinite(n)) return '0.0%';
        // If value looks like a fraction (0..1), convert to percent
        if (Math.abs(n) <= 1) {
            n = n * 100;
        }
        // Now n is percentage value; show one decimal place
        return `${n.toFixed(1)}%`;
    };

    return (
        <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">AI Waste Verification</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Upload images of your sorted waste for AI-powered verification and get instant feedback on correct segregation.
                </p>

                {/* Step-by-step Verification UI */}
                <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-6 mb-6`}>
                    <h2 className="text-xl font-semibold mb-4">AI Waste Verification Process</h2>
                    <ol className="mb-6 flex flex-col md:flex-row gap-4 text-sm">
                        <li className={`flex items-center gap-2 ${step === 0 ? 'font-bold text-green-600' : 'text-gray-500'}`}>
                            <Upload size={20} /> 1. Upload Image
                        </li>
                        <li className={`flex items-center gap-2 ${step === 1 ? 'font-bold text-blue-600' : 'text-gray-500'}`}>
                            <Camera size={20} /> 2. Sending to AI Model
                        </li>
                        <li className={`flex items-center gap-2 ${step === 2 ? 'font-bold text-yellow-600' : 'text-gray-500'}`}>
                            <AlertCircle size={20} /> 3. Awaiting AI Response
                        </li>
                        <li className={`flex items-center gap-2 ${step === 3 ? 'font-bold text-green-700' : 'text-gray-500'}`}>
                            <CheckCircle size={20} /> 4. Verification Result
                        </li>
                    </ol>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* File Upload */}
                        <div className={`border-2 border-dashed ${theme === "dark" ? "border-gray-600" : "border-gray-300"} rounded-lg p-6 text-center`}>
                            <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                            <p className="mb-4">Choose an image file</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileSelect}
                                className="hidden"
                                id="file-upload"
                                disabled={step === 1 || step === 2}
                            />
                            <label
                                htmlFor="file-upload"
                                className={`bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block ${step === 1 || step === 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                Select Image
                            </label>
                        </div>
                        {/* Camera Capture */}
                        <div className={`border-2 border-dashed ${theme === "dark" ? "border-gray-600" : "border-gray-300"} rounded-lg p-6 text-center`}>
                            <Camera className="mx-auto mb-4 text-gray-400" size={48} />
                            <p className="mb-4">Live camera (WebSocket)</p>
                            <div className="flex items-center justify-center gap-2">
                                <button
                                    onClick={startCamera}
                                    className={`bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg ${isCameraOn ? 'opacity-80' : ''}`}
                                    disabled={isCameraOn}
                                >
                                    Start Camera
                                </button>
                                <button
                                    onClick={stopCamera}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                                    disabled={!isCameraOn}
                                >
                                    Stop
                                </button>
                            </div>
                            <div className="mt-4">
                                <video ref={videoRef} autoPlay playsInline muted className="mx-auto w-full rounded-md max-h-56 bg-black" />
                                {/* hidden canvas used for capture */}
                                <canvas ref={canvasRef} style={{ display: 'none' }} />
                            </div>
                            <div className="mt-3 text-sm">
                                <p>WebSocket: <span className={`font-semibold ${wsConnected ? 'text-green-600' : 'text-red-500'}`}>{wsConnected ? 'connected' : 'disconnected'}</span></p>
                                {livePrediction && (
                                    <div className="mt-2 text-left bg-gray-50 dark:bg-gray-900 p-2 rounded">
                                        <p className="text-sm font-semibold">Live prediction:</p>
                                        <p className="text-base text-green-600 dark:text-green-400">{livePrediction.waste_type || livePrediction.category}</p>
                                        <p className="text-sm">Confidence: {formatConfidence(livePrediction.confidence ?? livePrediction.score ?? 0)}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {selectedFile && (
                        <div className="mt-6">
                            <p className="text-sm text-gray-600 dark:text-gray-300">Selected: {selectedFile.name}</p>
                        </div>
                    )}
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </div>

                {/* Verification Result */}
                {step === 3 && verificationResult && (
                    <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-6 mb-6`}>
                        <div className="flex items-center mb-4">
                            <CheckCircle className="text-green-500 mr-2" size={24} />
                            <h2 className="text-xl font-semibold">Verification Complete</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-2">Classification Result</h3>
                                <p className="text-lg text-green-600 dark:text-green-400">{verificationResult.category}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Confidence: {formatConfidence(verificationResult.confidence)}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Feedback</h3>
                                <p className="text-sm">{verificationResult.feedback}</p>
                                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                                    💡 {verificationResult.tips}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Advanced AI Model Link */}
                <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-6 mb-6`}>
                    <h2 className="text-xl font-semibold mb-4">Advanced AI Model</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        For more detailed analysis and live video classification, use our advanced AI model.
                    </p>
                    <button
                        onClick={openAIModel}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
                    >
                        <ExternalLink size={20} />
                        Open Advanced AI Model
                    </button>
                </div>

                {/* Educational Content */}
                <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-6`}>
                    <h2 className="text-xl font-semibold mb-4">Waste Categories</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                                ♻️
                            </div>
                            <h3 className="font-semibold">Recyclable</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Plastic, paper, metal, glass</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-brown-100 dark:bg-brown-900 rounded-full flex items-center justify-center mx-auto mb-2">
                                🍃
                            </div>
                            <h3 className="font-semibold">Organic</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Food waste, garden waste</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-2">
                                ⚠️
                            </div>
                            <h3 className="font-semibold">Hazardous</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Batteries, chemicals, e-waste</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AiVerification;
