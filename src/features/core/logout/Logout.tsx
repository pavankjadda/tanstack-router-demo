import '../login/Login.scss';
import React, { useEffect } from 'react';
import useCookies from '@js-smart/react-cookie-service';
import { useNavigate } from '@tanstack/react-router';

export default function Logout(): React.JSX.Element {
	const navigate = useNavigate();
	const { deleteCookie, deleteAllCookies } = useCookies();

	/**
	 * Remove cookies and redirect user to Login page
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	useEffect(() => {
		deleteCookie('redirectUrl');
		deleteAllCookies();

		// Programmatically navigate to login page
		navigate({ to: '/login' });
	}, []);

	return (
		<div>
			<h3>Please wait while we logout...</h3>
		</div>
	);
}
