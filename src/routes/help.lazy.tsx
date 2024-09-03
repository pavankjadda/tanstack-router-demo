import Help from '../features/help/Help';
import { createLazyFileRoute } from '@tanstack/react-router';
import Layout from '../features/layout/side-bar/Layout.tsx';

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
