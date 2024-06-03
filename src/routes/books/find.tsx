import { createLazyFileRoute } from '@tanstack/react-router';
import FindBook from '../../features/book/find-book/FindBook.tsx';

export const Route = createLazyFileRoute('/books/find')({
	component: () => <FindBook />,
});
