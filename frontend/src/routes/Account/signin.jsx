
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { useNavigate } from "react-router-dom";

const roles = [
    { value: "citizen", label: "Citizen" },
    { value: "municipality", label: "Municipality Official" }
];

const SignIn = () => {
    const { signin, loading, error } = useAuth();
    const [form, setForm] = useState({ email: "", password: "", role: "citizen" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signin(form.email, form.password, form.role);
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-200 dark:from-gray-900 dark:to-green-900">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-300">Sign In to Suchita</h2>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-xl shadow-sm" placeholder="you@example.com" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} required className="w-full px-3 py-2 border rounded-xl shadow-sm" placeholder="Your password" />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-medium">Sign in as</label>
                    <select name="role" value={form.role} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl shadow-sm">
                        {roles.map((role) => (
                            <option key={role.value} value={role.value}>{role.label}</option>
                        ))}
                    </select>
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button type="submit" disabled={loading} className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                    {loading ? "Signing in..." : "Sign In"}
                </button>
                <p className="mt-4 text-center text-sm">
                    Don't have an account? <a href="/sign-up" className="text-green-700 dark:text-green-300 underline">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default SignIn;