import { createContext, useState } from "react";

interface Mode {
  mode: string;
}

interface PageContextType {
  page: Mode;
  setPage: React.Dispatch<React.SetStateAction<Mode>>;
}

interface PageContextProviderProps {
  children: React.ReactNode;
}

export const PageContext = createContext<PageContextType | null>(null);
const PageContextProvider: React.FC<PageContextProviderProps> = (props) => {
  const [page, setPage] = useState<Mode>({ mode: "home" });
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
