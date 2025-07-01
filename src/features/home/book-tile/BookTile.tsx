import { Card, CardContent, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import styles from '../../../components/layout/side-bar/SideBar.module.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { useNavigate } from '@tanstack/react-router';

export default function BookTile() {
	const navigate = useNavigate();
	return (
		<Grid container size={12} className="app-flex-justify-center" sx={{ m: 3, mt: 6 }}>
			<Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
				<Card elevation={24}>
					<Typography style={{ margin: '10px' }} className="custom-flex-justify-center" fontWeight={'bold'} variant="h4">
						Books
					</Typography>
					<Divider />

					<Grid container>
						<CardContent>
							<List>
								<ListItem disablePadding>
									<ListItemButton onClick={() => navigate({ to: '/book/find' })}>
										<ListItemIcon className={styles.listItemIcon}>{<FindInPageIcon color={'primary'} />}</ListItemIcon>
										<ListItemText primary="Find Book" />
									</ListItemButton>
								</ListItem>
								<ListItem disablePadding>
									<ListItemButton onClick={() => navigate({ to: '/book/all' })}>
										<ListItemIcon className={styles.listItemIcon}>{<FormatListBulletedIcon color={'primary'} />}</ListItemIcon>
										<ListItemText primary="See All Books" />
									</ListItemButton>
								</ListItem>
							</List>
						</CardContent>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
}
