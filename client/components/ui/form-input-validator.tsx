import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import {
	TextValidatorTypes as validatorTypes
} from '../../enums/validatorTypes';
import {
	Error
} from '../../types/error';

type Props = {
	label: string;
	validations: validatorTypes[];
	onChange: Function;
	minLength?: number;
	maxLength?: number;
	match?: string;
	email?: string;
	type?: string;
	errors?: Error[];
};

type State = {
	checkForErrors?: Function,
	isValid: Boolean,
	errors: Error[],
	value: string,
	match: string
};

export default class FormInputValidator extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isValid: true,
			errors: [],
			value: '',
			match: ''
		};
	}

	containsError = (errors: Error[], errorType: validatorTypes): Boolean => {
		let containes = false;
		for (let i = 0; i < errors.length; i++) {
			const error = errors[i];
			if (error.validator === errorType) {
				containes = true;
			}
		}
		return containes;
	}

	setError = (errors: Error[], errorType: validatorTypes) => {
		const oldErrors = this.state.errors;
		const newErrors = [...oldErrors];
		let newError: Error[] = errors.filter((error) => {
			return error.validator === errorType
		});

		if (oldErrors.length > 0) {
			// if error is not already in array push error
			if (!this.containsError(oldErrors, errorType)) {
				newErrors.push(...newError);
			}
		} else {
			newErrors.push(...newError);
		}

		// find the errorType in errors and set push it in errors array
		// console.log(errors);
		this.setState({
			isValid: false,
			errors: newErrors
		});
	}

	removeError = (removeType: validatorTypes) => {
		const { errors } = this.state;
		const newErrors: Error[] = [];
		// remove error with this  type from errors array.
		for (let i = 0; i < errors.length; i++) {
			const error = errors[i];
			if (error.validator !== removeType) {
				newErrors.push(error)
			}
		}
		this.setState({
			// if errors array is empty then the input is valid.
			isValid: Boolean(newErrors.length === 0),
			errors: newErrors
		})
	}

	onBlur = () => {
		const { value, match } = this.state;
		const { label, validations, errors } = this.props;

		for (let i = 0; i < validations.length; i++) {
			const validation = validations[i];
			switch (validation) {
				case validatorTypes.required:
					// if its required and length is 0 set errors.
					if (value.length === 0) {
						this.setError(errors, validatorTypes.required)
					} else {
						// remove error from said type from array with errors if there was one.
						this.removeError(validatorTypes.required)
					}
					break;
				case validatorTypes.match:

					break;
				case validatorTypes.maxLength:

					break;
				case validatorTypes.minLength:

					break;
				case validatorTypes.email:

					break;
				default:
					break;
			}

		}
	}

	componentDidMount() {
		const checkForErrors = this.containsErrors;
		this.setState({
			checkForErrors: checkForErrors,
			match: this.props.match
		})
	}

	handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		const { onChange, label } = this.props;
		const { isValid } = this.state
		this.setState({ value: value })
		onChange(value, label, isValid)
	}

	containsErrors = (validations: validatorTypes[], value: string): boolean => {
		console.log('kaci kaci', validations, value);
		return true;
	}

	static getDerivedStateFromProps({ label, validations, match, maxLength, minLength, }: Props, { value, isValid, checkForErrors }: State) {
		console.log(value)
		console.log('uoba')


		const hasErrors: boolean = checkForErrors ? checkForErrors(validations, value) : false;

		return {
			match: match,
			isValid: hasErrors
		};
	}

	render() {
		const { value, isValid, errors, match } = this.state;
		const { label, type } = this.props;
		return (
			<div className="text-field-validation-container">
				<TextField
					label={label}
					type={type ? type : ''}
					value={value}
					onChange={this.handleChange}
					onBlur={this.onBlur}
					margin="normal"
				/>
				{!isValid &&
					<div>
						{errors.map(({ message }, i) => <p key={i}>{message}</p>)}
					</div>}
			</div>
		)
	}
}