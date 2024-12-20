import { createServer } from "miragejs"

const responses = {
	"javascript": {
		'console.log("Hello, World!")': {
			"status": "success",
			"output": "Hello, world!\n"
		},
		'console.log("Hello, World!")\n': {
			"status": "success",
			"output": "Hello, world!\n"
		}
	},
	"typescript": {
		'console.log("Hello, World!")': {
			"status": "success",
			"output": "Hello, world!\n"
		},
		'console.log("Hello, World!")\n': {
			"status": "success",
			"output": "Hello, world!\n"
		}
	},
	"python": {
		'print("Hello, World!")': {
			"status": "success",
			"output": "Hello, world!\n"
		}
	},
} as any

const errors = {
	"javascript": {
		"status": "error",
		"error": "SyntaxError: Unexpected token"
	},
	"typescript": {
		"status": "error",
		"error": "SyntaxError: Unexpected token"
	},
	"python": {
		"status": "error",
		"error": "SyntaxError: invalid syntax"
	},
} as any

type CodeRequest = {
	language: string
	code: string
}

export function startServer() {
	const server = createServer({
		routes() {
			this.post("/api/execute", (schema, request) => {
				const code: CodeRequest = JSON.parse(request.requestBody)

				return responses[code.language][code.code.trim()] || errors[code.language]
			})
		}
	})
}
