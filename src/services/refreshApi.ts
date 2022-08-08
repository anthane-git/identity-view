import { createRefresh } from 'react-auth-kit';
import { refreshTokenRoute } from 'services/endpoints';
import { api } from 'services/api';

export const refreshApi = createRefresh({
	interval: 10,
	refreshApiCallback: ({
		authToken,
		authTokenExpireAt,
		refreshToken,
		refreshTokenExpiresAt,
		authUserState,
	}): any => {
		return api
			.post(refreshTokenRoute, {
				oldAuthToken: authToken,
				refresh: refreshToken,
			})
			.then(({ data }: any) => {
				console.log(data);
				return {
					isSuccess: true,
					newAuthToken: data.access_token,
				};
			})
			.catch(e => {
				console.log(e);
				return {
					isSuccess: false,
				};
			});
	},
});
