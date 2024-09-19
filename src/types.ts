import { DateTime, Str, Uuid } from "chanfana";
import { z } from "zod";

export const Task = z.object({
	name: Str({ example: "lorem" }),
	slug: Str(),
	description: Str({ required: false }),
	completed: z.boolean().default(false),
	due_date: DateTime(),
});
export const Tipin = z.object({
	id: Uuid({required: true}),
	title: Str({required: true}),
	description: Str({ required: false }),
	completed: z.boolean().default(false),
	due_date: DateTime(),
})