import React from 'react';
import FormInputValidator from '../ui/form-input-validator';
import {
	TextValidatorTypes as validatorTypes
} from '../../enums/validatorTypes';
import {
	Error
} from '../../types/error';

const userValidators: validatorTypes[] = [validatorTypes.required, validatorTypes.maxLength, validatorTypes.minLength];
const emailValidators: validatorTypes[] = [validatorTypes.required, validatorTypes.email];
const repeatEmailValidators: validatorTypes[] = [validatorTypes.match];
const passwordValidators: validatorTypes[] = [validatorTypes.required, validatorTypes.minLength, validatorTypes.maxLength];
const repeatPasswordValidators: validatorTypes[] = [validatorTypes.match];

enum StateLabels {
	username = "username",
	email = "email",
	repeatemail = "repeatEmail",
	password = "password",
	repeatpassword = "repeatPassword"
}

type State = {
	username: FormElement,
	email: FormElement,
	repeatEmail: FormElement,
	repeatPassword: FormElement,
	password: FormElement,
	valid: boolean
}

type FormElement = {
	value: string,
	valid: boolean
}
export default class Form extends React.Component<any, Partial<State>> {
	constructor(props: any) {
		super(props);
		this.state = {
			valid: false,
			username: {
				value: '',
				valid: false
			},
			email: {
				value: '',
				valid: false
			},
			repeatEmail: {
				value: '',
				valid: false
			},
			repeatPassword: {
				value: '',
				valid: false
			},
			password: {
				value: '',
				valid: false
			}
		};
	}

	handleChange = (value: string, field: string, valid: boolean) => {
		console.log(value, field)
		const state = StateLabels[field.toLowerCase().replace(/\s/g, "")];
		this.setState({
			[state]: {
				value: value,
				valid: valid
			}
		})
	}

	validStateChanged = (newState: boolean) => {
		this.setState({
			valid: newState
		})
	}

	render() {
		const { email, password, username, repeatEmail, repeatPassword, valid } = this.state

		const usernameValidatorPros = {
			minLength: 4,
			maxLength: 12
		}
		const passwordValidatorProps = {
			minLength: 8,
			maxLength: 50
		}

		const usernameErrors: Error[] = [
			{
				validator: validatorTypes.required,
				message: "This field is required!"
			},
			{
				validator: validatorTypes.maxLength,
				message: `Username cannot be longer than ${usernameValidatorPros.maxLength} symbols.`
			},
			{
				validator: validatorTypes.minLength,
				message: `Username cannot be shorter than ${usernameValidatorPros.minLength} symbols.`
			}
		];

		const emailErrors: Error[] = [
			{
				validator: validatorTypes.required,
				message: "This field is required!"
			},
			{
				validator: validatorTypes.email,
				message: `${email} is not a valid email address.`
			}
		];

		const repeatEmailErrors: Error[] = [
			{
				validator: validatorTypes.match,
				message: `${repeatEmail} does not match ${email} .`
			}
		];

		const passwordErrors: Error[] = [
			{
				validator: validatorTypes.required,
				message: "This field is required!"
			},
			{
				validator: validatorTypes.maxLength,
				message: `Password cannot be longer than  ${passwordValidatorProps.maxLength} symbols.`
			},
			{
				validator: validatorTypes.minLength,
				message: `Password must be atleast ${passwordValidatorProps.minLength} characters long!`
			}
		];

		const repeatPasswordErrors: Error[] = [
			{
				validator: validatorTypes.match,
				message: 'Passwords do not match!'
			}
		];
		return (
			<div>
				<h1>{valid ? "DA WE" : "NE WE"}</h1>
				<FormInputValidator
					label={"Username"}
					validations={userValidators}
					onChange={this.handleChange}
					minLength={usernameValidatorPros.minLength}
					maxLength={usernameValidatorPros.maxLength}
					errors={usernameErrors}
				/>
				<FormInputValidator
					label={"Email"}
					onChange={this.handleChange}
					validations={emailValidators}
					errors={emailErrors}
				/>
				<FormInputValidator
					label={"Repeat Email"}
					onChange={this.handleChange}
					validations={repeatEmailValidators}
					match={email.value}
					errors={repeatEmailErrors}
				/>
				<FormInputValidator
					label={"Password"}
					onChange={this.handleChange}
					validations={passwordValidators}
					minLength={usernameValidatorPros.minLength}
					maxLength={usernameValidatorPros.maxLength}
					errors={passwordErrors}
				/>
				<FormInputValidator
					label={"Repeat Password"}
					onChange={this.handleChange}
					validations={repeatPasswordValidators}
					match={password.value}
					errors={repeatPasswordErrors}
				/>
			</div >
		)
	}
}