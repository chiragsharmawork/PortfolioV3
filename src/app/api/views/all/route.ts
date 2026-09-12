import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "views.json");

export async function GET() {
  try {
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json([]);
    }
    const data = fs.readFileSync(dataFile, "utf8");
    const views = JSON.parse(data);
    
    // Format into array for Recharts
    const formattedData = Object.entries(views).map(([slug, count]) => ({
      name: slug,
      views: count
    })).sort((a: any, b: any) => b.views - a.views);

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch views" }, { status: 500 });
  }
}
