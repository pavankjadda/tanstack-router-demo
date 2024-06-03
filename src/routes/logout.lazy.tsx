import { createLazyFileRoute } from '@tanstack/react-router';
import Logout from '../features/core/logout/Logout.tsx';

export const Route = createLazyFileRoute('/logout')({
	component: () => <Logout />,
});
