import { createAction, createReducer } from '@reduxjs/toolkit';
import { parseBoolean } from '@js-smart/react-kit';

/**
 * Gets the value from local storage or set default value
 *
 * @author Pavan Kumar Jadda
 * @since 1.2.21
 */
const getOrDefault = (key: string, defaultValue: any) => {
	// Return default value if window is undefined
	if (typeof window === 'undefined') {
		return parseBoolean(defaultValue);
	}
	const value = localStorage.getItem(key);
	// Return default value if value is null and set default value in local storage
	if (value === null) {
		localStorage.setItem(key, defaultValue);
		return parseBoolean(defaultValue);
	}
	return parseBoolean(value);
};

/**
 * Initialize the state
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
const initialState = {
	drawerOpen: getOrDefault('drawerOpen', true),
	mobileDrawerOpen: getOrDefault('mobileDrawerOpen', false),
};

/**
 * Define Protocol Document Search Form Actions
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export const toggleDrawerStatus = createAction('preferences/toggleDrawerStatus');
export const toggleMobileDrawerStatus = createAction('preferences/toggleMobileDrawerStatus');

/**
 * Define Protocol Document Search Form Reducer that handles actions
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export const preferencesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(toggleDrawerStatus, (state) => {
			state.drawerOpen = !state.drawerOpen;
			localStorage.setItem('drawerOpen', state.drawerOpen.toString());
		})
		.addCase(toggleMobileDrawerStatus, (state) => {
			state.mobileDrawerOpen = !state.mobileDrawerOpen;
			localStorage.setItem('mobileDrawerOpen', state.mobileDrawerOpen.toString());
		});
});
