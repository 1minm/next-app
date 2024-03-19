interface ProductPageProps {
	params: { slug: string[] }
	searchParams: { sortOrder: string }
}

const ProductPage = ({
	params: { slug },
	searchParams: { sortOrder },
}: ProductPageProps) => {
	return (
		<>
			<h1>ProductPage</h1>
			<p>Params: {slug}</p>
			<p>SearchParams, sortOrder: {sortOrder}</p>
		</>
	)
}

export default ProductPage
