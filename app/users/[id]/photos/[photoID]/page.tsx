interface PhotoPageProps {
	params: { id: number; photoID: number }
}

const PhotoPage = ({ params: { id, photoID } }: PhotoPageProps) => {
	return (
		<>
			<h1>
				PhotoPage user: {id} photo: {photoID}
			</h1>
		</>
	)
}

export default PhotoPage
