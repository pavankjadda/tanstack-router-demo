import { createLazyFileRoute } from '@tanstack/react-router';
import Home from '../features/home/Home.tsx';

export const Route = createLazyFileRoute('/')({
	component: () => <Home />,
});
