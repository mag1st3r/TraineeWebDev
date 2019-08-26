import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import cx from 'classnames';

import {userCreator} from "../../../utils/user-creator";
import withTraineeWebStoreService from "../../hoc/with-trainee-web-service";

import './register-page.css';


const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


class RegisterPage extends React.Component {
	state = {
		name: '',
		email: '',
		age: '',
		password: '',
		city: '',
		consent: false,
		newUser: {},
		validationErrors:{
			name: null,
			email: null,
			age: null,
			password: null,
			city: null,
			consent: null
		},
		inputsValidState: {
			name: null,
			email: null,
			age: null,
			password: null,
			city: null,
			consent: null
		},
	};

	isValidateField(fieldName, value){
		let { validationErrors, inputsValidState } = this.state;
		switch (fieldName) {
			case 'email':
				const emailCondition = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				inputsValidState.email = emailCondition
					? 'valid'
					: 'invalid';
				validationErrors.email = emailCondition
					? 'Looks good!'
					: 'Please, provide a correct email!';
				break;
			case 'password':
				const passwordCondition = value.length > 6;
				inputsValidState.password = passwordCondition
					? 'valid'
					: 'invalid';
				validationErrors.password = passwordCondition
					? 'Looks good!'
					: 'Password must be more than six characters!';
				break;
			case 'name':
				const nameCondition = value.charAt(0) === value.charAt(0).toUpperCase();
				inputsValidState.name = nameCondition
					? 'valid'
					: 'invalid';
				validationErrors.name = nameCondition
					? 'LooksGood!'
					: 'First letter must be in uppercase!';
				break;
			case 'age':
				const reg = /^[0-9]+$/;
				const isNumber = reg.test(value);
				inputsValidState.age = isNumber
					? 'valid'
					: 'invalid';
				validationErrors.age = isNumber
					? 'Looks good!'
					: 'Only digits!';
				break;
			case 'city':
				const cityCondition = value.charAt(0) === value.charAt(0).toUpperCase();
				inputsValidState.city = cityCondition
					? 'valid'
					: 'invalid';
				validationErrors.city = cityCondition
					? 'LooksGood!'
					: 'First letter must be in uppercase!';
				break;
			case 'consent':
				inputsValidState.consent = value
					? 'valid'
					: 'invalid';
				validationErrors.consent = value
					? 'LooksGood!'
					: 'You must agree before submitting!';
				break;
			default: break
		}
		this.setState({validationErrors, inputsValidState})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const {traineeWebService} = this.props;
		const newUser = userCreator({...this.state});
		traineeWebService.addNewUser(newUser);
	};


	onInputTextChange = (e) => {
		const key = e.target.name;
		let value = e.target.value;
		this.isValidateField(key, value);
		this.setState({
			[key]:value
		})
	};

	onChangeCaptcha(value) {
		console.log("Captcha value:", value);
	}

	render() {
		const emailInputClass = cx({[`form-control is-${this.state.inputsValidState.email}`]: true});
		const emailErrorClass = cx({[`${this.state.inputsValidState.email}-feedback`]: true});
		const passwordInputClass = cx({[`form-control is-${this.state.inputsValidState.password}`]: true});
		const passwordErrorClass = cx({[`${this.state.inputsValidState.password}-feedback`]: true});
		const ageInputClass = cx({[`form-control is-${this.state.inputsValidState.age}`]: true});
		const ageErrorClass = cx({[`${this.state.inputsValidState.age}-feedback`]: true});
		const nameInputClass = cx({[`form-control is-${this.state.inputsValidState.name}`]: true});
		const nameErrorClass = cx({[`${this.state.inputsValidState.name}-feedback`]: true});
		const cityInputClass = cx({[`form-control is-${this.state.inputsValidState.city}`]: true});
		const cityErrorClass = cx({[`${this.state.inputsValidState.city}-feedback`]: true});
		const consentCheckedClass = cx({[`form-check-input is-${this.state.inputsValidState.consent}`]: true});
		const consentErrorClass = cx({[`${this.state.inputsValidState.consent}-feedback`]: true});

		return (
			<form className='register-form' onSubmit={this.onSubmit}>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputEmail4">Email</label>
						<input type="email"
							   name="email"
							   className={emailInputClass}
							   id="inputEmail4"
							   placeholder="Email"
							   value={this.state.email}
							   onChange={this.onInputTextChange}
							   required
						/>
						<div className={emailErrorClass}>
							<span>{this.state.validationErrors.email}</span>
						</div>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="inputPassword4">Password</label>
						<input type="password"
							   name="password"
							   className={passwordInputClass}
							   id="inputPassword4"
							   placeholder="Password"
							   value={this.state.password}
							   onChange={this.onInputTextChange}
							   required
						/>
						<div className={passwordErrorClass}>
							<span>{this.state.validationErrors.password}</span>
						</div>
					</div>
				</div>
				<div className="form-row">
					<div className="form-group col-md-4">
						<label htmlFor="inputName">Name</label>
						<input type="text"
							   name="name"
							   className={nameInputClass}
							   id="inputName"
							   value={this.state.name}
							   onChange={this.onInputTextChange}
							   required
						/>
						<div className={nameErrorClass}>
							<span>{this.state.validationErrors.name}</span>
						</div>
					</div>
					<div className="form-group col-md-2">
						<label htmlFor="inputAge">Age</label>
						<input type="text"
							   name="age"
							   className={ageInputClass}
							   id="inputAge"
							   value={this.state.age}
							   onChange={this.onInputTextChange}
							   required
						/>
						<div className={ageErrorClass}>
							<span>{this.state.validationErrors.age}</span>
						</div>
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="inputCity">City</label>
						<input type="text"
							   className={cityInputClass}
							   id="inputCity"
							   name="city"
							   value={this.state.city}
							   onChange={this.onInputTextChange}
							   required
						/>
						<div className={cityErrorClass}>
							<span>{this.state.validationErrors.city}</span>
						</div>
					</div>
				</div>

				<div className="form-group form-check">
					<input type="checkbox"
						   name="consent"
						   className={consentCheckedClass}
						   id="inputCheckConsent"
						   checked={this.state.consent}
						   onChange={(e) => {
							   this.onInputTextChange({
								   target: {
									   name: e.target.name,
									   value: e.target.checked,
								   }
							   });
						   }}
					/>
					<label
						className="form-check-label"
						htmlFor="inputCheckConsent">
						I accept the <u>Terms and Conditions</u>
					</label>
					<div className={consentErrorClass}>
						{this.state.validationErrors.consent}
					</div>
				</div>
				<div className="form-group">
					<ReCAPTCHA
						sitekey={TEST_SITE_KEY}
						onChange={this.onChangeCaptcha}
					/>
				</div>
				<button type="submit" className="btn btn-primary">Sign in</button>
			</form>
		)
	}
}

export default withTraineeWebStoreService()(RegisterPage)