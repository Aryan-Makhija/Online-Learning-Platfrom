import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (

    <div className="min-h-screen bg-white">

      {/* ============ HEADER ============ */}
      <header className="w-full py-5 px-6 md:px-16 flex items-center justify-between shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-purple-600">EduAI</h1>

        <nav className="hidden md:flex items-center gap-10 text-gray-700">
          <a href="#features" className="hover:text-purple-600">Features</a>
          <a href="#courses" className="hover:text-purple-600">Courses</a>
          <a href="#testimonials" className="hover:text-purple-600">Testimonials</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </nav>

        {/* <a
            href="/sign-in"
            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
          >
            Login
          </a> */}

        <SignedOut>
          <a
            href="/sign-in?redirect_url=/workspace"
            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
          >
            Login
          </a>
        </SignedOut>

        {/* When user is logged IN */}
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
            afterSignOutUrl="/"
          />
        </SignedIn>


        {/* Mobile menu icon */}
        <div className="md:hidden text-purple-600 text-3xl">
          ☰
        </div>
      </header>

      {/* ============ HERO SECTION ============ */}
      <section className="px-6 md:px-20 py-20 flex flex-col md:flex-row items-center justify-between">

        {/* Left */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Learn Smarter with <span className="text-purple-600">AI-Powered</span> Education
          </h2>

          <p className="text-gray-600 mt-5 text-lg md:text-xl">
            Unlock knowledge anytime, anywhere. Personalised learning paths, AI-generated quizzes,
            and expert-led courses to help you grow faster.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/workspace"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg"
            >
              Get Started
            </a>

            <a
              href="#courses"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg text-lg"
            >
              Browse Courses
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="/hero-illustration.png"
            alt="Learning"
            className="w-full"
          />
        </div>
      </section>

      {/* ============ FEATURES SECTION ============ */}
      <section id="features" className="px-6 md:px-20 py-20 bg-purple-50">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
          Platform <span className="text-purple-600">Features</span>
        </h3>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature */}
          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-purple-600">AI-Generated Quizzes</h4>
            <p className="text-gray-600 mt-3">Automatically generated quizzes based on your progress.</p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-purple-600">Personalised Learning</h4>
            <p className="text-gray-600 mt-3">AI recommends lessons based on your performance.</p>
          </div>

          <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-purple-600">Expert Tutors</h4>
            <p className="text-gray-600 mt-3">Learn from industry professionals.</p>
          </div>
        </div>
      </section>

      {/* ============ COURSES SECTION ============ */}
      <section id="courses" className="px-6 md:px-20 py-20">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
          Popular <span className="text-purple-600">Courses</span>
        </h3>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Course Card */}
          {["Web Development", "AI & Machine Learning", "Data Science"].map((course, i) => (
            <div key={i} className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="h-44 bg-purple-200"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900">{course}</h4>
                <p className="text-gray-600 mt-3">
                  Learn {course} with step-by-step guided lessons.
                </p>
                <a
                  href="/courses"
                  className="text-purple-600 font-semibold mt-4 block hover:underline"
                >
                  View Course →
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section id="testimonials" className="px-6 md:px-20 py-20 bg-purple-50">
        <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
          Student <span className="text-purple-600">Testimonials</span>
        </h3>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

          {[1, 2, 3].map((t) => (
            <div key={t} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-600">“This platform helped me learn faster with AI-based suggestions!”</p>
              <h4 className="mt-4 font-semibold text-gray-900">Student {t}</h4>
            </div>
          ))}

        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="px-6 md:px-20 py-20 text-center">
        <h3 className="text-4xl font-bold text-gray-900">
          Start Learning with <span className="text-purple-600">AI Today</span>
        </h3>
        <p className="text-gray-600 mt-3 text-lg">
          Join thousands of learners upgrading their skills.
        </p>

        <a
          href="/signup"
          className="inline-block mt-8 bg-purple-600 text-white px-10 py-4 rounded-lg text-xl hover:bg-purple-700"
        >
          Get Started
        </a>
      </section>

      {/* ============ FOOTER ============ */}
      <footer id="contact" className="bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-6">

          <div>
            <h4 className="text-xl font-bold text-purple-400">EduAI</h4>
            <p className="text-gray-400 mt-3">AI-powered online learning made simple.</p>
          </div>

          <div>
            <h5 className="font-semibold text-purple-300">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400">Courses</a></li>
              <li><a href="#" className="hover:text-purple-400">Support</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-purple-300">Contact</h5>
            <p className="text-gray-400 mt-3">support@eduai.com</p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          © 2025 EduAI — All rights reserved.
        </p>
      </footer>

    </div>
  );
}


