import { createLazyFileRoute } from '@tanstack/react-router';
import AllBooks from '../../features/book/all-books/AllBooks.tsx';

export const Route = createLazyFileRoute('/books/all')({
	component: () => <AllBooks />,
});
