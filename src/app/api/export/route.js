"use server";

import mysql from "mysql2/promise";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "kaythri",
    });

    const [rows] = await connection.execute("SELECT * FROM messages");
    await connection.end();

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Messages");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new Response(buffer, {
      headers: {
        "Content-Disposition": "attachment; filename=messages.xlsx",
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Error exporting data", { status: 500 });
  }
}
