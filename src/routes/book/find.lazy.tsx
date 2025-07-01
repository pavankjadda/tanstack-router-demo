import { createLazyFileRoute } from '@tanstack/react-router';
import Layout from '../../components/layout/side-bar/Layout.tsx';
import FindBook from '../../features/book/find-book/FindBook.tsx';

export const Route = createLazyFileRoute('/book/find')({
	component: () => <FindBookPage />,
});

const FindBookPage = () => {
	return (
		<Layout>
			<FindBook />
		</Layout>
	);
};
