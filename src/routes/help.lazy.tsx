import Help from '../features/help/Help';
import { createLazyFileRoute } from '@tanstack/react-router';
import Layout from '../components/layout/side-bar/Layout.tsx';

export const Route = createLazyFileRoute('/help')({
	component: () => <HelpPage />,
});

const HelpPage = () => {
	return (
		<Layout>
			<Help />
		</Layout>
	);
};
