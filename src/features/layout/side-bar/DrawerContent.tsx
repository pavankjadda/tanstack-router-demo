import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import HelpIcon from '@mui/icons-material/Help';
import styles from './SideBar.module.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from '@tanstack/react-router';

/**
 * Define Side Bar content in a string
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
function DrawerContent(): React.JSX.Element {
	const navigate = useNavigate();

	return (
		<>
			<div className={styles.drawerContainer}>
				<h5 className={styles.banner}>Tanstack Router Demo</h5>
				<Divider className={styles.divider} />

				{/* Book Section */}
				<List style={{ marginTop: '20px' }}>
					{/* Home */}
					<ListItem key="Home" component="a" onClick={() => navigate({ to: '/' })}>
						<ListItemIcon className={styles.listItemIcon}>{<HomeIcon />}</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>

					{/* Find Book */}
					<ListItem component="a" key="Book Search" onClick={() => navigate({ to: '/books/find' })}>
						<ListItemIcon className={styles.listItemIcon}>{<SearchIcon />}</ListItemIcon>
						<ListItemText primary="Find Book" />
					</ListItem>

					{/* All Books */}
					<ListItem component="a" key="All Books" onClick={() => navigate({ to: '/books/all' })}>
						<ListItemIcon className={styles.listItemIcon}>{<FormatListBulletedIcon />}</ListItemIcon>
						<ListItemText primary="All Books" />
					</ListItem>
				</List>
				<Divider />

				<Divider className={styles.divider} />
				{/* Help Section */}
				<List>
					{/* Account */}
					<ListItem component="a" key="Account" onClick={() => navigate({ to: '/profile' })}>
						<ListItemIcon className={styles.listItemIcon}>{<AccountCircleIcon />}</ListItemIcon>
						<ListItemText primary="Account" />
					</ListItem>
					{/* Help */}
					<ListItem component="a" key="Home" onClick={() => navigate({ to: '/help' })}>
						<ListItemIcon className={styles.listItemIcon}>{<HelpIcon />}</ListItemIcon>
						<ListItemText primary="Help" />
					</ListItem>

					{/* Version */}
					<ListItem key="Version">
						<label>Version: {import.meta.env.REACT_APP_VERSION}</label>
					</ListItem>
				</List>
			</div>
		</>
	);
}

export default DrawerContent;
