export const userCreator = ({

								firstName,
								lastName,
								email,
								password,
							}) => {
	return {
		id: new Date().getTime(),
		firstName,
		lastName,
		email,
		password,
	}
};