import React, { Component } from 'react';
import Layout from '../components/layout/MyLayout';
import LoginForm from '../components/login/form'

export default class Login extends Component {
	render() {
		return (
			<Layout>
				<LoginForm />
			</Layout >
		);
	}
}


