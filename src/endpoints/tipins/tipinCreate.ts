import { OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { Tipin } from "../../types";

export class TipinCreate extends OpenAPIRoute {
	schema = {
		tags: ["Tipins"],
		summary: "Create a new Tipin",
		request: {
			body: {
				content: {
					"application/json": {
						schema: Tipin,
					},
				},
			},
		},
		responses: {
			"200": {
				description: "Returns the created Tipin",
				content: {
					"application/json": {
						schema: Tipin,
					},
				},
			},
		},
	};
}