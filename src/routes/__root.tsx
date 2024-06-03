import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Suspense } from 'react';
import theme from '../theme.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CssBaseline from '@mui/material/CssBaseline';
import SideBarContainer from '../features/layout/side-bar/SideBarContainer.tsx';
import { ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();

export const Route = createRootRoute({
	component: () => (
		<>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools initialIsOpen={false} />
					<CssBaseline />
					<SideBarContainer />
				</QueryClientProvider>
			</ThemeProvider>
			<Outlet />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</>
	),
});
