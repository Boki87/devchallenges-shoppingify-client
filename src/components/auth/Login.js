import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { api } from '../../utils/api'
import { loginUser } from '../../reducers/user'
import useInput from '../../hooks/useInput'
import {toast} from 'react-toastify'

const Login = () => {

    const dispatch = useDispatch()

    const email = useInput('')
    const password = useInput('')

    const [loading, setLoading] = useState(false)

    const formSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const tokenReq = await api.post('/auth/login', { email: email.value, password: password.value })
            console.log(tokenReq);
            if (tokenReq.data.success) {
                localStorage.setItem('shoppingify-user-token', tokenReq.data.token)
                api.defaults.headers.common['Authorization'] = `Bearer ${tokenReq.data.token}`
                const userReq = await api.get('/auth/me')
                if (userReq.data.success) {
                    setLoading(false)
                    dispatch(loginUser(userReq.data.data))
                    return toast.success('Successful login')
                } else {
                    setLoading(false)
                    return toast.error('Wrong email or password')
                }
            } else {                
                setLoading(false)
                return toast.error('Wrong email or password')
            }    
        } catch (err) {
            console.log(err);
            setLoading(false)
            return toast.error('Wrong email or password')            
        }        
        
    }

    return (
        <form onSubmit={formSubmitHandler}>                
            <input
                type="email"
                placeholder='Email'
                autoComplete='off'
                value={email.value}
                onChange={email.onChange}
            />
            <input
                type="password"
                placeholder='Password'
                value={password.value}
                onChange={password.onChange}
            />

            <button disabled={loading}>
                {!loading ?
                    'Login'
                    :
                    'Loading...'
                }
            </button>
        </form>
    )
}

export default Login
