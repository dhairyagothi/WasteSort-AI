import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import { format } from "date-fns";

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [schedules, setSchedules] = useState([]);

  // Default schedule timings
  useEffect(() => {
    const today = new Date();
    const sampleSchedules = [
      { date: format(today, "yyyy-MM-dd"), collectionType: "Household Waste" },
      { date: format(new Date(today.setDate(today.getDate() + 1)), "yyyy-MM-dd"), collectionType: "Recyclables" },
      { date: format(new Date(today.setDate(today.getDate() + 2)), "yyyy-MM-dd"), collectionType: "Organic Waste" },
    ];
    setSchedules(sampleSchedules);
  }, []);

  // Categorize schedules
  const groupSchedules = () => {
    const today = format(new Date(), "yyyy-MM-dd");
    const tomorrow = format(new Date(new Date().setDate(new Date().getDate() + 1)), "yyyy-MM-dd");

    return {
      previous: schedules.filter((s) => s.date < today),
      today: schedules.filter((s) => s.date === today),
      tomorrow: schedules.filter((s) => s.date === tomorrow),
      upcoming: schedules.filter((s) => s.date > tomorrow),
    };
  };

  const groupedSchedules = groupSchedules();

  return (
    <div className="min-h-screen flex bg-green-100 p-8">
      {/* Left Panel - Waste Collection Schedule */}
      <motion.div
        className="w-1/2 p-6 bg-white rounded-2xl shadow-md"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h2 className="text-xl font-bold text-green-700 mb-4">Waste Collection Schedule</h2>
        {Object.entries(groupedSchedules).map(([category, items]) =>
          items.length > 0 ? (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold capitalize text-green-600">{category} Collections</h3>
              {items.map((schedule, index) => (
                <div key={index} className="p-2 bg-green-50 rounded-md mt-2">
                  <p className="text-sm">{format(new Date(schedule.date), "EEE, MMM d")} at {selectedTime}</p>
                  <p className="text-sm font-semibold">{schedule.collectionType}</p>
                </div>
              ))}
            </div>
          ) : null
        )}
      </motion.div>

      {/* Right Panel - Calendar & Notification */}
      <motion.div
        className="w-1/2 p-6 bg-white rounded-2xl shadow-md ml-6"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <h2 className="text-xl font-bold text-green-700 mb-4">Set Notification</h2>
        <Calendar onChange={setSelectedDate} value={selectedDate} className="border-none w-full" />
        <div className="mt-4">
          <label className="block text-green-600 font-semibold">Select Time:</label>
          <select
            className="mt-1 p-2 border rounded-md w-full bg-green-50"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option>6:00 AM</option>
            <option>8:00 AM</option>
            <option>10:00 AM</option>
            <option>12:00 PM</option>
            <option>2:00 PM</option>
            <option>4:00 PM</option>
            <option>6:00 PM</option>
          </select>
        </div>
        <button className="mt-4 bg-green-600 text-white p-2 w-full rounded-md">
          Set Reminder for {format(selectedDate, "PPP")} at {selectedTime}
        </button>
      </motion.div>
    </div>
  );
};

export default SchedulePage;
