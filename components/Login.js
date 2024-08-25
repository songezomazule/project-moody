"use client";
import { Fugaz_One } from "next/font/google";
import React, { useState } from "react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  const [activeTab, setActiveTab] = useState("sign-in");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-[500px] mx-auto flex flex-col gap-7 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h2
          className={
            "text-3xl md:text-4xl textGradientStrongRed " + fugaz.className
          }
        >
          Moody
        </h2>
        <p className="text-center text-2xl md:text-xl font-semibold">
          Welcome to Moody
        </p>
      </div>
      <div className="w-full bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-300">
          <div className="flex">
            <button
              onClick={() => handleTabChange("sign-in")}
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "sign-in"
                  ? "border-b-2 border-[#ea6ab9]"
                  : "text-gray-600"
              }`}
            >
              Log In
            </button>
            <button
              onClick={() => handleTabChange("sign-up")}
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "sign-up"
                  ? "border-b-2 border-[#ea6ab9] "
                  : "text-gray-600"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="p-8">
          {activeTab === "sign-in" ? (
            <div>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email-login"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email-login"
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password-login"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password-login"
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="button-form"
                >
                  Sign In
                </button>
              </form>
            </div>
          ) : (
            <div>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="email-signup"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email-signup"
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password-signup"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password-signup"
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password-signup"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirm-password-signup"
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="button-form"
                >
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
