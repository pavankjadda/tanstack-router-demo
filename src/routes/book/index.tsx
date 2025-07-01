import { createFileRoute } from '@tanstack/react-router';
import AllBooks from '../../features/book/all-books/AllBooks.tsx';

export const Route = createFileRoute('/book/')({
	component: () => <BookHomePage />,
});

const BookHomePage = () => {
	return <AllBooks />;
};
