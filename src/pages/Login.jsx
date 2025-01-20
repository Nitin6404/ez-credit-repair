import React from 'react';
import { Navbar } from '../components/common/Navbar';

export function Login() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-gray-50 py-16">
        <div className="w-full max-w-[420px] rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-center text-3xl font-bold text-[#15549A]">Welcome Back</h1>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#15549A] focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#15549A] focus:outline-none"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-[#15549A]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-sm text-[#15549A] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#15549A] py-3 text-white transition-colors hover:bg-[#1a65b8]"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="text-[#15549A] hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
