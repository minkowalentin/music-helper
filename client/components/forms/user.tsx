import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextFieldValidation from '../ui/text-field-validation'
import { TextValidator } from '../../interfaces/textValidators'
import { TextValidatorTypes } from '../../enums/validatorTypes'

export default function UserForm({ buttonLabel }) {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [repeatEmail, setRepeatEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [hasErrors, setHasErrors] = useState(false)

	// set input fields validators
	const usernameValidators: TextValidator[] = [
		{ type: TextValidatorTypes.required },
		{ type: TextValidatorTypes.minLength, minLength: 4 },
		{ type: TextValidatorTypes.maxLength, maxLength: 15 }
	]
	const emailValidators: TextValidator[] = [
		{ type: TextValidatorTypes.required },
		{ type: TextValidatorTypes.email }
	]
	const repeatEmailValidators: TextValidator[] = [
		{
			type: TextValidatorTypes.match,
			match: email
		}
	]
	const passwordValidators: TextValidator[] = [
		{ type: TextValidatorTypes.required }
	]
	const repeatPasswordValidators: TextValidator[] = [
		{ type: TextValidatorTypes.match, match: password }
	]

	function isDisabled(): boolean {
		return hasErrors ||
			(username.length === 0 || email.length === 0 || repeatEmail.length === 0 || password.length === 0 || repeatPassword.length === 0) ? true :
			false
	}

	return (
		<div>
			<style jsx>
				{
					`
				.user-form-container{
					display:flex;
					flex-direction: column;
				}
				`
				}
			</style>
			<div className="user-form-container">
				{/* username */}
				<TextFieldValidation
					label={"Username"}
					validators={usernameValidators}
					hasError={setHasErrors}
					value={username}
					onChange={(e: any) => { setUsername(e.target.value) }}
				/>
				{/* email */}
				<TextFieldValidation
					label="Email"
					validators={emailValidators}
					value={email}
					hasError={setHasErrors}
					onChange={(e: any) => { setEmail(e.target.value); }}
				/>
				{/* repeat email */}
				<TextFieldValidation
					label="Repeat Email"
					value={repeatEmail}
					validators={repeatEmailValidators}
					hasError={setHasErrors}
					onChange={(e: any) => { setRepeatEmail(e.target.value) }}
				/>
				{/* password */}
				<TextFieldValidation
					label="Password"
					type="password"
					value={password}
					validators={passwordValidators}
					hasError={setHasErrors}
					onChange={(e: any) => { setPassword(e.target.value) }}
				/>
				{/* repeat password */}
				<TextFieldValidation
					label="Repeat Password"
					type="password"
					value={repeatPassword}
					validators={repeatPasswordValidators}
					hasError={setHasErrors}
					onChange={(e: any) => { setRepeatPassword(e.target.value) }}
				/>
				<Button
					disabled={isDisabled()}
					variant="contained"
					color="primary" >
					{buttonLabel}
				</Button>
			</div>
		</div>
	)
}