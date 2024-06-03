import { createLazyFileRoute } from '@tanstack/react-router';
import Login from '../features/core/login/Login.tsx';

export const Route = createLazyFileRoute('/login')({
	component: () => <Login />,
});
