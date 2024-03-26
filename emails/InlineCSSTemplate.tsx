import {
	Html,
	Body,
	Container,
	Text,
	Link,
	Preview,
} from "@react-email/components"
import { CSSProperties } from "react"

const body: CSSProperties = {
	backgroundColor: "red",
}

const heading: CSSProperties = {
	fontSize: "32px",
	color: "whitesmoke",
}

const WelcomeTemplate = ({ name }: { name: string }) => {
	return (
		<>
			<Html>
				<Preview>Welcome aboard!</Preview>
				<Body style={body}>
					<Container>
						<Text style={heading}>Hello {name}</Text>
						<Link href="https://openprocessing.org/user/324002/?view=activity&o=48">
							ZRNOF
						</Link>
					</Container>
				</Body>
			</Html>
		</>
	)
}

export default WelcomeTemplate
