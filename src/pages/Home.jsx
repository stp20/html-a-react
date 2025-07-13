import React from 'react';

const featuredCars = [
    {
        img: '/accets/img/toyota.webp',
        alt: 'Toyota Corolla 2023',
        title: 'Toyota Corolla 2023',
        desc: 'Eficiencia, tecnología y confort en un solo vehículo.',
        badge: { text: 'Nuevo', className: 'bg-success' },
        price: '$22.000.000 CLP',
        link: 'Toyota',
    },
    {
        img: '/accets/img/mustang gt.webp',
        alt: 'Ford Mustang GT',
        title: 'Ford Mustang GT',
        desc: 'Clásico e icónico para los amantes de la velocidad.',
        badge: { text: 'Oferta', className: 'bg-danger' },
        price: '$35.000.000 CLP',
        link: 'Mustang',
    },
    {
        img: '/accets/img/Honda.webp',
        alt: 'Honda CR-V 2022',
        title: 'Honda CR-V 2022',
        desc: 'Espacio, seguridad y tecnología para toda la familia.',
        badge: { text: 'Seminuevo', className: 'bg-warning text-dark' },
        price: '$28.500.000 CLP',
        link: 'Honda',
    },
];

const whyChoose = [
    {
        icon: 'bi-car-front-fill',
        badge: 'bg-success',
        text: (
            <>
                <span className="fw-bold text-warning">+50 modelos</span> de las mejores marcas
            </>
        ),
    },
    {
        icon: 'bi-cash-coin',
        badge: 'bg-primary',
        text: (
            <>
                <span className="fw-bold text-warning">Financiamiento flexible</span> y asesoría gratuita
            </>
        ),
        delay: '0.1s',
    },
    {
        icon: 'bi-shield-check text-dark',
        badge: 'bg-warning',
        text: (
            <>
                <span className="fw-bold text-warning">Garantía extendida</span> y servicio postventa premium
            </>
        ),
        delay: '0.2s',
    },
    {
        icon: 'bi-person-heart',
        badge: 'bg-danger',
        text: (
            <>
                <span className="fw-bold text-warning">Atención personalizada</span> y soporte 24/7
            </>
        ),
        delay: '0.3s',
    },
];

const teamFeatures = [
    {
        icon: 'bi-people-fill text-success',
        text: 'Asesores certificados, cercanos y siempre dispuestos a ayudarte',
        delay: '0.1s',
    },
    {
        icon: 'bi-award-fill text-warning',
        text: 'Reconocidos por excelencia y calidad en el servicio al cliente',
        delay: '0.2s',
    },
    {
        icon: 'bi-chat-dots-fill text-primary',
        text: 'Comunicación clara, transparente y asesoría honesta en todo momento',
        delay: '0.3s',
    },
    {
        icon: 'bi-heart-fill text-danger',
        text: 'Compromiso genuino con tus necesidades y expectativas',
        delay: '0.4s',
    },
];

const carouselImages = [
    {
        src: '/accets/img/conseci1.webp',
        alt: 'Equipo AutoStore 1',
        caption: 'Sala de Ventas',
    },
    {
        src: '/accets/img/equipoventas.jpg',
        alt: 'Equipo AutoStore 2',
        caption: 'Equipo de Asesores',
    },
    {
        src: '/accets/img/conseci3.webp',
        alt: 'Equipo AutoStore 3',
        caption: 'Entrega de Vehículos',
    },
];

