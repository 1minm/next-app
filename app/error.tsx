"use client"

interface ErrorPageProps {
	error: Error
	reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
	console.log(error)
	return (
		<>
			<p>An unexpected error has occurred.</p>
			<button className="btn" onClick={() => reset()}>
				Retry
			</button>
		</>
	)
}

export default ErrorPage
