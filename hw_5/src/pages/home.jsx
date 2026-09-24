import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product-store.js'

export const Home = () => {
    const { data, isLoading } = useProductStore()

    if (isLoading) return <progress />

    return (
        <>
            <h1 className='text-4xl font-bold'>Products</h1>
            <ul>
                {data?.map((item) => (
                    <li key={item._id}>
                        <Link to={`/products/${item._id}`}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}