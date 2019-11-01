import useForm from 'react-hook-form'

export default function Form() {
	const { register, handleSubmit, watch, errors, formState } = useForm({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
	});

	const onSubmit = data => { console.log(data) }

	return (
		<form
			className="form"
			onSubmit={handleSubmit(onSubmit)}>
			<style jsx>
				{
					`
						.form{
							display:grid;
							grid-template-columns: 1fr;
							grid-row-gap: 15px;
						}
						.input-container{
							display:grid;
							grid-template-columns: 1fr;
							grid-row-gap: 5px;
						}
						`
				}
			</style>
			{/* USERNAME */}
			<div className="input-container">
				<span>Username</span>
				<input name="username" ref={register({ required: true, minLength: 5, maxLength: 30 })} />
				{errors.username &&
					errors.username.type === 'required' &&
					<span>This field is required</span>}
				{errors.username &&
					errors.username.type === 'maxLength' &&
					<span>Username cannot be longer than 30 symbols.</span>}
			</div>
			{/* EMAIL */}
			<div className="input-container">
				<span>Email</span>
				<input name="email" ref={
					register({
						required: true,
						pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					})} />
				{errors.email &&
					errors.email.type === 'required' &&
					<span>This field is required</span>}
				{errors.email &&
					(errors.email.type !== 'required' && errors.email.type === 'pattern') &&
					<span>Invalid email address.</span>}
			</div>
			{/* REPEAT EMAIL */}
			<div className="input-container">
				<span>Repeat Email</span>
				<input
					ref={
						register({
							validate: value => { return value === watch('email') }
						})
					}
					name="repeatEmail" />
				{errors.repeatEmail &&
					errors.repeatEmail.type === 'validate' && <span>Email is not matching!</span>}
			</div>
			{/* PASSWORD */}
			<div className="input-container">
				<span>Password</span>
				<input name="password" type="password" ref={register({ required: true, minLength: 8, maxLength: 300 })} />
				{errors.password &&
					errors.password.type === 'required' &&
					<span>Password is required!</span>}
				{errors.password &&
					errors.password.type === 'maxLength' &&
					<span>The passowrd is too long.</span>}
				{errors.password &&
					errors.password.type === 'minLength' &&
					<span>The password is too short.</span>}
			</div>
			{/* REPEAT PASSWORD */}
			<div className="input-container">
				<span>Repeat Password</span>
				<input name="repeatPassword" type="password" ref={
					register({
						validate: value => { return value === watch('password') }
					})
				} />
				{errors.repeatPassword && <span>Password is not matching!</span>}
			</div>
			<div className="input-container">
				<input type="submit" disabled={!formState.isValid} />
			</div>
		</form>
	)
}