import React, { useEffect } from 'react';
import Header from './header/Header.tsx';
import SideBar from './side-bar/SideBar.tsx';
import useAuthService from '../../hooks/useAuthService.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store.tsx';
import { Box, Grid, useMediaQuery } from '@mui/material';
import theme from '../../theme.tsx';

export default function Layout(props: { children: React.ReactNode }): React.JSX.Element {
	const user = useSelector((state: RootState) => state.user);
	const desktopDrawerOpen = useSelector((state: RootState) => state.preferences.drawerOpen);
	const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
	const { isUserLoggedIn } = useAuthService();
	useEffect(() => {}, [user]);

	return (
		<>
			{/* Header */}
			<Header />

			{/* Side Bar */}
			<SideBar />

			{/* Main Section */}
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					mb: '20px',
					ml: desktopDrawerOpen && isUserLoggedIn() && isDesktop ? `300px` : `0`,
					width: desktopDrawerOpen && isUserLoggedIn() && isDesktop ? `calc(100% - 300px)` : `100%`,
				}}>
				<Grid container sx={{ mt: 5 }}>
					{props.children}
				</Grid>
			</Box>
		</>
	);
}
