import { createContext, useState, useContext } from "react";

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageContextProvider = ({ children }) => {
	const [images, setImages] = useState([]);

	const addImage = (image) => {
		setImages([...images, image]);
	};

	return (
		<ImageContext.Provider value={{ images, addImage }}>
			{children}
		</ImageContext.Provider>
	);
};
