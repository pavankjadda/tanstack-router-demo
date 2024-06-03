import ViewBook from '../../features/book/view-book/ViewBook.tsx';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/books/$id')({
	component: () => <ViewBook />,
});
