import Home from '../features/home/Home';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: () => <Home />,
});
