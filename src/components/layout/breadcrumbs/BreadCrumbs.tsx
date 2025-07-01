import { Link } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useQuery } from '@tanstack/react-query';
import { BookService } from '../../../services/BookService.ts';
import { useMatches } from '@tanstack/react-router';
import RouterLink from '../../RouterLink.tsx';

export default function BreadCrumbs(): React.JSX.Element {
	const { data } = useQuery({
		queryKey: ['books'],
		queryFn: () => BookService.getAllBooks(),
	});

	const matches = useMatches();
	const hasMatch = (path: string) => matches.some((m) => m.pathname === path);
	const bookViewMatch = matches.find((m) => m.routeId === '/book/$id');

	return (
		<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
			{(hasMatch('/') || hasMatch('/home')) && (
				<Link underline="hover" color="inherit" component={RouterLink} to="/">
					Home
				</Link>
			)}
			{hasMatch('/faq') && (
				<Link underline="hover" color="inherit" component={RouterLink} to="/faq">
					Faq
				</Link>
			)}
			{hasMatch('/profile') && (
				<Link underline="hover" color="inherit" component={RouterLink} to="/profile">
					Profile
				</Link>
			)}
			{hasMatch('/book') && (
				<Link underline="hover" color="inherit" component={RouterLink} to="/book">
					Book
				</Link>
			)}
			{hasMatch('/book/all') && (
				<Link underline="hover" color="inherit" component={RouterLink} to="/book/all">
					All
				</Link>
			)}
			{hasMatch('/book/find') && (
				<Link underline="hover" color="inherit" component={RouterLink} to="/book/find">
					Find
				</Link>
			)}
			{bookViewMatch && (
				<Link underline="hover" color="inherit" component={RouterLink} to={`/book/${bookViewMatch.params.id}`}>
					{data?.find((book) => book.id.toString() === bookViewMatch.params.id)?.id}
				</Link>
			)}
		</Breadcrumbs>
	);
}
