import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getFeedbacks } from '../../services/api';

const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchFeedbacks = async (page) => {
        try {
            setIsLoading(true);
            const response = await getFeedbacks(page);
            setFeedbacks(response.data);
            setTotalPages(response.totalPages);
        } catch (error) {
            toast.error(`Failed to fetch feedbacks: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFeedbacks(currentPage);
    }, [currentPage]);

    if (isLoading) {
        return (
            <div className="space-y-6">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse"
                    >
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (!isLoading && feedbacks.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-gray-500 dark:text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No feedbacks yet
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    Be the first one to submit feedback!
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {feedbacks.map((feedback) => (
                    <div
                        key={feedback._id}
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {feedback.fullName}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {feedback.email}
                        </p>
                        <p className="mt-4 text-gray-700 dark:text-gray-300">
                            {feedback.message}
                        </p>
                        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                            {new Date(feedback.createdAt).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-1 rounded-md ${
                                currentPage === page
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeedbackList; 