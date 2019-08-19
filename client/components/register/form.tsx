import React, { Component } from 'react';
import { TextInput, Button } from 'evergreen-ui';

interface ILoginFormState {
	username: string;
	password: string;
	repeatPassword: string;
	email: string;
}

export default class RegisterForm extends Component<any, ILoginFormState> {
	constructor(props: any) {
		super(props)
		this.state = {
			username: '',
			password: '',
			repeatPassword: '',
			email: ''
		}
	}

	render() {
		return (
			<div className="register-form-container">
				<style jsx>{`
					.register-form-container{
						display:grid;
						grid-row-gap: 5px;
						padding:20px;
					}
					.register-form-links{
						font-size:12px;	
						width:280px;
						text-align:center;
						margin-top:10px;
					}
					.register-form-link{
						cursor: pointer;
						margin:0px 10px;
					}
					.register-form-link:hover{
						color:gray;
					}
					.register-button-text{
						margin:0 auto;
						font-weight: bold;
					}
      `}</style>
				<div>
					<h1 className="register-form-header">Register</h1>
				</div>

				<span>Username</span>
				<TextInput
					type='text'
					width={280}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ username: e.target.value }) }}
					value={this.state.username}
				/>

				<span>Email</span>
				<TextInput
					type="text"
					width={280}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }}
					value={this.state.password}
				/>

				<span>Password</span>
				<TextInput
					type='password'
					width={280}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ password: e.target.value }) }}
					value={this.state.username}
				/>

				<span>Repeat Password</span>
				<TextInput
					type='password'
					width={280}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ repeatPassword: e.target.value }) }}
					value={this.state.username}
				/>

				<Button
					width={280}
					appearance="default">
					<span className="register-button-text" >Register</span>
				</Button>

				<div className="register-form-links">
					<span className="register-form-link" >Already registered? Sign in.</span>
				</div>
			</div>
		);
	}
}


