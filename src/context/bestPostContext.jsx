import React
    from "react";

import useGetBestPost
    from "../hooks/useGetBestPost";


export const bestPostContext = React.createContext({})

const BestPostProvider = ({children,token}) => {
    const data = useGetBestPost(token)
    return (
        <>
            <bestPostContext.Provider value={data}>
                {children}
            </bestPostContext.Provider>
        </>)
}

export default BestPostProvider
