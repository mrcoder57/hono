import { Hono } from "hono";
import { cors } from "hono/cors";
import studentApp from "./api/students/students";
const app = new Hono();

app.use(cors());
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.use("*", async (c, next) => {
  console.log(`Request Method: ${c.req.method}, URL: ${c.req.url}`);
  await next();
});

app.get("/sum", (c) => {
  return c.text(`${5 + 3}`);
});
app.route("/api/student", studentApp);
export default {
  port: 5000,
  fetch: app.fetch,
};
