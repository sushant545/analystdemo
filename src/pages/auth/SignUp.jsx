import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle, Check, X } from 'lucide-react';

const signUpSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Must contain an uppercase letter')
        .regex(/[0-9]/, 'Must contain a number'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(signUpSchema),
    });

    const password = watch('password', '');

    const getStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 8) strength++;
        if (/[A-Z]/.test(pass)) strength++;
        if (/[0-9]/.test(pass)) strength++;
        if (/[^A-Za-z0-9]/.test(pass)) strength++;
        return strength;
    };

    const strength = getStrength(password);

    const onSubmit = async (data) => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            navigate('/login');
        }, 1500);
    };

    return (
        <div className="w-full">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-brand-light mb-2">Create an account</h2>
                <p className="text-brand-slate">Start your journey to becoming a Senior Analyst.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* Name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-light">Full Name</label>
                    <input
                        {...register('name')}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'} focus:outline-none focus:ring-1 text-brand-light placeholder-brand-slate/50 transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-light">Email</label>
                    <input
                        {...register('email')}
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'} focus:outline-none focus:ring-1 text-brand-light placeholder-brand-slate/50 transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-light">Password</label>
                    <input
                        {...register('password')}
                        type="password"
                        placeholder="Create a password"
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'} focus:outline-none focus:ring-1 text-brand-light placeholder-brand-slate/50 transition-all`}
                    />
                    {/* Password Strength Meter */}
                    {password && (
                        <div className="flex gap-1 h-1 mt-2">
                            <div className={`flex-1 rounded-full transition-colors ${strength >= 1 ? 'bg-red-500' : 'bg-white/10'}`} />
                            <div className={`flex-1 rounded-full transition-colors ${strength >= 2 ? 'bg-yellow-500' : 'bg-white/10'}`} />
                            <div className={`flex-1 rounded-full transition-colors ${strength >= 3 ? 'bg-green-500' : 'bg-white/10'}`} />
                            <div className={`flex-1 rounded-full transition-colors ${strength >= 4 ? 'bg-brand-teal' : 'bg-white/10'}`} />
                        </div>
                    )}
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-light">Confirm Password</label>
                    <input
                        {...register('confirmPassword')}
                        type="password"
                        placeholder="Confirm your password"
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-brand-blue focus:ring-brand-blue'} focus:outline-none focus:ring-1 text-brand-light placeholder-brand-slate/50 transition-all`}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                </div>

                {/* Terms */}
                <div className="space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-brand-slate/20 bg-white/5 text-brand-blue focus:ring-brand-blue" />
                        <span className="text-sm text-brand-slate group-hover:text-brand-light transition-colors">
                            I agree to the <span className="text-brand-blue hover:underline">Terms of Service</span> and <span className="text-brand-blue hover:underline">Privacy Policy</span>.
                        </span>
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-brand-blue to-brand-teal hover:opacity-90 text-white font-bold rounded-lg shadow-lg shadow-brand-blue/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                    {isLoading ? 'Creating account...' : 'Create account'}
                </button>

                <p className="text-center text-sm text-brand-slate">
                    Already have an account?{' '}
                    <Link to="/login" className="font-bold text-brand-blue hover:text-brand-teal transition-colors">
                        Log in
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
