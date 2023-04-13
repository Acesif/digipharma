import {useState, useContext,createContext, useEffect } from 'react'

const AuthContext = createContext()

// to save user login session
const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });
    useEffect(() => {
        const data = localStorage.getItem("auth");
        if(data){
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            })
        }
    },[auth])
    return (
        <AuthContext.Provider value = {[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}