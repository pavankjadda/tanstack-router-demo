import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Suspense } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient } from '@tanstack/react-query';
import theme from '../theme.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import SideBarContainer from '../features/layout/side-bar/SideBarContainer.tsx';
import { ThemeProvider } from '@mui/material';

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<ReactQueryDevtools initialIsOpen={false} />
			<TanStackRouterDevtools />
			<Suspense fallback={<div>Loading...</div>}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<SideBarContainer />
					<Outlet />
				</ThemeProvider>
			</Suspense>
		</>
	);
}
