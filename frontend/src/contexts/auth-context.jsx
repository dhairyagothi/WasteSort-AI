import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};

export const AuthProvider = ({ children }) => {
    // user: { id, name, email, role: 'citizen' | 'municipality', ... }
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const raw = localStorage.getItem('suchita_user');
            if (raw) setUser(JSON.parse(raw));
        } catch (e) {
            // ignore
        }
    }, []);

    // Simulated login/signup logic (replace with backend integration)
    const signin = async (email, password, role) => {
        setLoading(true);
        setError(null);
        // Simulate API call
        setTimeout(() => {
            const u = { id: "1", name: "Demo User", email, role };
            setUser(u);
            try { localStorage.setItem('suchita_user', JSON.stringify(u)); } catch (e) {}
            setLoading(false);
        }, 1000);
    };

    const signup = async (name, email, password, role) => {
        setLoading(true);
        setError(null);
        // Simulate API call
        setTimeout(() => {
            const u = { id: "1", name, email, role };
            setUser(u);
            try { localStorage.setItem('suchita_user', JSON.stringify(u)); } catch (e) {}
            setLoading(false);
        }, 1000);
    };

    const signout = () => {
        setUser(null);
        try { localStorage.removeItem('suchita_user'); } catch (e) {}
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
