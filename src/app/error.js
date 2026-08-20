"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}) {
    useEffect(() => {
        console.error("Application Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-sm border p-8">

                <div className="text-5xl mb-4">
                    ⚠️
                </div>

                <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                    Something went wrong
                </h1>

                <p className="text-gray-600 mb-6">
                    We couldn't load this page. Please try again.
                </p>

                <button
                    onClick={() => reset()}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                    Try Again
                </button>

            </div>
        </div>
    );
}