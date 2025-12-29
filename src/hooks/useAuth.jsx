import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Initialize user from local storage to check if already logged in
    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem('user');
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (e) {
            return null;
        }
    });

    const signIn = async (email, password) => {
        // Mock API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'student@test.com' && password === '123456') {
                    const mockUser = { id: 1, name: 'Student User', email };
                    setUser(mockUser);
                    localStorage.setItem('user', JSON.stringify(mockUser));
                    resolve(mockUser);
                } else {
                    reject(new Error('Invalid email or password'));
                }
            }, 1500);
        });
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
