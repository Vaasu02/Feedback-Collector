import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import FeedbackForm from './components/feedback/FeedbackForm';
import FeedbackList from './components/feedback/FeedbackList';
import AdminToggle from './components/feedback/AdminToggle';
import ThemeToggle from './components/common/ThemeToggle';
import Footer from './components/layout/Footer';

function App() {
    const [isAdminView, setIsAdminView] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.className = savedTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.className = newTheme;
    };

    return (
        <ThemeProvider>
            <div className={`min-h-screen transition-colors duration-300 ${
                theme === 'dark' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900'
            }`}>
                <div className="relative min-h-screen">
                    <Toaster 
                        position="top-right"
                        toastOptions={{
                            className: theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                        }}
                    />
                    <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
                    <AdminToggle isAdminView={isAdminView} onToggle={() => setIsAdminView(!isAdminView)} />

                    <main className="container mx-auto px-4 py-16">
                        <h1 className={`text-4xl font-bold text-center mb-12 ${
                            theme === 'dark'
                                ? 'text-white'
                                : 'text-gray-900'
                        }`}>
                            Feedback Collector
                        </h1>

                        <div className="max-w-2xl mx-auto">
                            {isAdminView ? <FeedbackList /> : <FeedbackForm theme={theme} />}
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
