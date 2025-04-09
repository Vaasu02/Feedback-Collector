const Footer = () => {
    return (
        <footer className="py-4 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <p className="font-medium">Feedback Collector - Assignment Submission</p>
                <p className="text-sm mt-1">Submitted on {new Date().toLocaleDateString()}</p>
                <p className="text-xs mt-2 opacity-75">© {new Date().getFullYear()} All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer; 