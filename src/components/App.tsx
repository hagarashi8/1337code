import { VFC } from "react";
import Grid from "@mui/material/Grid2"
import { Solution } from "./Solution";
import { Problem } from "./Problem";

export const App: VFC = () => {
	const problemData = {
		title: "Сумма двух",
		text: ["Имея массив чисел, верните индексы двух чисел, сумма которых равна параметру", "Вы можете считать, что для каждого запроса есть ровно одно решение. Один и тот же элемент не может быть использован более одного раза", "Можно возращать результат в любом порядке", "Предупреждение: Моковый режим, код исполнен не будет, успех будет только при следующих значениях:"],
		examples: ['JS/TS: console.log("Hello, World!")', 'Python: print("Hello, World!")']
	}
	return (
		<Grid container padding={2} spacing={1} flexDirection={{ xs: "column", md: "row" }} height={"100%"} width={"100%"}>
			<Grid container size={{ xs: 12, md: 9 }}>
				<Solution />
			</Grid>
			<Grid container size={{ xs: 12, md: 3 }} flexDirection={"column"}>
				<Problem {...problemData} />
			</Grid>
		</Grid >
	)
}
