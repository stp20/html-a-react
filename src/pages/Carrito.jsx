import React from "react";

const paymentMethods = [
    {
        name: "Banco Falabella",
        img: "accets/img/falabella.jpg",
        url: "https://www.bancofalabella.cl/",
    },
    {
        name: "Forum",
        img: "accets/img/forum.jpg",
        url: "https://www.forum.cl/",
    },
    {
        name: "Webpay",
        img: "accets/img/webpay.png",
        url: "https://webpay.cl",
    },
];

const faqs = [
    {
        icon: "bi-cart-plus text-success",
        question: "¿Cómo puedo agregar productos al carrito?",
        answer: (
            <>
                Navega por nuestro catálogo y haz clic en el botón{" "}
                <span className="badge bg-success">Agregar al carrito</span> en el producto deseado.
            </>
        ),
    },
    {
        icon: "bi-bag-check text-primary",
        question: "¿Cómo puedo ver mi carrito de compras?",
        answer:
            "Haz clic en el icono del carrito en la parte superior derecha de la página para ver los productos que has agregado.",
    },
    {
        icon: "bi-pencil-square text-warning",
        question: "¿Puedo modificar la cantidad de un producto en el carrito?",
        answer:
            "Sí, puedes cambiar la cantidad directamente desde el carrito. Simplemente ajusta el número y se actualizará automáticamente.",
    },
    {
        icon: "bi-credit-card-2-front text-info",
        question: "¿Qué métodos de pago aceptan?",
        answer:
            "Aceptamos tarjetas de crédito, débito y transferencias bancarias. Todos los pagos son seguros y se procesan a través de plataformas confiables.",
    },
];

