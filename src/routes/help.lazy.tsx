import Help from '../features/help/Help';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/help')({
	component: () => <Help />,
});
