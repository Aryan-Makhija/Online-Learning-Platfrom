import { primaryKey } from "drizzle-orm/gel-core";
import { boolean, integer, json, pgTable, time, varchar } from "drizzle-orm/pg-core";

const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    subscriptionId: varchar(),
    TotalStudyTime: integer().default(0)
});



export const courseTable = pgTable("courses", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    cid: varchar().notNull().unique(),
    name: varchar(),
    description: varchar(),
    noOfChapters: integer().notNull(),
    includeVideo: boolean().default(false),
    level: varchar().notNull(),
    category: varchar(),
    courseJson: json(),
    courseContent: json(),
    userEmail: varchar("userEmail").references(() => usersTable.email).notNull()

})




export const enrollCourseTable = pgTable('enrollCourse', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    cid: varchar('cid').references(() => courseTable.cid),
    userEmail: varchar("userEmail").references(() => usersTable.email).notNull(),
    completedChapters: json(),
    CourseStatus: varchar().default('In Progress')

})

export default usersTable