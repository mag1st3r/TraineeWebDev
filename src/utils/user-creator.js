export const userCreator = ({

								name,
								email,
								age,
								password,
								city,
								address
							}) => {
	return {
		id: new Date().getTime(),
		name,
		email,
		age,
		password,
		city,
		address
	}
};