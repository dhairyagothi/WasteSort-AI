import { useState } from 'react';
import { Camera, Upload, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useTheme } from "@/hooks/use-theme";
import { Footer } from "@/layouts/footer";

const AiVerification = () => {
    const { theme } = useTheme();
    const [selectedFile, setSelectedFile] = useState(null);
    const [verificationResult, setVerificationResult] = useState(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            // Simulate AI verification process
            setTimeout(() => {
                setVerificationResult({
                    category: 'Recyclable Plastic',
                    confidence: 94,
                    feedback: 'Great job! This item is correctly sorted as recyclable plastic.',
                    tips: 'Remember to clean the container before disposal for better recycling quality.'
                });
            }, 2000);
        }
    };

    const openAIModel = () => {
        window.open('https://dhairyagothi-wastesort-ai-model-appapp2-rekxjm.streamlit.app/', '_blank');
    };

    return (
        <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">AI Waste Verification</h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Upload images of your sorted waste for AI-powered verification and get instant feedback on correct segregation.
                </p>

                {/* Upload Section */}
                <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-6 mb-6`}>
                    <h2 className="text-xl font-semibold mb-4">Upload Waste Image</h2>
                    
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
                            />
                            <label
                                htmlFor="file-upload"
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block"
                            >
                                Select Image
                            </label>
                        </div>

                        {/* Camera Capture */}
                        <div className={`border-2 border-dashed ${theme === "dark" ? "border-gray-600" : "border-gray-300"} rounded-lg p-6 text-center`}>
                            <Camera className="mx-auto mb-4 text-gray-400" size={48} />
                            <p className="mb-4">Take a photo</p>
                            <button
                                onClick={() => alert('Camera functionality will be implemented soon!')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                                Open Camera
                            </button>
                        </div>
                    </div>

                    {selectedFile && (
                        <div className="mt-6">
                            <p className="text-sm text-gray-600 dark:text-gray-300">Selected: {selectedFile.name}</p>
                        </div>
                    )}
                </div>

                {/* Verification Result */}
                {verificationResult && (
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
                                    Confidence: {verificationResult.confidence}%
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
