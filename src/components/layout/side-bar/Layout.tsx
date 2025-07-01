import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../header/Header.tsx';
import SideBar from './SideBar.tsx';
import useAuthService from '../../../hooks/useAuthService.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store.tsx';
import Toolbar from '@mui/material/Toolbar';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs.tsx';
import { Box, Grid } from '@mui/material';

export default function Layout(props: { children: React.ReactNode }): React.JSX.Element {
	const user = useSelector((state: RootState) => state.user);
	const { isUserLoggedIn } = useAuthService();
	useEffect(() => {}, [user]);

	return (
		<div style={{ display: 'flex' }}>
			<CssBaseline />
			<Header />

			{/* Show the sidebar when user logged in */}
			{isUserLoggedIn() && <SideBar />}

			{/* Main Section */}
			<Grid size={12}>
				<Box
					component="div"
					sx={{
						flexGrow: 1,
						p: '1rem',
						minHeight: `calc(100vh - 128px)`,
					}}>
					<div style={{ marginTop: '1rem' }}>
						<Toolbar />
						<BreadCrumbs />

						<main style={{ flexGrow: 1, marginTop: '2rem' }}>{props.children}</main>
					</div>
				</Box>
			</Grid>
		</div>
	);
}
