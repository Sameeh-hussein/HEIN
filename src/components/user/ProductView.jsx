import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function ProductView() {
    const { productId } = useParams();
    const [activeIndex, setActiveIndex] = useState(0);

    const getProductDetails = async () => {
        let { data } = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
        return data;
    };

    const { data, isLoading } = useQuery('product_details_cash', getProductDetails);

    if (isLoading) {
        return (
            <div className="page-loader d-flex justify-content-center align-items-center mt-5">
                <div className="spinner-border text-dark" role="status"></div>
            </div>
        );
    }

    const handleCarouselIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    const handleCarouselPrev = () => {
        setActiveIndex(activeIndex === 0 ? data.images.length - 1 : activeIndex - 1);
    };

    const handleCarouselNext = () => {
        setActiveIndex(activeIndex === data.images.length - 1 ? 0 : activeIndex + 1);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">{data.name}</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            {data.images.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                                                >
                                                    <img src={image} className="d-block w-100" alt={`Image ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                        <button className="carousel-control-prev" type="button" onClick={handleCarouselPrev}>
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" onClick={handleCarouselNext}>
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                        <div className="carousel-indicators mt-3">
                                            {data.images.map((image, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    data-bs-target="#productCarousel"
                                                    data-bs-slide-to={index}
                                                    className={index === activeIndex ? 'active' : ''}
                                                    aria-current={index === activeIndex ? 'true' : 'false'}
                                                    onClick={() => handleCarouselIndicatorClick(index)}
                                                ></button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p>Description: {data.description}.</p>
                                    <p>Price: ${data.price}</p>
                                    <p>Category: {data.category.name}</p>
                                    <button className="btn btn-dark">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
