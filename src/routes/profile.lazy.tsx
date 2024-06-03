import { createLazyFileRoute } from '@tanstack/react-router';
import Profile from '../features/profile/Profile.tsx';

export const Route = createLazyFileRoute('/profile')({
	component: () => <Profile />,
});
