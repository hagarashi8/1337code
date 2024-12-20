import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '@mui/system/ThemeProvider'
import { createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './userWorker';
import styles from './main.module.css'
import { App } from './components/App';
import { startServer } from './mockServer';
const root = document.getElementById('root')
if (root != null) {
	startServer()
	const theme = createTheme({
		palette: {
			mode: "dark"
		}
	})


	ReactDOM.render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</React.StrictMode>,
		root
	);
	root.className = styles.App
}
