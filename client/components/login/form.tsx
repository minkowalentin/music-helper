import React, { Component } from 'react';
import { TextInput, Button, Icon } from 'evergreen-ui';

interface ILoginFormState {
	username: string;
	password: string;
}

export default class LoginForm extends Component<any, ILoginFormState> {
	constructor(props: any) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
	}

	handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			password: e.target.value
		})
	}

	handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			username: e.target.value
		})
	}

	render() {
		return (
			<div className="login-form-container">
				<style jsx>{`
					.login-form-container{
						display:grid;
						grid-row-gap: 5px;
						padding:20px;
					}
					.login-form-links{
						font-size:12px;	
						width:280px;
						text-align:center;
						margin-top:10px;
					}
					.login-form-link{
						cursor: pointer;
						margin:0px 10px;
					}
					.login-form-link:hover{
						color:gray;
					}
					.login-button-text{
						margin:0 auto;
						font-weight: bold;
					}
					.login-input-field{
						display:flex;
					}
					.login-input-icon{
						background-color:white;
						height:30px;
						width:30px;
						display:flex;
						justify-content:center;
						color:#007489;
						align-items:center;
					}
      `}</style>
				<div>
					<h1 className="login-form-header">Login</h1>
				</div>

				{/* username */}
				<div className="login-input-field">
					<div className="login-input-icon">
						<Icon icon="user" size={20} />
					</div>
					<TextInput
						boxShadow="none"
						borderRadius={0}
						height={30}
						type='text'
						width={250}
						onChange={this.handleUserChange}
						value={this.state.username}
					/>
				</div>

				{/* password */}
				<div className="login-input-field">
					<div className="login-input-icon">
						<Icon icon="key" size={20} />
					</div>
					<TextInput
						height={30}
						boxShadow="none"
						borderRadius={0}
						type="password"
						width={250}
						onChange={this.handlePassChange}
						value={this.state.password}
					/>
				</div>

				<Button
					width={280}
					appearance="default">
					<span className="login-button-text" >Login</span>
				</Button>

				<div className="login-form-links">
					<span className="login-form-link" >Forgot password?</span>
					<span className="login-form-link">Create user. </span>
				</div>
			</div>
		);
	}
}


