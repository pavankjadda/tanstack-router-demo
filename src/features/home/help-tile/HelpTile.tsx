import React from 'react';
import { Card, CardContent, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import styles from '../../../components/layout/side-bar/SideBar.module.scss';
import BookIcon from '@mui/icons-material/Book';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { useNavigate } from '@tanstack/react-router';

export default function HelpTile(): React.JSX.Element {
	const navigate = useNavigate();
	return (
		<Grid container size={12} className="app-flex-justify-center" sx={{ mt: 5 }}>
			<Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 9 }}>
				<Card elevation={24}>
					<Typography style={{ margin: '10px' }} className="custom-flex-justify-center" fontWeight={'bold'} variant="h4">
						Help
					</Typography>
					<Divider />
					<CardContent className="row custom-flex-justify-center">
						<List>
							<ListItem disablePadding>
								<ListItemButton>
									<ListItemIcon className={styles.listItemIcon}>{<BookIcon color={'primary'} />}</ListItemIcon>
									<ListItemText primary="User Guide (Coming Soon)" />
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding>
								<ListItemButton onClick={() => navigate({ to: '/faq' })}>
									<ListItemIcon className={styles.listItemIcon}>{<QuestionAnswerIcon color={'primary'} />}</ListItemIcon>
									<ListItemText primary="Frequently Asked Questions" />
								</ListItemButton>
							</ListItem>
						</List>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
