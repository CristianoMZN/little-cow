import { fromHono } from "chanfana";
import { Hono } from "hono";
import { TaskCreate } from "./endpoints/tasks/taskCreate";
import { TaskDelete } from "./endpoints/tasks/taskDelete";
import { TaskFetch } from "./endpoints/tasks/taskFetch";
import { TaskList } from "./endpoints/tasks/taskList";

// Start a Hono app
const app = new Hono();



// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/docs",
});

openapi.get('/', (c) => c.text('Hono!'));
// Register OpenAPI endpoints
openapi.get("/api/tasks", TaskList);
openapi.post("/api/tasks", TaskCreate);
openapi.get("/api/tasks/:taskSlug", TaskFetch);
openapi.delete("/api/tasks/:taskSlug", TaskDelete);

// Export the Hono app
export default app;