function Carrito() {
    return (
        <div>
            {/* Carrito de Compras */}
            <div className="container my-5">
                <h2 className="mb-4">Carrito de Compras</h2>
                <div className="table-responsive">
                    <table className="table table-bordered align-middle" id="cart-table">
                        <thead className="table-light">
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody id="cart-body">
                            {/* Productos agregados dinámicamente */}
                        </tbody>
                    </table>
                </div>

                {/* Botón de Pagar */}
                <div className="d-flex justify-content-end align-items-center">
                    <h4
                        className="me-3 fw-bold text-success"
                        style={{
                            color: "#ffffff",
                            textShadow: "2px 2px 6px #222, 0 0 10px #28a745",
                        }}
                    >
                        Total: $<span id="cart-total">0</span>
                    </h4>
                    <div className="dropdown">
                        <button
                            className="btn btn-success btn-lg dropdown-toggle"
                            type="button"
                            id="payDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Pagar
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="payDropdown">
                            {paymentMethods.map((method) => (
                                <li key={method.name}>
                                    <a className="dropdown-item pay-link" href={method.url} target="_blank" rel="noopener noreferrer">
                                        {method.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Botón de Continuar Comprando y Vaciar Carrito */}
                <div className="mt-3">
                    <a href="catalogo.html" className="btn btn-secondary">
                        <i className="bi bi-arrow-left me-1"></i> Seguir Comprando
                    </a>
                    <button id="clear-cart" className="btn btn-danger ms-2">
                        <i className="bi bi-trash me-1"></i> Vaciar Carrito
                    </button>
                </div>

                {/* Notificaciones */}
                <div
                    id="cart-alert"
                    className="alert alert-warning alert-dismissible fade"
                    role="alert"
                    style={{
                        position: "fixed",
                        top: 80,
                        right: 20,
                        zIndex: 1055,
                    }}
                >
                    <strong>¡Atención!</strong> No hay ningún producto agregado al carrito.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
                </div>
                <div
                    id="cart-qty-alert"
                    className="alert alert-warning alert-dismissible fade"
                    role="alert"
                    style={{
                        position: "fixed",
                        top: 130,
                        right: 20,
                        zIndex: 1055,
                    }}
                >
                    <strong>¡Atención!</strong> No ha agregado cantidad de producto.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
                </div>
            </div>

            {/* Métodos de Pago */}
            <div className="container my-5">
                <h1 className="mb-3 text-center fw-bold text-uppercase" style={{ color: "#f0f0f0", letterSpacing: 2, textShadow: "1px 1px 4px #000" }}>
                    Métodos de Pago Disponibles
                </h1>
                <div className="row justify-content-center g-4">
                    {paymentMethods.map((method) => (
                        <div className="col-6 col-md-2 text-center" key={method.name}>
                            <div className="card border-0 shadow-sm h-100 rounded-4" style={{ maxWidth: 180, margin: "0 auto" }}>
                                <img src={method.img} alt={method.name} className="card-img-top p-2" style={{ height: 120, objectFit: "contain" }} />
                                <div className="card-body p-2">
                                    <h6 className="card-title mb-0 text-truncate">{method.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Instrucciones, Devoluciones, Contacto, Redes, FAQ */}
            <div className="container my-4">
                <div className="accordion shadow-lg rounded-4 overflow-hidden" id="infoAccordion">
                    {/* Instrucciones de Pago */}
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header" id="headingPago">
                            <button
                                className="accordion-button bg-success bg-opacity-10 fw-semibold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsePago"
                                aria-expanded="true"
                                aria-controls="collapsePago"
                            >
                                <i className="bi bi-credit-card me-2 text-success"></i> Instrucciones de Pago
                            </button>
                        </h2>
                        <div id="collapsePago" className="accordion-collapse collapse" aria-labelledby="headingPago" data-bs-parent="#infoAccordion">
                            <div className="accordion-body">
                                <p>Para completar tu compra, por favor sigue estos pasos:</p>
                                <ol>
                                    <li>
                                        Haz clic en el botón <span className="badge bg-success">Pagar</span> para ser redirigido a la plataforma de pago.
                                    </li>
                                    <li>Ingresa tus datos de pago y confirma la transacción.</li>
                                    <li>Una vez completado el pago, recibirás un correo de confirmación.</li>
                                </ol>
                                <div className="alert alert-info mt-3 mb-0 p-2">
                                    Si tienes alguna duda, contáctanos a través de nuestro correo electrónico o número de teléfono.
                                </div>
                                <p className="mt-2 text-success fw-bold">¡Gracias por tu compra!</p>
                            </div>
                        </div>
                    </div>
                    {/* Política de Devoluciones */}
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header" id="headingDevoluciones">
                            <button
                                className="accordion-button collapsed bg-warning bg-opacity-10 fw-semibold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseDevoluciones"
                                aria-expanded="false"
                                aria-controls="collapseDevoluciones"
                            >
                                <i className="bi bi-arrow-counterclockwise me-2 text-warning"></i> Política de Devoluciones
                            </button>
                        </h2>
                        <div id="collapseDevoluciones" className="accordion-collapse collapse" aria-labelledby="headingDevoluciones" data-bs-parent="#infoAccordion">
                            <div className="accordion-body">
                                <p>
                                    Si no estás satisfecho con tu compra, puedes devolver el producto dentro de los <strong>30 días</strong> siguientes a la compra. Asegúrate de que el producto esté en su estado original y con el embalaje intacto.
                                </p>
                                <div className="alert alert-warning p-2 mb-2">
                                    Los productos en oferta o rebajados no son elegibles para devolución, a menos que estén defectuosos.
                                </div>
                                <p>
                                    Para iniciar una devolución, contáctanos a través de nuestro correo electrónico o número de teléfono.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Información de Contacto */}
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header" id="headingContacto">
                            <button
                                className="accordion-button collapsed bg-primary bg-opacity-10 fw-semibold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseContacto"
                                aria-expanded="false"
                                aria-controls="collapseContacto"
                            >
                                <i className="bi bi-envelope-at me-2 text-primary"></i> Contacto
                            </button>
                        </h2>
                        <div id="collapseContacto" className="accordion-collapse collapse" aria-labelledby="headingContacto" data-bs-parent="#infoAccordion">
                            <div className="accordion-body">
                                <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos:</p>
                                <ul className="list-unstyled mb-2">
                                    <li className="mb-1">
                                        <i className="bi bi-envelope me-1 text-primary"></i>
                                        <strong>Email:</strong>{" "}
                                        <a href="mailto:info@autostore.com" className="text-decoration-underline">
                                            info@autostore.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bi bi-telephone me-1 text-primary"></i>
                                        <strong>Teléfono:</strong> +56 9 1234 5678
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Redes Sociales */}
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header" id="headingRedes">
                            <button
                                className="accordion-button collapsed bg-info bg-opacity-10 fw-semibold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseRedes"
                                aria-expanded="false"
                                aria-controls="collapseRedes"
                            >
                                <i className="bi bi-share me-2 text-info"></i> Redes Sociales
                            </button>
                        </h2>
                        <div id="collapseRedes" className="accordion-collapse collapse" aria-labelledby="headingRedes" data-bs-parent="#infoAccordion">
                            <div className="accordion-body">
                                <p>Síguenos en nuestras redes sociales para estar al tanto de las últimas novedades y ofertas:</p>
                                <ul className="list-inline fs-5 mb-0">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/autostore" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
                                            <i className="bi bi-facebook"></i> Facebook
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/autostore" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-danger">
                                            <i className="bi bi-instagram"></i> Instagram
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.twitter.com/autostore" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-info">
                                            <i className="bi bi-twitter"></i> Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Preguntas Frecuentes */}
                    <div className="accordion-item border-0">
                        <h2 className="accordion-header" id="headingFAQ">
                            <button
                                className="accordion-button collapsed bg-light fw-semibold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFAQ"
                                aria-expanded="false"
                                aria-controls="collapseFAQ"
                            >
                                <i className="bi bi-question-circle me-2 text-secondary"></i> Preguntas Frecuentes
                            </button>
                        </h2>
                        <div id="collapseFAQ" className="accordion-collapse collapse" aria-labelledby="headingFAQ" data-bs-parent="#infoAccordion">
                            <div className="accordion-body">
                                {faqs.map((faq, idx) => (
                                    <div className="mb-2" key={idx}>
                                        <p className="mb-1 fw-bold">
                                            <i className={`bi me-1 ${faq.icon}`}></i> {faq.question}
                                        </p>
                                        <p className="mb-2">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrito;
