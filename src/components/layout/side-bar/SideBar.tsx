import styles from './SideBar.module.scss';
import Drawer from '@mui/material/Drawer';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store.tsx';
import { Box } from '@mui/material';
import { SideBarContent } from './SideBarContent.tsx';
import { ReactIf } from '@js-smart/react-kit';

const drawerWidth = 300;

export default function SideBar(): React.JSX.Element {
	const drawerOpen = useSelector((state: RootState) => state.preferences.drawerOpen);

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
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerOpen ? drawerWidth : `0` },
					}}
					open={drawerOpen}>
					<SideBarContent />
				</Drawer>
			</Box>
		</ReactIf>
	);
}
