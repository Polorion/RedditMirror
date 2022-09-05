import React
    from "react";
import useGetDataOwner
    from "../hooks/useGetDataOwner";


export const userContext = React.createContext({})

const UserContextProvider = ({children}) => {
    const data = useGetDataOwner()
    return (
        <>
            <userContext.Provider value={data}>
                {children}
            </userContext.Provider>
        </>)
}

export default UserContextProvider
