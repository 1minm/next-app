import { sort } from "fast-sort"
import Link from "next/link"

interface UserTableProps {
	sortOrder: string
}

interface User {
	id: number
	name: string
	email: string
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users")
	const users: User[] = await res.json()

	const sortedUsers = sort(users).asc((user) =>
		sortOrder === "email" ? user.email : user.name
	)

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th>
							<Link href="/users/?sortOrder=name">Name</Link>
						</th>
						<th>
							<Link href="/users/?sortOrder=email">Email</Link>
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedUsers.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default UserTable
