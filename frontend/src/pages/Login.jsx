import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post(
        '/auth/login',
        formData
      )

      localStorage.setItem(
        'token',
        response.data.token
      )

      navigate('/dashboard')
    } catch (error) {
      alert('Login Failed')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-slate-950'>
      <form
        onSubmit={handleSubmit}
        className='bg-slate-900 p-10 rounded-xl w-96'
      >
        <h1 className='text-3xl font-bold mb-8 text-center text-cyan-400'>
          Login
        </h1>

        <input
          type='email'
          name='email'
          placeholder='Email'
          className='w-full p-3 mb-4 rounded bg-slate-800'
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          className='w-full p-3 mb-4 rounded bg-slate-800'
          onChange={handleChange}
        />

        <button className='w-full bg-cyan-500 p-3 rounded'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login