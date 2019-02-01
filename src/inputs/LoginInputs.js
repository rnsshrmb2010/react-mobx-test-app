import { observable } from 'mobx';
import { LoginValidate } from './../validators'
import { LABEL } from './../lang'

export default class {
	@observable username = null;
	@observable password = null;

	constructor(username = '', password = '') {
		this.username = new LoginValidate('username', LABEL.LBL_USERNAME, username)
		this.password = new LoginValidate('password', LABEL.LBL_PASSWORD, password)
	}

	resetInputs() {
		this.username = new LoginValidate('username', 'Username', '')
		this.password = new LoginValidate('password', 'Username', '')
	}

	getParams() {
		return {
			'username': this.username.value,
			'password': this.password.value
		}
	}
	
	update(key_name, value) {
		this[key_name].value = value
		this[key_name].validate()
	}

	validate() {
		let isValid = true;
		for (let key in this) {
			this[key].validate();
			if (this[key].errors.length) {
				isValid = false;
			}
		}
		return isValid;
	}

}