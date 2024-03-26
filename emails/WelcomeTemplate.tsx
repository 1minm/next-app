import {
	Html,
	Body,
	Container,
	Text,
	Link,
	Preview,
} from "@react-email/components"

interface WelcomeTemplateProps {
	name: string
}

const WelcomeTemplate = ({ name }: WelcomeTemplateProps) => {
	return (
		<>
			<Html>
				<Preview>Welcome aboard!</Preview>
				<Body>
					<Container>
						<Text>Hello {name}</Text>
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
