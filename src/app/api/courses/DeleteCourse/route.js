"use server";

import db from "@/lib/config/db";
import { courseTable } from "@/lib/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq, and } from "drizzle-orm";

export async function deleteCourse(id) {
    try {
        const user = await currentUser();

        if (!user) {
            return {
                success: false,
                message: "Unauthorized user",
            };
        }

        const deletedCourse = await db
            .delete(courseTable)
            .where(
                and(
                    eq(courseTable.cid, id),
                    eq(courseTable.userEmail, user.primaryEmailAddress.emailAddress)
                )
            )
            .returning();

        if (deletedCourse.length === 0) {
            return {
                success: false,
                message: "Course not found",
            };
        }

        return {
            success: true,
            message: "Course deleted successfully",
        };
    } catch (error) {
        console.error("Delete course error:", error);

        return {
            success: false,
            message: "Something went wrong",
        };
    }
}