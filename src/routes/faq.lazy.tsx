import { createLazyFileRoute } from '@tanstack/react-router';
import Faq from '../features/help/Faq.tsx';

export const Route = createLazyFileRoute('/faq')({
	component: () => <FaqPage />,
});

const FaqPage = () => {
	return <Faq />;
};
