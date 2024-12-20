export type Status = "execFailure" | "sendFailure" | "incorrectAnswer" | "success" | null
export type CodeResponse = {
	message: string
	status: Status
}
