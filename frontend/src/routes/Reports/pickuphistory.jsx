import React from 'react';

const PickupHistory = () => {
    // Sample data for pickup history
    const pickupRecords = [
        { id: 1, date: '2023-10-01', itemType: 'Plastic Bottles', quantity: 20, status: 'Completed' },
        { id: 2, date: '2023-10-05', itemType: 'Cardboard Boxes', quantity: 15, status: 'Completed' },
        { id: 3, date: '2023-10-10', itemType: 'Glass Jars', quantity: 10, status: 'Pending' },
        { id: 4, date: '2023-10-15', itemType: 'Metal Cans', quantity: 25, status: 'Completed' },
        { id: 5, date: '2023-10-20', itemType: 'E-Waste', quantity: 5, status: 'Cancelled' },
    ];

    return (
        <div className="dark:text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Pickup History</h1>
            <table className="min-w-full bg-gray-800 text-white">
                <thead>
                    <tr>
                        <th className="py-2">#</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Item Type</th>
                        <th className="py-2">Quantity</th>
                        <th className="py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {pickupRecords.map(record => (
                        <tr key={record.id}>
                            <td className="py-2">{record.id}</td>
                            <td className="py-2">{record.date}</td>
                            <td className="py-2">{record.itemType}</td>
                            <td className="py-2">{record.quantity}</td>
                            <td className={`py-2 ${record.status === 'Completed' ? 'text-green-500' : record.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                                {record.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PickupHistory;