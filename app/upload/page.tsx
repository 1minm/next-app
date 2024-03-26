"use client"

import { useState } from "react"
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary"
import { CldImage } from "next-cloudinary"

const UploadPage = () => {
	const [publicID, setPublicID] = useState("")

	return (
		<>
			{publicID && (
				<CldImage width="512" height="512" src={publicID} alt="my image" />
			)}
			<CldUploadWidget
				uploadPreset="wjqnhkar"
				options={{
					sources: ["local"],
					multiple: true,
					maxFiles: 5,
					styles: {
						palette: {
							window: "#000000",
							sourceBg: "#000000",
							windowBorder: "#8E9FBF",
							tabIcon: "#FFFFFF",
							inactiveTabIcon: "#8E9FBF",
							menuIcons: "#2AD9FF",
							link: "#08C0FF",
							action: "#336BFF",
							inProgress: "#00BFFF",
							complete: "#33ff00",
							error: "#EA2727",
							textDark: "#000000",
							textLight: "#FFFFFF",
						},
						fonts: {
							default: null,
							"'Fira Sans', sans-serif": {
								url: "https://fonts.googleapis.com/css?family=Fira+Sans",
								active: true,
							},
						},
					},
				}}
				onSuccess={(result) => {
					if (result.event !== "success") return
					setPublicID((result?.info as CloudinaryUploadWidgetInfo)?.public_id)
				}}
			>
				{({ open }) => {
					return (
						<button className="btn btn-primary" onClick={() => open()}>
							Upload
						</button>
					)
				}}
			</CldUploadWidget>
		</>
	)
}

export default UploadPage
