import { VFC, useEffect, useState } from "react";
import { Editor } from "./Editor";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Card from '@mui/material/Card';
import styles from "./utils.module.css";
import { ResultCard } from "./ResultCard";
import { CodeResponse } from "./props";
import { sendCode } from "./fetch";

const languages = ["Python", "Javascript", "Typescript"]
const defaultValues = new Map([["python", 'print("Hello, World!")'], ["javascript", 'console.log("Hello, World!")'], ["typescript", 'console.log("Hello, World!")']])

export const Solution: VFC = () => {
	const [text, setText] = useState("");
	const [language, setLanguage] = useState("python");
	const [lastResponse, setLastResponse] = useState<CodeResponse>({ message: "Не было отправлено ещё не строки кода", status: null });
	const handleClick = () => {
		sendCode(text, language).then(e => setLastResponse(e));
	};
	return (
		<Grid container justifyContent={"space-between"} margin={0} spacing={1} maxHeight={"100%"}>

			<Grid size={{ xs: 12, md: 6, lg: 4 }} container>
				<Select fullWidth size="small" value={language} onChange={(x) => { setLanguage(x.target.value); }}>
					{languages.map((e) => <MenuItem key={e.toLowerCase()} value={e.toLowerCase()}>{e}</MenuItem>)}
				</Select>
			</Grid>

			<Grid size={{ xs: 12, md: 6, lg: 4 }} container><Button variant="contained" onClick={handleClick} fullWidth>Run</Button></Grid>
			<Grid size={12} container height={"70vh"}>
				<Card className={styles.Fullsize} elevation={8}>
					<Editor defaultValue={defaultValues.get(language) || ""}
						language={language}
						onContentChange={(x) => setText(x)} />
				</Card>
			</Grid>
			<Grid size={12} container height={"20vh"} width={"100%"}>
				<ResultCard {...lastResponse} />
			</Grid>
		</Grid>);
};

