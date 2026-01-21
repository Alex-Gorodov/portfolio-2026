import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export interface ResponsiveContextValue {
  width: number;
  height: number;
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextValue | undefined>(
  undefined
);

interface ResponsiveProviderProps {
  children: ReactNode;
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const device: DeviceType =
    size.width < 480
      ? "mobile"
      : size.width < 1024
      ? "tablet"
      : "desktop";

  const value: ResponsiveContextValue = {
    width: size.width,
    height: size.height,
    device,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsive(): ResponsiveContextValue {
  const context = useContext(ResponsiveContext);

  if (!context) {
    throw new Error(
      "useResponsive must be used within a ResponsiveProvider"
    );
  }

  return context;
}
