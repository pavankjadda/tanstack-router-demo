import theme from './theme.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import SideBarContainer from './features/layout/side-bar/SideBarContainer.tsx';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from '@mui/material';
import { routeTree } from './routeTree.gen.ts';
import { store } from './state/store.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';

// Create a new router instance
const router = createRouter({ routeTree });

const queryClient = new QueryClient();

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

export default function App() {
	return (
		<>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<SideBarContainer />
						<RouterProvider router={router}></RouterProvider>
					</ThemeProvider>
				</QueryClientProvider>
			</Provider>
		</>
	);
}
