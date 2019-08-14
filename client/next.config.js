const withSass = require('@zeit/next-sass')
module.exports = withSass({
	sassLoaderOptions: {
		includePaths: ["./styles/main.scss"]
	}
	/* config options here */
})