import { createLazyFileRoute } from '@tanstack/react-router';
import AllBooks from '../../features/book/all-books/AllBooks.tsx';

export const Route = createLazyFileRoute('/book/all')({
	component: () => <AllBooksPage />,
});

const AllBooksPage = () => {
	return <AllBooks />;
};
