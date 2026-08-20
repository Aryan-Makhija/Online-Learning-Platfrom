"use client";

import { useEffect } from "react";

export default function CourseError({
    error,
    reset,
}) {
    useEffect(() => {
        console.error("Course Page Error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">

                <div className="text-5xl mb-4">
                    📚
                </div>

                <h1 className="text-2xl font-semibold mb-3">
                    Unable to load this course
                </h1>

                <p className="text-gray-600 mb-6">
                    Something went wrong while loading the course.
                    Please try again.
                </p>

                <div className="flex justify-center gap-3">

                    <button
                        onClick={() => reset()}
                        className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Try Again
                    </button>

                    <a
                        href="/workspace"
                        className="px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
                    >
                        Workspace
                    </a>

                </div>

            </div>
        </div>
    );
}