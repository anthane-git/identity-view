import { Route, Routes } from 'react-router-dom';
import * as View from '@views';

export const Router = () => (
	<Routes>
		<Route index element={<View.Home />} />
		<Route path={'/register'} element={<View.Register />} />
		<Route path={'/login'} element={<View.Login />} />
		<Route path={'/callback'} element={<View.Callback />} />
	</Routes>
);
