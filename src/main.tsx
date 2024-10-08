import ReactDOM from 'react-dom/client';
import { store } from './state/store.tsx';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';

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

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} defaultPreload="intent" />
			</QueryClientProvider>
		</Provider>
	);
}
