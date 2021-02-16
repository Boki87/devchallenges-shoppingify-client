import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { api } from '../../utils/api'
import { loginUser } from '../../reducers/user'
import useInput from '../../hooks/useInput'
import { toast } from 'react-toastify'

const Register = () => {

    const dispatch = useDispatch()
    
    const name = useInput('')
    const email = useInput('')
    const password = useInput('')

    const [loading, setLoading] = useState(false)

    const formSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const tokenReq = await api.post('/auth/register', { name:name.value, email:email.value, password:password.value })
            if (tokenReq.data.success) {
                localStorage.setItem('shoppingify-user-token', tokenReq.data.token)
                api.defaults.headers.common['Authorization'] = `Bearer ${tokenReq.data.token}`
                const userReq = await api.get('/auth/me')
                if (userReq.data.success) {
                        setLoading(false)
                        dispatch(loginUser(userReq.data.data))
                        return toast.success('Successful registration')
                } else {
                    setLoading(false)
                    return toast.error('Error registering user')
                }
            } else {
                setLoading(false)
                return toast.error('Error getting token')

            }    
        } catch (err) {
            setLoading(false)
            return toast.error('Email already taken')        
        }        
        
    }

    return (
        <form onSubmit={formSubmitHandler}>                
            <input
                type="text"
                placeholder='John Doe'
                value={name.value}
                onChange={name.onChange}
            />
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
                    'Register'
                    :
                    'Loading...'
                }
            </button>
        </form>
    )
}

export default Register
