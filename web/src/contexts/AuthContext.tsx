import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
    id: string
    name: string
    login: string
    avatar_url: string
}

interface AuthContextData {
    user: User | null
    signInUrl: string,
    signIn: (githubCode: string) => void
    signOut: ()=>void
}

interface AuthResponse {
    token: string
    user: User
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=d6bd6c429bf165ae58b1`

    const [user, setUser] = useState<User | null>(null)

    console.log(user)

    async function signIn(gitHubCode: string){
        const response = await api.post<AuthResponse>('/authenticate', {
            code: gitHubCode
        })

        const { token, user } = response.data

        localStorage.setItem('@dowhile:token',token)

        api.defaults.headers.common.authorization = `Bearer ${token}`

        setUser(user)
    }

    function signOut(){
        setUser(null)
        localStorage.removeItem('@dowhile:token')
    }

    useEffect(()=>{
        const token = localStorage.getItem('@dowhile:token')

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get<User>('/profile').then(response => {
                setUser(response.data)
            })
        }
    },[])

    useEffect(()=>{
        const url = window.location.href
        const hasGithubCode = url.includes('?code=')

        if(hasGithubCode){
            const [urlWithoutCode,gitHubCode] = url.split('?code=')

            window.history.pushState({}, '', urlWithoutCode)

            signIn(gitHubCode)
        }
    },[])

    return(
        <AuthContext.Provider value={{signInUrl, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}