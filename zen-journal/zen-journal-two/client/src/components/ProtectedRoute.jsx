import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ProtectedRoute = props => {
const {token, children} = props
const nav = useNavigate()
useEffect(() => {
    if(!token) {
        nav("/")
    }
}, [token])
    return token ? children : null
}
export default ProtectedRoute