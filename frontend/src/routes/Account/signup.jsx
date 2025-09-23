
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useNavigate } from "react-router-dom";

const roles = [
    { value: "citizen", label: "Citizen" },
    { value: "municipality", label: "Municipality Official" }
];

const SignUp = () => {
    const { signup, loading, error } = useAuth();
    const [form, setForm] = useState({ name: "", email: "", password: "", role: "citizen" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(form.name, form.email, form.password, form.role);
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-200 dark:from-gray-900 dark:to-green-900">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-300">Sign Up for Suchita</h2>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-xl shadow-sm" placeholder="Full name" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-xl shadow-sm" placeholder="you@example.com" />
                    <p className="text-xs text-gray-500 mt-1">We'll use this to send verification and notifications.</p>
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} required className="w-full px-3 py-2 border rounded-xl shadow-sm" placeholder="Create a strong password" />
                    <p className="text-xs text-gray-500 mt-1">Use at least 8 characters including letters and numbers.</p>
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-medium">Register as</label>
                    <select name="role" value={form.role} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl shadow-sm">
                        {roles.map((role) => (
                            <option key={role.value} value={role.value}>{role.label}</option>
                        ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Choose your role so we can tailor the experience.</p>
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button type="submit" disabled={loading} className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
                <p className="mt-4 text-center text-sm">
                    Already have an account? <a href="/sign-in" className="text-green-700 dark:text-green-300 underline">Sign In</a>
                </p>
            </form>
        </div>
    );
};

export default SignUp;