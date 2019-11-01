import React from 'react'
import App from 'next/app'
import Layout from '../app/components/layout/Layout';
import Head from 'next/head'

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<div>
				<Head>
					<title>Music Helper</title>
				</Head>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		)
	}
}

export default MyApp
