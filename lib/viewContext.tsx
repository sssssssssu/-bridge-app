"use client";
import { createContext, useContext } from "react";

interface ViewContextType {
  forceMobile: boolean;
  setForceMobile: (v: boolean) => void;
}

export const ViewContext = createContext<ViewContextType>({
  forceMobile: false,
  setForceMobile: () => {},
});

export function useViewMode() {
  return useContext(ViewContext);
}
