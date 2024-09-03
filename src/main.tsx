import ReactDOM from 'react-dom/client';
import { store } from './state/store.tsx';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';
import { ThemeProvider } from '@mui/material';
import theme from './theme.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import LayoutContainer from './features/layout/side-bar/LayoutContainer.tsx';

const queryClient = new QueryClient();

// Set up a Router instance
const router = createRouter({
	routeTree,
	context: {
		queryClient,
	},
	defaultPreload: 'intent', // Since we're using React Query, we don't want loader calls to ever be stale
	// This will ensure that the loader is always called when the route is preloaded or visited
	defaultPreloadStaleTime: 0,
});

// Register things for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

export default function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<LayoutContainer />
			</ThemeProvider>
		</>
	);
}

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} defaultPreload="intent" />
				{router ? <App /> : null}
			</QueryClientProvider>
		</Provider>
	);
}
