import React from 'react';
import { FaStar } from 'react-icons/fa';

const PersonalReports = () => {
        const renderStars = (rating) => {
            const stars = [];
            for (let i = 0; i < 5; i++) {
                stars.push(<FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-400'} />);
            }
            return stars;
        };

    return (
        <div className="dark:text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Personal Reports</h1>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h2 className="text-xl mb-2">Overview</h2>
                <p className="mb-2">Here you can find your personal reports and statistics.</p>
                <ul className="list-disc list-inside">
                    <li>Total Products: 25154</li>
                    <li>Total Paid Orders: 16000</li>
                    <li>Total Customers: 15400</li>
                    <li>Total Sales: $12340</li>
                </ul>
            </div>
            <div className="mt-4">
                <h2 className="text-xl mb-2">Recent Sales</h2>
                <ul className="list-disc list-inside">
                    <li>Olivia Martin - $1500</li>
                    <li>James Smith - $2000</li>
                    <li>Sophia Brown - $4000</li>
                    <li>Noah Wilson - $3000</li>
                    <li>Emma Jones - $2500</li>
                </ul>
            </div>
            <div className="mt-4">
                <h2 className="text-xl mb-2">Top Orders</h2>
                <table className="min-w-full bg-gray-800 text-white">
                    <thead>
                        <tr>
                            <th className="py-2">#</th>
                            <th className="py-2">Product</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2">1</td>
                            <td className="py-2">Wireless Headphones</td>
                            <td className="py-2">$99.99</td>
                            <td className="py-2">In Stock</td>
                            <td className="py-2">4.5</td>
                        </tr>
                        <tr>
                            <td className="py-2">2</td>
                            <td className="py-2">Smartphone</td>
                            <td className="py-2">$799.99</td>
                            <td className="py-2">In Stock</td>
                            <td className="py-2">4.7</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PersonalReports;