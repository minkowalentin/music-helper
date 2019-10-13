import TopPanel from './top-panel/TopPanel';

const Layout = props => (
	<div>
		<style jsx global>{`
					body{
						@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
						padding: 0px;
						margin: 0px;
						background-color:#D4EEE2;
    				font-family: 'Roboto', sans-serif;

					}
        .layout-container {
					padding: 10px;
				}
      `}</style>
		<TopPanel />
		<div className="layout-container">
			{props.children}
		</div>
	</div>
);

export default Layout;

