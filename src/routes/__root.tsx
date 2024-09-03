import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Suspense } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient } from '@tanstack/react-query';
import theme from '../theme.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import LayoutContainer from '../features/layout/side-bar/LayoutContainer.tsx';
import { ThemeProvider } from '@mui/material';

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<LayoutContainer />
				</ThemeProvider>
			</Suspense>

			<Outlet />
			<ReactQueryDevtools initialIsOpen={false} />
			<TanStackRouterDevtools />
		</>
	);
}
