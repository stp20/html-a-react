import React from 'react';

// Navbar como componente funcional usando JSX
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
                    <i className="bi bi-car-front-fill me-2 fs-3"></i>AutoStore
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                <i className="bi bi-house-door me-1"></i>Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Catalog">
                                <i className="bi bi-grid me-1"></i>Catálogo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Ofert">
                                <i className="bi bi-tag me-1"></i>Ofertas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">
                                <i className="bi bi-envelope me-1"></i>Contacto
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
                        <a
                            href="Carrito"
                            className="btn btn-outline-light btn-sm position-relative"
                            aria-label="Carrito de compras"
                        >
                            <i className="bi bi-cart3 fs-5"></i>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                style={{ fontSize: "0.75em" }}
                                id="cart-count"
                            >
                                0
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Home como componente funcional
function Home() {
    return (
        <div>
            <Navbar />
            <section
                className="hero-section position-relative overflow-hidden py-5"
                style={{
                    backgroundImage: 'url(/accets/img/conseci2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' 
                }}
            >
                <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(47, 46, 46, 0.5)' }}></div>
                <div className="container position-relative z-2">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8 mx-auto text-center text-white">
                            <h1
                                className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown"
                                style={{ textShadow: '0 4px 24px rgba(255, 255, 255, 0.56)' }}
                            >
                                Encuentra el auto de tus <span className="text-warning">sueños</span>
                            </h1>
                            <p
                                className="lead mb-4 animate__animated animate__fadeInUp"
                                style={{ fontSize: '1.4rem', textShadow: '0 4px 24px rgba(255, 255, 255, 0.56)'}}
                            >
                                Las mejores <span className="fw-bold text-warning">marcas</span>, precios{' '}
                                <span className="fw-bold text-warning">increíbles</span> y atención{' '}
                                <span className="fw-bold text-warning">personalizada</span>.
                                
                            </p>
                            <a
                                href="Catalog"
                                className="btn btn-warning btn-lg px-5 py-3 shadow animate__animated animate__pulse animate__infinite"
                                style={{ fontSize: '1.25rem' }}
                            >
                                <i className="bi bi-search me-2"></i>Ver Catálogo
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
