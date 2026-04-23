'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Eye, EyeOff, Loader2, Copy, Check } from 'lucide-react';

// Mock credentials for demo — replace with Supabase auth call
const DEMO_CREDENTIALS = {
  email: 'marco@barberandco.co.uk',
  password: 'RetainFlow2026!',
};

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface Props {
  onSwitchToSignup: () => void;
}

export default function LoginForm({ onSwitchToSignup }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: { email: '', password: '', rememberMe: false },
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);

    // Backend integration point: replace with Supabase signInWithPassword
    await new Promise((r) => setTimeout(r, 1400));

    if (
      data.email === DEMO_CREDENTIALS.email &&
      data.password === DEMO_CREDENTIALS.password
    ) {
      toast.success('Welcome back, Marco!', { description: 'Redirecting to your dashboard...' });
      setTimeout(() => router.push('/overview-dashboard'), 800);
    } else {
      toast.error('Invalid credentials — use the demo accounts below to sign in');
      setLoading(false);
    }
  };

  const handleCopy = async (field: 'email' | 'password') => {
    const value = field === 'email' ? DEMO_CREDENTIALS.email : DEMO_CREDENTIALS.password;
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1800);
  };

  const autofillDemo = () => {
    setValue('email', DEMO_CREDENTIALS.email);
    setValue('password', DEMO_CREDENTIALS.password);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-1.5">Welcome back</h1>
        <p className="text-sm text-slate-500">Sign in to your RetainFlow dashboard</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="login-email">
            Business email
          </label>
          <input
            id="login-email"
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
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-medium text-slate-700" htmlFor="login-password">
              Password
            </label>
            <a href="#" className="text-xs text-primary-700 font-medium hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="Your password"
              className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm bg-white transition-all duration-150 outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-400 ${
                errors.password ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-slate-300'
              }`}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
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

        {/* Remember me */}
        <div className="flex items-center gap-2.5">
          <input
            id="remember-me"
            type="checkbox"
            className="w-4 h-4 rounded border-slate-300 text-primary-700 focus:ring-primary-200 cursor-pointer"
            {...register('rememberMe')}
          />
          <label htmlFor="remember-me" className="text-sm text-slate-600 cursor-pointer select-none">
            Keep me signed in for 30 days
          </label>
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
              Signing in...
            </>
          ) : (
            'Sign in to dashboard'
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400 font-medium">or</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      <p className="text-center text-sm text-slate-500">
        Don&apos;t have an account?{' '}
        <button
          onClick={onSwitchToSignup}
          className="text-primary-700 font-semibold hover:underline"
        >
          Create one free
        </button>
      </p>

      {/* Demo credentials */}
      <div className="mt-8 p-4 bg-primary-50 rounded-xl border border-primary-100">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-primary-800">Demo account</p>
          <button
            onClick={autofillDemo}
            className="text-[11px] font-semibold text-primary-700 hover:text-primary-900 bg-white px-2.5 py-1 rounded-lg border border-primary-200 hover:border-primary-300 transition-colors"
          >
            Autofill
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { field: 'email' as const, label: 'Email', value: DEMO_CREDENTIALS.email },
            { field: 'password' as const, label: 'Password', value: DEMO_CREDENTIALS.password },
          ].map((item) => (
            <div
              key={`demo-${item.field}`}
              className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-primary-100"
            >
              <div>
                <span className="text-[10px] text-primary-500 font-medium">{item.label}</span>
                <p className="text-xs font-mono text-slate-700">{item.value}</p>
              </div>
              <button
                onClick={() => handleCopy(item.field)}
                className="text-primary-400 hover:text-primary-700 transition-colors p-1"
                aria-label={`Copy ${item.label}`}
              >
                {copiedField === item.field ? (
                  <Check size={14} className="text-emerald-500" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}