import { CodeResponse, Status } from "./props"

type CodeResponseRaw = {
	status: "error" | "success"
	output?: string
	error?: string
}

export async function sendCode(code: string, language: string): Promise<CodeResponse> {
	let res: CodeResponseRaw
	try {
		res = await fetch("/api/execute", {
			method: "POST",
			body: JSON.stringify({ code, language })
		}).then((e) => e.json()).then((e) => e)
	} catch (e: any) {
		return {
			status: "sendFailure",
			message: e.toString()
		}
	}
	console.error(res)
	return {
		status: res.status == "error" ? "execFailure" : "success",
		message: res.status == "error" ? res.error as string : res.output as string,
	}
}
