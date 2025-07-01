import { createTheme } from '@mui/material/styles';
import { getCssVariable } from './util/CssUtils.ts';

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: getCssVariable('--primary-color'),
		},
		secondary: {
			main: getCssVariable('--secondary-color'),
		},
		success: {
			main: getCssVariable('--success-color'),
		},
		error: {
			main: getCssVariable('--error-color'),
		},
		background: {
			default: getCssVariable('--background-color'),
		},
	},
});

export default theme;
