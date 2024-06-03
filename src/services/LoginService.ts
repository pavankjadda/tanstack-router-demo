import axios, { AxiosResponse } from 'axios';
import { BASE_API_URL, USER_API_URL } from '../constants/ApiConstants';
import { User } from '../features/user/User';

/**
 * Utility class for login operations
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export class LoginService {
	/**
	 * Takes user credentials and sends Login Request to backend
	 * @param username Username of the User
	 * @param password Password of the User
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static loginUser(username: string, password: string): Promise<AxiosResponse<User>> {
		const headers = {
			'content-type': 'application/json',
			authorization: 'Basic ' + btoa(username + ':' + password),
		};
		return axios.get<User>(`${BASE_API_URL + USER_API_URL}/authenticate`, { headers });
	}
}
