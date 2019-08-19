import React, { Component } from 'react';
import Layout from '../components/layout/MyLayout';
import RegisterForm from '../components/register/form'

export default class Login extends Component {
	render() {
		return (
			<Layout>
				<RegisterForm />
			</Layout >
		);
	}
}


