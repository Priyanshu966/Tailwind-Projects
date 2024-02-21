import {useContext, createContext} from "react";

const CpuContext = createContext();

const CpuProvider = ({children}) => {
  return <CpuContext.Provider value={{}}>{children}</CpuContext.Provider>;
};

const useCpuContext = () => {
  return useContext(CpuContext);
};

export {useCpuContext, CpuProvider};
