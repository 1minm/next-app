import Link from "next/link"
import UserTable from "./UserTable"
import { Suspense } from "react"

interface UsersPageProps {
	searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: UsersPageProps) => {
	return (
		<>
			<h1>UsersPage</h1>
			<Link href="/users/new" className="btn">
				New User
			</Link>
			<Suspense fallback={<p>Loading...</p>}>
				<UserTable sortOrder={sortOrder} />
			</Suspense>
		</>
	)
}

export default UsersPage
