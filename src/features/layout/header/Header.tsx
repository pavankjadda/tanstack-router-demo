import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawerStatus } from '../../../state/reducers/PreferencesReducer';
import ReactIf from '../../../components/ReactIf';
import { RootState } from '../../../state/store';
import useAuthService from '../../../hooks/useAuthService';
import ProfileMenu from './ProfileMenu';
import { Link } from '@tanstack/react-router';

export default function Header(): React.JSX.Element {
	const dispatch = useDispatch();
	const drawerOpen = useSelector((state: RootState) => state.preferences.drawerOpen);
	const { isUserLoggedIn } = useAuthService();
	return (
		<div>
			{/* Header when user not logged in */}
			<ReactIf condition={!isUserLoggedIn()}>
				<AppBar position="fixed" color={'primary'}>
					<Toolbar>
						<Link to="/">React Vite Skeleton</Link>
					</Toolbar>
				</AppBar>
			</ReactIf>

			{/* Header when user is logged in */}
			<ReactIf condition={isUserLoggedIn()}>
				<AppBar position="fixed" color={'default'} className={drawerOpen ? styles.appBar : ''}>
					<Toolbar>
						<ReactIf condition={isUserLoggedIn()}>
							<IconButton edge="start" color="default" aria-label="menu" onClick={() => dispatch(toggleDrawerStatus())} size="large">
								<MenuIcon />
							</IconButton>
						</ReactIf>

						{/*<BreadCrumbs />*/}

						{/* Aligns Login/Logout button to the right */}
						<label className={styles.headerSpacer}></label>

						{/*ReactIf user logged in show logout button*/}
						<ReactIf condition={isUserLoggedIn()}>
							<ProfileMenu />
						</ReactIf>
					</Toolbar>
				</AppBar>
			</ReactIf>
		</div>
	);
}
