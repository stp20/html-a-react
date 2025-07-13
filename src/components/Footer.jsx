import React from 'react'

function home() {
return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                    <small>&copy; {new Date().getFullYear()} AutoStore. Todos los derechos reservados.</small>
                </div>
                <div className="col-md-4 text-center mb-3 mb-md-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Facebook">
                        <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Instagram">
                        <i className="bi bi-instagram fs-4"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3" aria-label="Twitter">
                        <i className="bi bi-twitter fs-4"></i>
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="WhatsApp">
                        <i className="bi bi-whatsapp fs-4"></i>
                    </a>
                </div>
                <div className="col-md-4 text-center text-md-end">
                    <nav>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="index.html" className="text-white text-decoration-underline">Inicio</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="catalogo.html" className="text-white text-decoration-underline">Catálogo</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="ofertas.html" className="text-white text-decoration-underline">Ofertas</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#contacto" className="text-white text-decoration-underline">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
)
}

export default home
