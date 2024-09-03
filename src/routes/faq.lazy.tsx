import { createLazyFileRoute } from '@tanstack/react-router';
import Faq from '../features/help/Faq.tsx';
import Layout from '../features/layout/side-bar/Layout.tsx';

export const Route = createLazyFileRoute('/faq')({
	component: () => <FaqPage />,
});

const FaqPage = () => {
	return (
		<Layout>
			<Faq />
		</Layout>
	);
};
