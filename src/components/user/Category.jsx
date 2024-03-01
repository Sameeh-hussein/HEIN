import React from 'react'

export default function Category(props) {
    const {idx, image, name} = props;
    return (
        <div key={idx} className="col-lg-2 col-md-4 col-sm-6 text-center">
            <img
                src={image}
                alt={name}
                className="img-fluid rounded-circle mb-2"
                style={{ width: '110px', height: '110px' }}
            />
            <p>{name}</p>
        </div>
    )
}
