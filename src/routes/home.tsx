import Home from '../features/home/Home';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/home')({
	component: () => <HomePage />,
});

const HomePage = () => {
	return <Home />;
};
