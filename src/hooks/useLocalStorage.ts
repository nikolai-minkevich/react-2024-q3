import { useEffect, useRef } from "react";

export type TTerm = string;

const useLocalStorage = (): [string, React.RefObject<HTMLInputElement>] => {

  const inputElementRef = useRef<HTMLInputElement>(null);

  const defaulTerm = localStorage.getItem("term") ?? ""

  useEffect(() => {
    const handleBeforeUnload = () => {
      const currentTermValue = inputElementRef.current?.value
    
      if (currentTermValue && currentTermValue.length > 0) localStorage.setItem("term", currentTermValue)
    }
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
  return [defaulTerm, inputElementRef]
};

export default useLocalStorage;
