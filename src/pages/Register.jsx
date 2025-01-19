import React from 'react';
import { Footer } from '../components/common/Footer';
import { Navbar } from '../components/common/Navbar';

export function Register() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-gray-50 py-16">
        <div className="w-full max-w-[480px] rounded-2xl bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-center text-3xl font-bold text-[#15549A]">Create an Account</h1>
          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#15549A] focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

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
              <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#15549A] focus:outline-none"
                placeholder="Enter your phone number"
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
                placeholder="Create a password"
              />
            </div>

            <div>
              <label
                className="mb-1 block text-sm font-medium text-gray-700"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#15549A] focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#15549A] py-3 text-white transition-colors hover:bg-[#1a65b8]"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-[#15549A] hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
