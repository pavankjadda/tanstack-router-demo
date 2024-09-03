import Home from '../features/home/Home';
import { createFileRoute } from '@tanstack/react-router';
import Layout from '../features/layout/side-bar/Layout.tsx';

export const Route = createFileRoute('/')({
	component: () => <HomePage />,
});

const HomePage = () => {
	return (
		<Layout>
			<Home />
		</Layout>
	);
};
