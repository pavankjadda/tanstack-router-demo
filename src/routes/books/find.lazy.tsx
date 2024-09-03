import { createLazyFileRoute } from '@tanstack/react-router';
import Layout from '../../features/layout/side-bar/Layout.tsx';
import FindBook from '../../features/book/find-book/FindBook.tsx';

export const Route = createLazyFileRoute('/books/find')({
	component: () => <FindBookPage />,
});

const FindBookPage = () => {
	return (
		<Layout>
			<FindBook />
		</Layout>
	);
};
