import { createLazyFileRoute } from '@tanstack/react-router';
import AllBooks from '../../features/book/all-books/AllBooks.tsx';
import Layout from '../../features/layout/side-bar/Layout.tsx';

export const Route = createLazyFileRoute('/books/all')({
	component: () => <AllBooksPage />,
});

const AllBooksPage = () => {
	return (
		<Layout>
			<AllBooks />
		</Layout>
	);
};
