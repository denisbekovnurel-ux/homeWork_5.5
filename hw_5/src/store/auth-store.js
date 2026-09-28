import { useMutation } from '@tanstack/react-query'
import { $mainApi } from '../api/http.js'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const getErrorMessage = (error) =>
  error?.response?.data?.message || 'Что-то пошло не так, попробуй ещё раз'

export const useRegisterMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await $mainApi.post('/auth/sign-up', payload)
      return data
    },
    onSuccess: (respData) => {
      localStorage.setItem('token', respData.accessToken)
      navigate('/')
      toast.success('Successfully registered')
    },
    onError: (error) => {
      toast.error(getErrorMessage(error))
    },
  })
}

export const useLoginMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async (payload) => {
      const { data } = await $mainApi.post('/auth/sign-in', payload)
      return data
    },
    onSuccess: (respData) => {
      localStorage.setItem('token', respData.accessToken)
      navigate('/')
      toast.success('Successfully logged in')
    },
    onError: (error) => {
      toast.error(getErrorMessage(error))
    },
  })
}
