import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard';

export default function CategoryDetails() {
    const { categoryId } = useParams();

    const getCategoryDetails = async () => {
        let { data } = await axios.get(`https://api.escuelajs.co/api/v1/products`);
        data = data.filter(x => x.category.id == categoryId && x.images[0][0] === 'h');
        return data;
    }

    const { data, isLoading } = useQuery('category_details_cash', getCategoryDetails);

    if (isLoading) {
        return (
            <div className="page-loader d-flex justify-content-center align-items-center mt-5">
                <div className="spinner-border text-dark" role="status">
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-2">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map(product => (
                    <div key={product.id} className="col">
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    )
}
