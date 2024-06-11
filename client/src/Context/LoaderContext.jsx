import { createContext, useContext, useState, useEffect } from "react";

const IntroContext = createContext();

export function IntroProvider({ children }) {
  const [isVisible, setIsVisible] = useState("visibleIntro");
  const [isLogoVisible, setIsLogoVisible] = useState("logoVisible");
const [isLoaderVisible, setIsLoaderVisible] = useState("loaderVisible");
const [isFondVisible, setIsFondVisible] = useState("fondVisible")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible("notVisibleIntro");
    }, 8000);
    setTimeout(() => {
        setIsLogoVisible("notVisibleLogo");
    }, 6000);
    setTimeout(() => {
        setIsLoaderVisible("notVisibleLoader");
    }, 5000);
    setTimeout(() => {
      setIsFondVisible("notVisibleFond");
  }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <IntroContext.Provider value={{ isVisible, setIsVisible, isLogoVisible, setIsLogoVisible, isLoaderVisible, setIsLoaderVisible, isFondVisible, setIsFondVisible }}>
      {children}
    </IntroContext.Provider>
  );
}

export const useIntro = () => useContext(IntroContext);