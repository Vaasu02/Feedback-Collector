import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Button from '../common/Button';
import { submitFeedback } from '../../services/api';

const FeedbackForm = ({ theme }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);
            await submitFeedback(data);
            toast.success('Feedback submitted successfully!');
            reset();
        } catch (error) {
            toast.error(error.message || 'Failed to submit feedback');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formClasses = theme === 'dark'
        ? 'bg-gray-800/30 border-gray-700'
        : 'bg-white/10 border-gray-200';

    const inputClasses = theme === 'dark'
        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
        : 'bg-white/50 border-gray-200 text-gray-900 placeholder-gray-500';

    const labelClasses = theme === 'dark'
        ? 'text-gray-200'
        : 'text-gray-700';

    return (
        <div className="relative">
            {/* Background gradient circles */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-10 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <form onSubmit={handleSubmit(onSubmit)} className={`relative space-y-6 backdrop-blur-lg p-8 rounded-2xl shadow-xl border ${formClasses}`}>
                <div>
                    <label htmlFor="fullName" className={`block text-sm font-medium ${labelClasses}`}>
                        Full Name
                    </label>
                    <input
                        {...register('fullName', { required: 'Full name is required' })}
                        type="text"
                        id="fullName"
                        className={`mt-1 block w-full px-4 py-3 rounded-xl backdrop-blur-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${inputClasses}`}
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className={`block text-sm font-medium ${labelClasses}`}>
                        Email
                    </label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                        type="email"
                        id="email"
                        className={`mt-1 block w-full px-4 py-3 rounded-xl backdrop-blur-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${inputClasses}`}
                        placeholder="Enter your email"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className={`block text-sm font-medium ${labelClasses}`}>
                        Feedback Message
                    </label>
                    <textarea
                        {...register('message', {
                            required: 'Message is required',
                            minLength: {
                                value: 10,
                                message: 'Message must be at least 10 characters long'
                            }
                        })}
                        id="message"
                        rows={4}
                        className={`mt-1 block w-full px-4 py-3 rounded-xl backdrop-blur-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${inputClasses}`}
                        placeholder="Enter your feedback"
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className={`w-full font-medium py-3 px-6 rounded-xl backdrop-blur-md transition-all duration-200 hover:shadow-lg ${
                        theme === 'dark'
                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                    }`}
                >
                    Submit Feedback
                </Button>
            </form>
        </div>
    );
};

export default FeedbackForm; 