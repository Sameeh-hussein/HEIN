import React from 'react'
import shopping from '../../../public/shopping.svg'

export default function Header() {
    return (
        <header className="header bg-dark text-white" style={{ height: '50vh' }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-between">
                    <div className="col-md-6">
                        <div className="text-center text-md-start">
                            <h1 className="mb-4">Welcome to HEIN</h1>
                            <p className="lead">Discover the latest trends in fashion and shop your style!</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <img className="mb-5" src={shopping} alt="Shopping" width="auto" height="350" />
                    </div>
                </div>
            </div>
        </header>
    )
}
