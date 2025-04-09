import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className={`fixed top-4 left-4 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
                currentTheme === 'dark'
                    ? 'bg-gray-800 text-yellow-300 border-gray-700'
                    : 'bg-white text-gray-800 border-gray-200'
            } border`}
            aria-label="Toggle theme"
        >
            {currentTheme === 'dark' ? (
                <FiSun className="w-6 h-6 hover:rotate-90 transition-transform duration-500" />
            ) : (
                <FiMoon className="w-6 h-6 hover:-rotate-90 transition-transform duration-500" />
            )}
        </button>
    );
};

export default ThemeToggle; 