function Home() {
    return (
        <div>
            {/* Autos Destacados */}
            <div className="container my-5">
                <h2 className="mb-4 text-center fw-bold">Autos Destacados</h2>
                <div className="row g-4">
                    {featuredCars.map((car, i) => (
                        <div className="col-md-4" key={car.title}>
                            <div className="card h-100 shadow-sm bg-body-primary">
                                <img src={car.img} className="card-img-top" alt={car.alt} />
                                <div className="card-body">
                                    <h5 className="card-title">{car.title}</h5>
                                    <p className="card-text">{car.desc}</p>
                                    <span className={`badge mb-2 ${car.badge.className}`}>{car.badge.text}</span>
                                    <p className="fw-bold">{car.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ¿Por qué elegir AutoStore? */}
            <section
                className="py-5"
                style={{ background: 'linear-gradient(135deg, #7ea8e6 60%, #495057 100%)' }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h3 className="fw-bold text-white mb-4 animate__animated animate__fadeInDown">
                                ¿Por qué elegir <span className="text-warning">AutoStore</span>?
                            </h3>
                            <ul className="list-unstyled fs-5">
                                {whyChoose.map((item, i) => (
                                    <li
                                        key={i}
                                        className="mb-3 d-flex align-items-center animate__animated animate__fadeInLeft"
                                        style={item.delay ? { animationDelay: item.delay } : undefined}
                                    >
                                        <span className={`badge rounded-circle me-3 p-3 shadow-lg ${item.badge}`}>
                                            <i className={`bi ${item.icon} fs-4`}></i>
                                        </span>
                                        <span className="text-white">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4">
                                <a
                                    href="./pages/ofert.jsx"
                                    className="btn btn-warning btn-lg px-4 py-2 shadow animate__animated animate__pulse animate__infinite"
                                    style={{ fontSize: '1.15rem' }}
                                >
                                    <i className="bi bi-tag me-2"></i>Ver Ofertas Exclusivas
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 text-center animate__animated animate__zoomIn">
                            <div className="position-relative d-inline-block">
                                <img
                                    src="/accets/img/mark.png"
                                    className="img-fluid rounded-4 shadow-lg border border-4 border-white"
                                    alt="Equipo AutoStore"
                                    style={{ maxWidth: 350 }}
                                />
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark shadow"
                                    style={{ fontSize: '1.1em' }}
                                >
                                    <i className="bi bi-star-fill"></i> Mejor valorado
                                </span>
                                <span
                                    className="position-absolute bottom-0 start-0 translate-middle-y badge rounded-pill bg-success text-white shadow"
                                    style={{ left: 10, bottom: 10, fontSize: '1em' }}
                                >
                                    <i className="bi bi-award-fill"></i> líder en Garantía
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nuestro Equipo */}
            <div className="container my-5">
                <div className="row justify-content-center align-items-center g-5">
                    <div className="col-lg-6 d-flex flex-column justify-content-center order-1 order-lg-1">
                        <h4 className="fw-bold mb-3 text-primary animate__animated animate__fadeInDown">
                            Nuestro Equipo
                        </h4>
                        <p className="fs-5 text-secondary animate__animated animate__fadeInLeft">
                            En <span className="fw-bold text-warning">AutoStore</span>, nuestro equipo está formado por profesionales
                            apasionados por el mundo automotriz y comprometidos con tu satisfacción. Nos esforzamos por ofrecer una{' '}
                            <span className="fw-semibold text-primary">experiencia única</span> en cada etapa de tu compra,
                            acompañándote con asesoría experta y atención personalizada.
                        </p>
                        <ul className="list-unstyled mt-3">
                            {teamFeatures.map((item, i) => (
                                <li
                                    key={i}
                                    className="mb-2 d-flex align-items-center animate__animated animate__fadeInLeft"
                                    style={{ animationDelay: item.delay }}
                                >
                                    <i className={`bi ${item.icon} fs-4 me-2`}></i>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <a
                                href="Equipo"
                                className="btn btn-primary btn-lg px-4 py-2 shadow animate__animated animate__pulse animate__infinite"
                                style={{ fontSize: '1.1rem' }}
                            >
                                <i className="bi bi-person-lines-fill me-2"></i>Conoce a nuestro equipo
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-2 mb-4 mb-lg-0">
                        {/* Carousel */}
                        <div
                            id="equipoCarousel"
                            className="carousel slide shadow-lg rounded-4 overflow-hidden"
                            data-bs-ride="carousel"
                            style={{ maxWidth: 420, margin: '0 auto' }}
                        >
                            <div className="carousel-inner">
                                {carouselImages.map((img, i) => (
                                    <div
                                        className={`carousel-item${i === 0 ? ' active' : ''}`}
                                        key={img.src}
                                    >
                                        <img
                                            className="d-block w-100"
                                            src={img.src}
                                            alt={img.alt}
                                            style={{ height: 250, objectFit: 'cover' }}
                                        />
                                        <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
                                            <h5 className="mb-0 text-warning">{img.caption}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#equipoCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#equipoCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contacto */}
            <div className="container my-5 bg-body-secondary p-5 rounded shadow" id="contacto">
                <h2 className="text-center mb-4 fw-bold">Contáctanos</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <form id="contactForm" noValidate autoComplete="off">
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Ej: Juan Pérez"
                                    required
                                />
                                <div className="invalid-feedback">Por favor ingresa tu nombre completo.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo" className="form-label">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="correo"
                                    name="correo"
                                    placeholder="ejemplo@email.com"
                                    required
                                />
                                <div className="invalid-feedback">Por favor ingresa un correo electrónico válido.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">
                                    Teléfono <span className="text-muted">(opcional)</span>
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="+56 9 1234 5678"
                                    pattern="^\+?\d{0,3} ?\d{1,3} ?\d{3,4} ?\d{3,4}$"
                                />
                                <div className="invalid-feedback">Por favor ingresa un teléfono válido.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">
                                    Mensaje
                                </label>
                                <textarea
                                    className="form-control"
                                    id="mensaje"
                                    name="mensaje"
                                    rows={4}
                                    placeholder="¿En qué podemos ayudarte?"
                                    required
                                ></textarea>
                                <div className="invalid-feedback">Por favor ingresa un mensaje.</div>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" value="" id="politica" required />
                                <label className="form-check-label" htmlFor="politica">
                                    Acepto la{' '}
                                    <a
                                        href="https://random.cl/politicas-de-privacidad/"
                                        className="text-primary text-decoration-underline"
                                    >
                                        política de privacidad
                                    </a>
                                </label>
                                <div className="invalid-feedback">Debes aceptar la política de privacidad.</div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 fw-bold">
                                <i className="bi bi-send me-2"></i>Enviar mensaje
                            </button>
                        </form>
                        <div id="formAlert" className="alert alert-danger mt-3 d-none" role="alert"></div>
                        <div id="formSuccess" className="alert alert-success mt-3 d-none" role="alert">
                            ¡Gracias por contactarnos! Te responderemos pronto.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
