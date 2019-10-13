import Link from "next/link"

export default function TopPanel() {
	return (
		<div>
			<style jsx>{
				`
				.toppanel-link {
					margin: 0px 10px;
				}
				`
			}
			</style>
			<div className="toppanel-container">
				<Link
					href="/">
					<a className="toppanel-link">
						Home
					</a>
				</Link>
				<Link href="/register">
					<a className="toppanel-link">
						Register
					</a>
				</Link>
				<Link href="/login">
					<a className="toppanel-link">
						Login
					</a>
				</Link>
			</div>
		</div>
	)
}