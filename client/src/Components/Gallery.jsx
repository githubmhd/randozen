import { useState } from "react";
import { useImageContext } from "../Context/ImageContext";

function Gallery() {
	const { images } = useImageContext();
	const [selectedImage, setSelectedImage] = useState(null);

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleCloseModal = () => {
		setSelectedImage(null);
	};

	return (
		<div>
			<div className="flex flex-wrap gap-4 mt-4">
				{images.length > 0 ? (
					images.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Capture ${index}`}
							className="w-32 h-32 object-cover cursor-pointer"
							onClick={() => handleImageClick(image)}
						/>
					))
				) : (
					<div className="flex justify-center w-full">
						<p className="text-center text-gray-500 text-xl p-2 ">
							Pas encore de souvenirs ensemble
						</p>
					</div>
				)}
			</div>

			{selectedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
					onClick={handleCloseModal}>
					<img
						src={selectedImage}
						alt="Selected"
						className="max-w-full max-h-full"
					/>
				</div>
			)}
		</div>
	);
}

export default Gallery;
