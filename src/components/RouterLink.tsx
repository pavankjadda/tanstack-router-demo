import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link } from '@tanstack/react-router';

/**
 * Reusable custom React RouterLink component.
 *
 * @param props Properties of the React Node
 *
 * @author Pavan Kumar Jadda
 * @since 1.4.0
 */
export default function RouterLink(props: Readonly<{ to: string; children?: React.ReactNode }>): React.JSX.Element {
	return (
		<MuiLink component={Link} to={props.to} className={'next-btn-link'} underline="hover">
			{props.children}
		</MuiLink>
	);
}
