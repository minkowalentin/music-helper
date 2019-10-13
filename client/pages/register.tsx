import React, { Component } from 'react'
import Layout from '../components/layout/MyLayout'
import Form from '../components/forms/form'
import Button from '@material-ui/core/Button'

export default class Register extends Component {
	render() {
		return (
			<Layout>
				<Form />
				<Button
					variant="contained"
					color="primary" >
					Register
				</Button>
			</Layout >
		);
	}
}


