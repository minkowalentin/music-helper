import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { TextValidator } from '../../interfaces/textValidators'
import { TextValidatorTypes } from '../../enums/validatorTypes'

interface TextFieldValidationProps {
	label: string;
	value: string;
	onChange: Function;
	hasError?: Function;
	validators?: TextValidator[];
	type?: string;
}

export default function TextFieldValidation(props: TextFieldValidationProps) {
	const [isValid, setIsValid] = useState(true)
	const [isTouched, setIsTouched] = useState(false)
	const [errorMessages, setErrorMessages] = useState([])
	const { label, value, onChange, ...optional } = props

	function inputChaged(e: any) {
		// set as touched
		if (!isTouched) {
			setIsTouched(true)
		}
		// dispatch changes to parent component
		onChange(e)

		if (optional.validators) {
			let errors: string[] = [];
			optional.validators.forEach(validator => {
				const error = checkValidity(validator, e.target.value)
				if (error) {
					errors.push(error)
				}
			});
			setErrorMessages(errors)
			setIsValid(Boolean(errors.length === 0))
			optional.hasError(errors.length !== 0)
		}
	}

	function checkValidity(validator: TextValidator, targetValue: string): string {
		switch (validator.type) {
			case TextValidatorTypes.email:
				// if input field is not empty and email is invalid return this
				if (targetValue.length !== 0) {
					return validateEmail(targetValue) ? '' : 'Email is not valid'
				}
				return ''
			case TextValidatorTypes.required:
				return targetValue.length > 0 ? '' : 'This field is required!'
			case TextValidatorTypes.match:
				return targetValue === validator.match ? '' : `${label} is not matching!`
			case TextValidatorTypes.maxLength:
				return targetValue.length > validator.maxLength ? `Text cannot be longer than ${validator.maxLength} symbols!` : ''
			case TextValidatorTypes.minLength:
				if (targetValue.length !== 0) {
					return targetValue.length < validator.minLength ? `Text cannot be shorter than ${validator.minLength} symbols!` : ''
				}
				return ''
			default:
				break;
		}
	}

	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	return (
		<div>
			<style jsx>
				{
					`
				.text-field-validation-container{
					display:flex;
					flex-direction: column;
				}
				`
				}
			</style>
			<div className="text-field-validation-container">
				<TextField
					label={label}
					type={optional.type ? optional.type : ''}
					value={value}
					onChange={(e) => inputChaged(e)}
					margin="normal"
				/>
				{!isValid &&
					<div>
						{errorMessages.map((message, i) => <p key={i}>{message}</p>)}
					</div>}
			</div>
		</div>
	)
}