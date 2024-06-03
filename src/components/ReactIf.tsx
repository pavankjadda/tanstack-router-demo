import React from 'react';

/**
 * Reusable If component, that renders content if the condition is true. Similar to *ngIf from Angular
 *
 * @param props Properties of the React Node
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export default function ReactIf(props: { condition: boolean | undefined; children: React.ReactNode }): React.JSX.Element {
	return props.condition === undefined || props.condition ? <React.Fragment>{props.children}</React.Fragment> : <React.Fragment />;
}
