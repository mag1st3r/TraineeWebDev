export default class TraineeWebService {
	_set = (name, data) => {
		return localStorage.setItem(name,JSON.stringify(data))
	};

	_get = (name) => {
		return JSON.parse(localStorage.getItem(name))
	};

	addNewUser = async (user) => {
		const DB = await this._get('usersBase');
		if (!DB) return await this._set('usersBase', [ user ]);
		const newDB = [user].concat(...DB);
		return await this._set('usersBase', newDB);
	}
}