import React, { ReactNode, createContext, useContext, useState } from "react";

type FontSizeContextType = {
  fontSize: number;
  handleFontSize: (updatedFontSize: number) => void;
};

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within a FontSizeProvider");
  }
  return context;
};

export const FontSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState<number>(16);

  const handleFontSize = (updatedFontSize: number) => {
    setFontSize(updatedFontSize);
  };

  return <FontSizeContext.Provider value={{ fontSize, handleFontSize }}>{children}</FontSizeContext.Provider>;
};
