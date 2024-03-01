import React from 'react'
import { Link } from 'react-router-dom';

export default function Category(props) {
    const {idx, image, name, id} = props;
    return (
        <Link to={`/categories/${id}/products`} key={idx} className="col-lg-2 col-md-4 col-sm-6 text-center" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img
                src={image}
                alt={name}
                className="img-fluid rounded-circle mb-2"
                style={{ width: '110px', height: '110px' }}
            />
            <p>{name}</p>
        </Link>
    )
}
