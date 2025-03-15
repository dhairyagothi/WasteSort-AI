import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";

const municipalities = [
    { name: "Ahmedabad", contact: "contact@ahmedabad.gov.in", phone: "1234567890" },
    { name: "Surat", contact: "contact@surat.gov.in", phone: "0987654321" },
    { name: "Vadodara", contact: "contact@vadodara.gov.in", phone: "1122334455" },
    { name: "Rajkot", contact: "contact@rajkot.gov.in", phone: "2233445566" },
    { name: "Bhavnagar", contact: "contact@bhavnagar.gov.in", phone: "3344556677" },
];

const states = ["Gujarat"];
const districts = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"];

const Contact = () => {
    const { theme } = useTheme();
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedMunicipality, setSelectedMunicipality] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        }
    }, []);

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        setSelectedDistrict("");
        setSelectedMunicipality(null);
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
        const municipality = municipalities.find(
            (m) => m.name === event.target.value
        );
        setSelectedMunicipality(municipality);
    };

    return (
        <div className={`min-h-screen p-8 bg-gradient-to-r from-green-50 to-green-100 
            ${theme === 'dark' ? 'dark:bg-gradient-to-br dark:from-green-900 dark:to-green-800' : ''}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-green-800 dark:text-green-200 text-center 
                    bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
                    Select your state and district to get the contact information.
                </p>
                <div className="mb-8">
                    <label className="block text-lg font-medium text-green-800 dark:text-green-200 mb-2">
                        Select State:
                    </label>
                    <select
                        onChange={handleStateChange}
                        className="w-full p-3 rounded-lg border border-green-300 dark:border-green-700 
                            bg-white dark:bg-green-900 text-green-800 dark:text-green-200"
                    >
                        <option value="">-- Select State --</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>
                {selectedState && (
                    <div className="mb-8">
                        <label className="block text-lg font-medium text-green-800 dark:text-green-200 mb-2">
                            Select District:
                        </label>
                        <select
                            onChange={handleDistrictChange}
                            className="w-full p-3 rounded-lg border border-green-300 dark:border-green-700 
                                bg-white dark:bg-green-900 text-green-800 dark:text-green-200"
                        >
                            <option value="">-- Select District --</option>
                            {districts.map((district, index) => (
                                <option key={index} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {selectedMunicipality ? (
                    <div className="p-6 bg-green-100 dark:bg-green-800 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-green-800 dark:text-green-100 mb-4">
                            {selectedMunicipality.name} Municipality
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Contact: {selectedMunicipality.contact}
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Phone: {selectedMunicipality.phone}
                        </p>
                    </div>
                ) : (
                    selectedDistrict && (
                        <div className="p-6 bg-green-100 dark:bg-green-800 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold text-green-800 dark:text-green-100 mb-4">
                                No Information Available
                            </h2>
                        </div>
                    )
                )}
                {location && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-green-800 dark:text-green-100 mb-4">
                            Your Location
                        </h2>
                        <div className="w-full h-64 rounded-lg overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDoJ3uzIY5bki0aFm7rjiD_7hy5H2QE9jk&q=${location.lat},${location.lng}`}
                                allowFullScreen
                                className="border-0"
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
