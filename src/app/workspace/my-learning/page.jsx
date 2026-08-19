"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  Flame,
  Trophy,
  Clock,
  BookMarked,
  ArrowRight,
  PlayCircle,
  Layers,
} from "lucide-react";

import EnrollCourseList from "@/components/WorkspceComponents/EnrollCourseList";
import { Button } from "@/components/ui/button";
import WorkspaceNavbar from "@/components/WorkspceComponents/Navbar";
import Footer from "@/components/WorkspceComponents/Footer";

const MyLearning = ({ user, activeCourse }) => {
  const [selectedShelf, setSelectedShelf] = useState("active");

  const [stats, setStats] = useState({
    totalStudyTime: 0,
    totalCourses: 0,
    masteredCourses: 0,
    inProgressCourses: 0,
  });

  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  // -----------------------------------------
  // Get workspace data
  // -----------------------------------------

  useEffect(() => {
    const getWorkspaceData = async () => {
      try {
        setLoading(true);

        const response = await axios.get("/api/UserStats");

        if (response.data.success) {
          setStats(response.data.stats);
          setCourses(response.data.courses);
        }
      } catch (error) {
        console.error("Failed to load workspace:", error);
      } finally {
        setLoading(false);
      }
    };

    getWorkspaceData();
  }, []);

  // -----------------------------------------
  // Convert seconds to readable time
  // -----------------------------------------

  const formatStudyTime = (seconds) => {
    if (!seconds || seconds <= 0) {
      return "0 Hours";
    }

    const hours = Math.floor(seconds / 3600);

    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours === 0) {
      return `${minutes} Min`;
    }

    if (minutes === 0) {
      return `${hours} Hours`;
    }

    return `${hours}h ${minutes}m`;
  };

  // -----------------------------------------
  // Find active course
  // -----------------------------------------

  const currentActiveCourse =
    activeCourse ||
    courses.find(
      (course) =>
        course.enrollment?.CourseStatus === "In Progress"
    );

  // -----------------------------------------
  // Animation
  // -----------------------------------------

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
      <WorkspaceNavbar />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-slate-50/50 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8"
      >
        {/* -------------------------------- */}
        {/* HEADER */}
        {/* -------------------------------- */}

        <div>
          <p className="text-sm font-semibold text-amber-600 mb-2">
            Welcome back{user?.firstName ? `, ${user.firstName}` : ""}
          </p>

          <h1 className="text-xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            My Learning Progress
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Keep learning, track your progress, and master your courses.
          </p>
        </div>

        {/* -------------------------------- */}
        {/* STATS */}
        {/* -------------------------------- */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

          {/* STUDY TIME */}

          <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
            <div className="p-3 bg-amber-100 rounded-xl shrink-0">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Study Time
              </p>

              <p className="text-base sm:text-xl font-extrabold text-slate-900 truncate">
                {loading
                  ? "..."
                  : formatStudyTime(stats.totalStudyTime)}
              </p>
            </div>
          </div>

          {/* TOTAL COURSES */}

          <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
            <div className="p-3 bg-amber-100 rounded-xl shrink-0">
              <BookMarked className="w-5 h-5 text-amber-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Courses
              </p>

              <p className="text-base sm:text-xl font-extrabold text-slate-900">
                {loading ? "..." : stats.totalCourses}
              </p>
            </div>
          </div>

          {/* IN PROGRESS */}

          <div className="bg-white border border-amber-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
            <div className="p-3 bg-amber-100 rounded-xl shrink-0">
              <Layers className="w-5 h-5 text-amber-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                In Progress
              </p>

              <p className="text-base sm:text-xl font-extrabold text-slate-900">
                {loading
                  ? "..."
                  : stats.inProgressCourses}
              </p>
            </div>
          </div>

          {/* MASTERED */}

          <div className="bg-white border border-emerald-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
            <div className="p-3 bg-emerald-100 rounded-xl shrink-0">
              <Trophy className="w-5 h-5 text-emerald-600" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Mastered
              </p>

              <p className="text-base sm:text-xl font-extrabold text-slate-900">
                {loading
                  ? "..."
                  : stats.masteredCourses}
              </p>
            </div>
          </div>
        </div>




        {/* -------------------------------- */}
        {/* COURSE SHELF */}
        {/* -------------------------------- */}

        <div className="space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">

            <div className="space-y-1">

              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-amber-600" />

                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  My Course Shelf
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-500">
                Access your enrolled courses and track your learning progress.
              </p>

            </div>

            {/* FILTER */}

            <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-2xl shrink-0 self-start sm:self-auto">

              <button
                onClick={() => setSelectedShelf("active")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === "active"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                In Progress
              </button>

              <button
                onClick={() => setSelectedShelf("completed")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === "completed"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                Mastered
              </button>

              <button
                onClick={() => setSelectedShelf("all")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedShelf === "all"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                All Courses
              </button>

            </div>
          </div>

          {/* COURSE LIST */}

          <div className="pt-2">

            <EnrollCourseList
              filter={selectedShelf}
              courses={courses || ''}
            />

          </div>

        </div>
      </motion.div>
      <Footer></Footer>
    </div>
  );
};

export default MyLearning;