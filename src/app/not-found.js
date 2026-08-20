import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="max-w-md w-full text-center">

                <div className="text-7xl font-bold text-blue-600 mb-4">
                    404
                </div>

                <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                    Page Not Found
                </h1>

                <p className="text-gray-600 mb-8">
                    Sorry, the page you are looking for does not exist
                    or may have been moved.
                </p>

                <div className="flex justify-center gap-3">

                    <Link
                        href="/"
                        className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Go Home
                    </Link>

                    <Link
                        href="/workspace"
                        className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
                    >
                        Workspace
                    </Link>

                </div>

            </div>
        </div>
    );
}