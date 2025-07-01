import styles from './SideBar.module.scss';
import Drawer from '@mui/material/Drawer';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store.tsx';
import { Box } from '@mui/material';
import { SideBarContent } from './SideBarContent.tsx';
import { ReactIf } from '@js-smart/react-kit';
import { toggleMobileDrawerStatus } from '../../../state/reducers/PreferencesReducer.tsx';

const drawerWidth = 300;

export default function SideBar(): React.JSX.Element {
	const mobileDrawerOpen = useSelector((state: RootState) => state.preferences.mobileDrawerOpen);
	const desktopDrawerOpen = useSelector((state: RootState) => state.preferences.drawerOpen);

	const dispatch = useDispatch();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<ReactIf condition={mounted}>
			<Box component="nav">
				{/* Show in Desktop View (Hide in Tablet/Mobile View) */}
				<Drawer
					variant="persistent"
					classes={{
						paper: styles.drawerPaper,
					}}
					sx={{
						display: { xs: 'none', lg: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: desktopDrawerOpen ? drawerWidth : `0` },
					}}
					open={desktopDrawerOpen}>
					<SideBarContent />
				</Drawer>

				{/* Show in Tablet/Mobile View */}
				<Drawer
					variant="temporary"
					open={mobileDrawerOpen}
					onClose={() => dispatch(toggleMobileDrawerStatus())}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
					classes={{ paper: styles.drawerPaper }}>
					<SideBarContent />
				</Drawer>
			</Box>
		</ReactIf>
	);
}
