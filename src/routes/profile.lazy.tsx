import { createLazyFileRoute } from '@tanstack/react-router';
import Profile from '../features/profile/Profile.tsx';

export const Route = createLazyFileRoute('/profile')({
	component: () => <ProfilePage />,
});

const ProfilePage = () => {
	return <Profile />;
};
