import { Card, Box, Typography } from "@mui/material"
import { VFC } from "react"
import styles from "./utils.module.css"

export type ProblemData = {
	title: string
	text: string[]
	examples: string[]
}

export const Problem: VFC<ProblemData> = ({ title, text, examples }) => {
	return (
		<Card className={styles.Fullsize} elevation={12}>
			<Box padding={3}>
				<Typography variant="h5" component="div">{title} </Typography>
				{text.map((e, i) => <Typography variant="body2" key={i} marginY={1}>{e}</Typography>)}
				{examples.map((e, i) => <Typography variant="subtitle1" key={i} marginY={3}>{e}</Typography>)}
			</Box>
		</Card>
	)
}
