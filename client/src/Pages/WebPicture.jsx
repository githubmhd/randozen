import { useRef } from "react";
import Webcam from "react-webcam";
import { useImageContext } from "../Context/ImageContext";

function Camera() {
	const webcamRef = useRef(null);
	const { addImage } = useImageContext();

	const handleClick = () => {
		capture();
		handleMessage();
	};

	const handleMessage = () => {
		alert("Photo ajouté dans vos souvenirs ! ✅");
	};

	const capture = () => {
		const imageSrc = webcamRef.current.getScreenshot();
		addImage(imageSrc);
		// Envoyer l'image au backend pour le stockage
		fetch("/api/upload", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ image: imageSrc }),
		});
	};

	return (
		<div className="flex flex-col justify-center items-center h-[40rem]">
			<Webcam
				audio={false}
				ref={webcamRef}
				screenshotFormat="image/jpeg"
				className="w-full max-w-md"
			/>
			<button
				onClick={handleClick}
				className="mt-10 p-6  bg-[#01762a] text-white rounded-[100rem] active:opacity-50">
				Capturer
			</button>
		</div>
	);
}

export default Camera;
