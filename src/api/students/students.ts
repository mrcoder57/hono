import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
const studentApp = new Hono();

studentApp.post("/", async (c) => {
    try {
      const { name, Classes, course } = await c.req.json();
      if (!name || !Classes || !course) {
        return c.json({ message: "All fields are required" }, 401);
      }
  
      const newStudent = { name, Classes, course };
      return c.json(
        { message: "Created student successfully", newStudent },
        201
      );
    } catch (error) {
      console.error(error);
      return c.json(
        { message: "Something went wrong || internal server error" },
        500
      );
    }
  });

export default studentApp