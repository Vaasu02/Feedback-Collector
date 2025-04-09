const AdminToggle = ({ isAdminView, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className="fixed top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
            {isAdminView ? 'Submit Feedback' : 'View Submitted Feedback'}
        </button>
    );
};

export default AdminToggle; 