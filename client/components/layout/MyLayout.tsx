import TopPanel from './top-panel/TopPanel';



const Layout = props => (
	<div>
		<style jsx global>{`
					body{
						padding: 0px;
						margin: 0px;
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

