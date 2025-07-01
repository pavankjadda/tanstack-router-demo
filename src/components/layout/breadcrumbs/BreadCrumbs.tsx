import { Link } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useQuery } from '@tanstack/react-query';
import { BookService } from '../../../services/BookService.ts';
import { useMatch } from '@tanstack/react-router';
import RouterLink from '../../RouterLink.tsx';

export default function BreadCrumbs(): React.JSX.Element {
	const { data } = useQuery({
		queryKey: ['books'],
		queryFn: () => BookService.getAllBooks(),
	});

	const rootMatches = useMatch({ from: '/' });
	const homeMatches = useMatch({ from: '/home' });
	const faqMatches = useMatch({ from: '/faq' });
	const profileMatches = useMatch({ from: '/profile' });
	const bookMatches = useMatch({ from: '/book/' });
	const booksAllMatches = useMatch({ from: '/book/all' });
	const bookViewMatches = useMatch({ from: '/book/$id' });
	const bookFindMatches = useMatch({ from: '/book/find' });
	
	return (
		<>
			<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
				{(rootMatches || homeMatches) && (
					<Link underline="hover" color="inherit" component={RouterLink} to="/">
						Home
					</Link>
				)}
				{faqMatches && (
					<Link underline="hover" color="inherit" component={RouterLink} to="/faq">
						Faq
					</Link>
				)}
				{profileMatches && (
					<Link underline="hover" color="inherit" component={RouterLink} to="/profile">
						Profile
					</Link>
				)}
				{bookMatches && (
					<Link underline="hover" color="inherit" component={RouterLink} to="/book">
						Book
					</Link>
				)}
				{booksAllMatches && (
					<Link underline="hover" color="inherit" component={RouterLink} to="/book/all">
						All
					</Link>
				)}
				{bookFindMatches && (
					<Link underline="hover" color="inherit" component={RouterLink} to="/book/find">
						Find
					</Link>
				)}
				{bookViewMatches && (
					<Link underline="hover" color="inherit" component={RouterLink} to={`/book/${bookViewMatches.params.id}`}>
						{data?.find((book) => book.id.toString() === bookViewMatches.params.id)?.id}
					</Link>
				)}
			</Breadcrumbs>
		</>
	);
}
