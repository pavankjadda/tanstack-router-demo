import { createLazyFileRoute } from '@tanstack/react-router';
import Profile from '../features/profile/Profile.tsx';
import Layout from '../features/layout/side-bar/Layout.tsx';

export const Route = createLazyFileRoute('/profile')({
	component: () => <ProfilePage />,
});

const ProfilePage = () => {
	return (
		<Layout>
			<Profile />
		</Layout>
	);
};
