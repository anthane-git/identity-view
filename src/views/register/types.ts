export type RegisterErrRes = {
	error?: string;
	message?: string;
	statusCode: number;
};

export type Inputs = {
	username: string;
	email: string;
	password: string;
	server: string;
};
