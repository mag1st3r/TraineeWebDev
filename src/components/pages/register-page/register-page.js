import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import cx from 'classnames';

import {userCreator} from "../../../utils/user-creator";
import withTraineeWebStoreService from "../../hoc/with-trainee-web-service";

import './register-page.css';


const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


class RegisterPage extends React.Component {
	state = {
		firstName: '',
		lastName: "",
		email: '',
		password: '',
		consent: false,
		success: false,
		newUser: {},
		validationErrors:{
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			consent: null
		},
		inputsValidState: {
			name: null,
			email: null,
			password: null,
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

	resetForm() {
        this.setState({
            firstName: '',
			lastName: "",
			email: '',
			password: '',
			success: true,
            validationErrors:{
                firstName: '',
				lastName: "",
				email: '',
				password: '',
            },
            inputsValidState: {
                firstName: '',
				lastName: "",
				email: '',
				password: '',
            },
		});
		console.log(this.state);
	}
	
	setUser = async(newUser) => {
		const {traineeWebService} = this.props;
		await traineeWebService.addNewUser(newUser).then( (body) => {
			this.resetForm();
		});
   }
	onSubmit = (e) => {
		e.preventDefault();

		const newUser = userCreator({...this.state});
		this.setUser(newUser);
		console.log(this.state);
	};


	onInputTextChange = (e) => {
		const key = e.target.name;
		let value = e.target.value;
		this.isValidateField(key, value);
		if (this.state.success) {
			this.setState({
				success: false,
			});
		}; 
		this.setState({
			[key]:value,
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
		const nameInputClass = cx({[`form-control is-${this.state.inputsValidState.name}`]: true});
		const nameErrorClass = cx({[`${this.state.inputsValidState.name}-feedback`]: true});
		const consentCheckedClass = cx({[`form-check-input is-${this.state.inputsValidState.consent}`]: true});
		const consentErrorClass = cx({[`${this.state.inputsValidState.consent}-feedback`]: true});

		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
					
						<form className='register-form' onSubmit={this.onSubmit}>
							<div className="form-row">
							<div className="form-group col-md-6">
									<label htmlFor="firstName">First Name</label>
									<input type="text"
										name="firstName"
										className={nameInputClass}
										id="firstName"
										value={this.state.firstName}
										onChange={this.onInputTextChange}
										required
									/>
									<div className={nameErrorClass}>
										<span>{this.state.validationErrors.name}</span>
									</div>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="lastName">Last Name</label>
									<input type="text"
										name="lastName"
										className={nameInputClass}
										id="lastName"
										value={this.state.lastName}
										onChange={this.onInputTextChange}
										required
									/>
									<div className={nameErrorClass}>
										<span>{this.state.validationErrors.name}</span>
									</div>
								</div>
							</div>
							<div className="form-row">
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
							{this.state.success ? <div>Форма успешно отправленная</div> : <div> </div>}
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default withTraineeWebStoreService()(RegisterPage)