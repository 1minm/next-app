import { notFound } from "next/navigation"

interface UserDetailPageProps {
	params: { id: number }
}

const UserDetailPage = ({ params: { id } }: UserDetailPageProps) => {
	if (id > 10) notFound()

	return (
		<>
			<h1>UserDetailPage {id}</h1>
		</>
	)
}

export default UserDetailPage
