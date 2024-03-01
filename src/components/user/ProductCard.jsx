import React from 'react'

export default function ProductCard(props) {
    const { images, title, price } = props;
    return (
        <div className="card h-100 d-flex flex-column">
            <img src={images[0]} className="card-img-top" alt={title} />
            <div className="card-body flex-grow-1 d-flex flex-column">
                <h5 className="card-title flex-grow-1">{title}</h5>
                <p className="card-text">${price}</p>
            </div>
        </div>
    )
}
