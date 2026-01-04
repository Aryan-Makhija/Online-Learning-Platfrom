import db from "@/lib/config/db"
import { eq, sql } from "drizzle-orm"
import { courseTable } from "@/lib/config/schema"
import { NextResponse } from "next/server"


export async function POST(req) {

    const { name } = await req.json()

    if (!name) {
        return NextResponse.json({ message: "name is required" }, { status: 401 })
    }

    const result = await db.select().from(courseTable).where(sql`${courseTable.name} ILIKE ${'%' + name + '%'}`); // case-insensitive partial match
    return NextResponse.json(result)


} 