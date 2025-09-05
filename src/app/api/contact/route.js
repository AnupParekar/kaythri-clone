import mysql from "mysql2/promise";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const connection = await mysql.createConnection({
      host: "localhost",      // change if remote
      user: "root",           // your MySQL user
      password: "root", 
      database: "kaythri"
    });

    await connection.execute(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
