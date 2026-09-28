import { Link, useParams } from 'react-router-dom'
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

    if (isLoading) {
        return (
            <div className='flex justify-center py-20'>
                <progress className='w-40' />
            </div>
        )
    }

    return (
        <section className='py-8'>
            <Link
                to='/'
                className='text-sm font-medium text-[#0d8b67] hover:text-[#0b7153]'
            >
                ← Назад к товарам
            </Link>

            <div className='mt-4 rounded-[28px] border border-[#dfe9e2] bg-white p-6 shadow-[0_20px_50px_rgba(22,52,41,0.08)] sm:p-8'>
                <h1 className='text-3xl font-bold text-[#1d2321]'>{data?.name}</h1>
                <p className='mt-2 text-[#6b7a75]'>{data?.description}</p>
                <p className='mt-6 text-2xl font-semibold text-[#0d8b67]'>{data?.price} сом</p>
            </div>
        </section>
    )
}
