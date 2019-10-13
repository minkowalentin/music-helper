import React, { Component } from 'react';
import UserForm from '../components/forms/user';
import Layout from '../components/layout/MyLayout';

export default class Login extends Component {
	render() {
		return (
			<Layout>
				<UserForm
					buttonLabel={'Register'} />

			</Layout >
		);
	}
}


