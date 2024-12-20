import { Card, CardContent, Typography } from "@mui/material";
import { VFC, useState, useEffect } from "react";
import styles from "./utils.module.css"
import { CodeResponse } from "./props"

export const ResultCard: VFC<CodeResponse> = ({ message, status }) => {
	const [humanReadableStatus, setHumanReadableStatus] = useState<string>("");
	const [bgcolor, setBgColor] = useState("")
	useEffect(() => {
		switch (status) {
			case "execFailure":
				setHumanReadableStatus("Ошибка исполнения")
				setBgColor("error.main")
				break;
			case "sendFailure":
				setHumanReadableStatus("Ошибка отправки")
				setBgColor("error.main")
				break;
			case "success":
				setHumanReadableStatus("Успех")
				setBgColor("success.main")
				break;
			default:
				setHumanReadableStatus("Ничего ещё не было отправлено")
		}
	}, [status])
	return (
		<Card elevation={12} className={styles.Fullsize} sx={{ bgcolor }}>
			<CardContent>
				<Typography variant="h5" component="div">
					{humanReadableStatus}
				</Typography>
				<Typography variant="body2">
					{message}
				</Typography>
			</CardContent>
		</Card>
	)
}

