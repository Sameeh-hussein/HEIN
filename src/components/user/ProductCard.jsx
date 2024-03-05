import React from 'react'
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
    const { id, category, images, title, price } = props;
    return (
        <Link to={`/categories/${category.id}/products/${id}`} className="card h-100 d-flex flex-column">
            <img src={images[0].replace(/\[|\]|"/g, '')} className="card-img-top" alt={title} />
            <div className="card-body flex-grow-1 d-flex flex-column">
                <h5 className="card-title flex-grow-1">{title}</h5>
                <p className="card-text">${price}</p>
            </div>
        </Link>
    )
}
