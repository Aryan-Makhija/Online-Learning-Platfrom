
"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import EnrollCourseListCard from "./EnrollCourseListCard";
import { BookOpen } from "lucide-react";

// --------------------------------------------------
// Skeleton
// --------------------------------------------------

const CourseCardSkeleton = () => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden flex flex-col justify-between h-[420px] animate-pulse">

      {/* Header Skeleton */}
      <div className="h-44 sm:h-48 bg-slate-200 p-5 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="h-6 w-20 bg-slate-300 rounded-full" />
          <div className="h-6 w-16 bg-slate-300 rounded-full" />
        </div>

        <div className="space-y-2">
          <div className="h-3 w-24 bg-slate-300 rounded" />
          <div className="h-6 w-3/4 bg-slate-300 rounded" />
        </div>
      </div>

      {/* Body Skeleton */}
      <div className="p-5 sm:p-6 space-y-5 flex-1 flex flex-col justify-between">

        <div className="space-y-2">
          <div className="h-4 w-full bg-slate-200 rounded" />
          <div className="h-4 w-2/3 bg-slate-200 rounded" />
        </div>

        {/* Progress */}
        <div className="bg-slate-100 p-3.5 rounded-2xl space-y-3">
          <div className="flex justify-between">
            <div className="h-3 w-24 bg-slate-200 rounded" />
            <div className="h-3 w-8 bg-slate-200 rounded" />
          </div>

          <div className="h-2 w-full bg-slate-200 rounded-full" />

          <div className="h-3 w-32 bg-slate-200 rounded" />
        </div>

        {/* Footer */}
        <div className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <div className="h-3 w-20 bg-slate-200 rounded" />
            <div className="h-3 w-28 bg-slate-200 rounded" />
          </div>

          <div className="h-12 w-full bg-slate-200 rounded-2xl" />
        </div>

      </div>
    </div>
  );
};

// --------------------------------------------------
// Enrolled Course List
// --------------------------------------------------

const EnrollCourseList = ({
  filter = "all",
  courses = null,
}) => {

  const [enrollcourse, setEnrollCourse] = useState([]);

  const [loading, setLoading] = useState(
    courses === null
  );

  // --------------------------------------------------
  // Get courses from API
  // --------------------------------------------------

  const getEnrollCourse = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "/api/enroll-course"
      );

      setEnrollCourse(
        response.data || []
      );

    } catch (err) {
      console.error(
        "Failed to get enrolled courses:",
        err
      );
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // Decide where courses come from
  // --------------------------------------------------

  useEffect(() => {

    // If courses are provided by parent,
    // don't make another API request.
    if (courses !== null) {

      setEnrollCourse(
        courses || []
      );

      setLoading(false);

      return;
    }

    // Existing behavior
    getEnrollCourse();

  }, [courses]);

  // --------------------------------------------------
  // Filter courses
  // --------------------------------------------------

  const filteredCourses = enrollcourse.filter(
    (course) => {

      const enrollment =
        course?.enrollCourse ||
        course?.enrollment;

      if (filter === "active") {

        return (
          enrollment?.CourseStatus ===
          "In Progress"
        );

      }

      if (filter === "completed") {

        return (
          enrollment?.CourseStatus ===
          "Mastered"
        );

      }

      // all courses
      return true;
    }
  );

  // --------------------------------------------------
  // Loading state
  // --------------------------------------------------

  if (loading) {
    return (
      <div className="mt-3 space-y-6">

        <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          Continue Learning
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {[1, 2, 3, 4].map(
            (item) => (
              <CourseCardSkeleton
                key={item}
              />
            )
          )}

        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // Empty state
  // --------------------------------------------------

  if (filteredCourses.length === 0) {

    let emptyTitle =
      "No Enrolled Courses Yet";

    let emptyDescription =
      "You haven't enrolled in any courses yet. Explore or create a course to start learning!";

    if (filter === "active") {

      emptyTitle =
        "No Courses In Progress";

      emptyDescription =
        "You don't have any courses currently in progress.";

    }

    if (filter === "completed") {

      emptyTitle =
        "No Mastered Courses";

      emptyDescription =
        "Complete all chapters of a course to see it here.";

    }

    return (
      <div className="mt-3 space-y-6">

        <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          {filter === "completed"
            ? "Mastered Courses"
            : filter === "active"
            ? "Continue Learning"
            : "My Courses"}
        </h2>

        <div className="bg-white border border-slate-200/80 rounded-3xl p-12 text-center space-y-3">

          <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl mx-auto flex items-center justify-center">

            <BookOpen className="w-6 h-6" />

          </div>

          <h3 className="text-lg font-bold text-slate-900">
            {emptyTitle}
          </h3>

          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {emptyDescription}
          </p>

        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // Courses
  // --------------------------------------------------

  return (
    <div className="mt-3 space-y-6">

      <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">

        {filter === "active"
          ? "Continue Learning"
          : filter === "completed"
          ? "Mastered Courses"
          : "All Courses"}

      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {filteredCourses.map(
          (course, index) => {

            /*
              Workspace API format:

              {
                cid,
                name,
                ...
                enrollment: {
                  CourseStatus,
                  completedChapters
                }
              }

              Existing /api/enroll-course format:

              {
                courses: {...},
                enrollCourse: {...}
              }

              Normalize both formats here.
            */

            const courseData =
              course?.courses ||
              course;

            const enrollmentData =
              course?.enrollCourse ||
              course?.enrollment;

            return (
              <EnrollCourseListCard
                key={
                  courseData?.cid ||
                  courseData?.id ||
                  index
                }
                course={courseData}
                enrollcourse={
                  enrollmentData
                }
              />
            );
          }
        )}

      </div>
    </div>
  );
};

export default EnrollCourseList;