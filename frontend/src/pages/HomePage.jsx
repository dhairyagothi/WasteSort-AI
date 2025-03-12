import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Waste Management Platform</h1>
            <p className="text-lg text-center mb-8">
                Our platform helps you manage waste efficiently and sustainably. 
                Join us in making a difference!
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Get Started
            </button>
        </div>
    );
};

export default HomePage;