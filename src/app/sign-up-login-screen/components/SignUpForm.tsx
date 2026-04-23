'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Building2 } from 'lucide-react';

interface SignUpFormData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  password: string;
  agreeTerms: boolean;
}

interface Props {
  onSwitchToLogin: () => void;
}

const businessTypes = [
  'Barbershop / Hair Salon',
  'Clinic / Physiotherapy',
  'Car Detailing / Valeting',
  'Beauty / Nail Studio',
  'Personal Trainer / Gym',
  'Café / Restaurant',
  'Other local business',
];

export default function SignUpForm({ onSwitchToLogin }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>();

  const onSubmit = async (data: SignUpFormData) => {
    setLoading(true);
    // Backend integration point: replace with Supabase signUp + insert business profile
    await new Promise((r) => setTimeout(r, 1600));
    toast.success('Account created!', {
      description: `Welcome to RetainFlow, ${data.ownerName.split(' ')[0]}! Setting up your dashboard...`,
    });
    setTimeout(() => router.push('/overview-dashboard'), 900);
  };

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-2xl font-bold text-slate-900 mb-1.5">Create your account</h1>
        <p className="text-sm text-slate-500">
          Start your 14-day free trial — no credit card required
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Business name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="signup-business">
            Business name
          </label>
          <p className="text-xs text-slate-400 mb-1.5">This will appear in your customer messages</p>
          <div className="relative">
            <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="signup-business"
              type="text"
              placeholder="Barber & Co."
              className={`w-full pl-9 pr-4 py-3 rounded-xl border text-sm bg-white transition-all duration-150 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
                errors.businessName ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
              }`}
              {...register('businessName', { required: 'Business name is required' })}
            />
          </div>
          {errors.businessName && (
            <p className="mt-1.5 text-xs text-red-600">{errors.businessName.message}</p>
          )}
        </div>

        {/* Owner name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="signup-owner">
            Your name
          </label>
          <input
            id="signup-owner"
            type="text"
            placeholder="Marco Rossi"
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-all duration-150 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
              errors.ownerName ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
            }`}
            {...register('ownerName', { required: 'Your name is required' })}
          />
          {errors.ownerName && (
            <p className="mt-1.5 text-xs text-red-600">{errors.ownerName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="signup-email">
            Business email
          </label>
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-all duration-150 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
            }`}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' },
            })}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="signup-phone">
            WhatsApp business number
          </label>
          <p className="text-xs text-slate-400 mb-1.5">Messages will be sent from this number</p>
          <input
            id="signup-phone"
            type="tel"
            placeholder="+44 7700 900000"
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white transition-all duration-150 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
              errors.phone ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
            }`}
            {...register('phone', {
              required: 'WhatsApp number is required',
              pattern: { value: /^\+?[\d\s\-()]{8,}$/, message: 'Enter a valid phone number with country code' },
            })}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="signup-password">
            Password
          </label>
          <p className="text-xs text-slate-400 mb-1.5">Minimum 8 characters</p>
          <div className="relative">
            <input
              id="signup-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              placeholder="Create a strong password"
              className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm bg-white transition-all duration-150 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
                errors.password ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
              }`}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 text-xs text-red-600">{errors.password.message}</p>
          )}
        </div>

        {/* Terms */}
        <div>
          <div className="flex items-start gap-2.5">
            <input
              id="agree-terms"
              type="checkbox"
              className={`mt-0.5 w-4 h-4 rounded border-slate-300 text-primary-700 focus:ring-primary-200 cursor-pointer flex-shrink-0 ${
                errors.agreeTerms ? 'border-red-400' : ''
              }`}
              {...register('agreeTerms', { required: 'You must agree to continue' })}
            />
            <label htmlFor="agree-terms" className="text-xs text-slate-600 cursor-pointer leading-relaxed">
              I agree to the{' '}
              <a href="#" className="text-primary-700 font-medium hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-primary-700 font-medium hover:underline">Privacy Policy</a>
              . I understand RetainFlow will send WhatsApp messages on behalf of my business.
            </label>
          </div>
          {errors.agreeTerms && (
            <p className="mt-1.5 text-xs text-red-600">{errors.agreeTerms.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-primary-700 hover:bg-primary-800 disabled:bg-primary-400 text-white font-semibold rounded-xl transition-all duration-150 active:scale-[0.98] text-sm flex items-center justify-center gap-2 mt-1"
          style={{ minHeight: '48px' }}
        >
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Creating your account...
            </>
          ) : (
            'Start 14-day free trial'
          )}
        </button>
      </form>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400 font-medium">or</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      <p className="text-center text-sm text-slate-500">
        Already have an account?{' '}
        <button
          onClick={onSwitchToLogin}
          className="text-primary-700 font-semibold hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
}