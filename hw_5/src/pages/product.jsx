import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { $mainApi } from '../api/http.js'

export const Product = () => {
    const { productId } = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ['product', productId],
        queryFn: async () => {
            const { data } = await $mainApi.get(`/products/${productId}`)
            return data?.data
        }
    })

    if (isLoading) return <progress />

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold'>{data?.name}</h1>
            <p className='text-gray-500 mt-2'>{data?.description}</p>
            <p className='text-2xl font-semibold mt-4'>{data?.price} сом</p>
        </div>
    )
}