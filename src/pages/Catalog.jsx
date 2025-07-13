import React, { useState } from 'react';

// Datos de autos
const cars = [
    {
        id: 1,
        name: 'Ford Mustang GT',
        img: 'accets/img/mustang gt.webp',
        alt: 'Ford Mustang GT',
        desc: 'Deportivo americano con motor V8, 450 HP y diseño icónico.',
        price: '$35.000.000 CLP',
        badge: { text: 'Nuevo', className: 'bg-danger' },
        modal: {
            motor: 'V8 5.0L',
            potencia: '450 HP',
            aceleracion: '4.3 s',
            transmision: 'Manual/Automática',
        },
    },
    {
        id: 2,
        name: 'Chevrolet Camaro SS',
        img: 'accets/catalogo/camaro.webp',
        alt: 'Chevrolet Camaro SS',
        desc: 'Muscle car con 455 HP, tracción trasera y gran aceleración.',
        price: '$40.000.000 CLP',
        modal: {
            motor: 'V8 6.2L',
            potencia: '455 HP',
            aceleracion: '4.0 s',
            transmision: 'Manual/Automática',
        },
    },
    {
        id: 3,
        name: 'BMW M4 Competition',
        img: 'accets/catalogo/BMW.avif',
        alt: 'BMW M4 Competition',
        desc: 'Coupé alemán, 510 HP, tecnología avanzada y lujo deportivo.',
        price: '$55.000.000 CLP',
        modal: {
            motor: '3.0L Twin Turbo',
            potencia: '510 HP',
            aceleracion: '3.9 s',
            transmision: 'Automática',
        },
    },
    {
        id: 4,
        name: 'Audi R8 V10',
        img: 'accets/catalogo/Audi r8.jpg',
        alt: 'Audi R8 V10',
        desc: 'Superdeportivo con motor V10, tracción quattro y diseño elegante.',
        price: '$70.000.000 CLP',
        badge: { text: 'Destacado', className: 'bg-warning text-dark' },
        modal: {
            motor: 'V10 5.2L',
            potencia: '610 HP',
            aceleracion: '3.2 s',
            transmision: 'Quattro',
        },
    },
    {
        id: 5,
        name: 'Porsche 911 Carrera',
        img: 'accets/catalogo/Porche.webp',
        alt: 'Porsche 911 Carrera',
        desc: 'Clásico deportivo alemán, motor bóxer y manejo preciso.',
        price: '$100.000.000 CLP',
        modal: {
            motor: 'Bóxer 3.0L Turbo',
            potencia: '385 HP',
            aceleracion: '4.2 s',
            transmision: 'Automática',
        },
    },
    {
        id: 6,
        name: 'Nissan GT-R',
        img: 'accets/catalogo/NisanGT.avif',
        alt: 'Nissan GT-R',
        desc: 'Deportivo japonés, tracción total y aceleración impresionante.',
        price: '$115.000.000 CLP',
        modal: {
            motor: 'V6 3.8L Twin Turbo',
            potencia: '565 HP',
            aceleracion: '2.9 s',
            transmision: 'Total',
        },
    },
    {
        id: 7,
        name: 'Mercedes AMG GT',
        img: 'accets/catalogo/Mercedes.webp',
        alt: 'Mercedes AMG GT',
        desc: 'Gran turismo alemán, motor V8 biturbo y diseño agresivo.',
        price: '$120.000.000 CLP',
        modal: {
            motor: 'V8 4.0L Biturbo',
            potencia: '522 HP',
            aceleracion: '3.8 s',
            transmision: 'Automática',
        },
    },
    {
        id: 8,
        name: 'Lamborghini Huracán',
        img: 'accets/catalogo/lambo.webp',
        alt: 'Lamborghini Huracán',
        desc: 'Superdeportivo italiano, motor V10 y diseño espectacular.',
        price: '$210.000.000 CLP',
        badge: { text: 'Premium', className: 'bg-success' },
        modal: {
            motor: 'V10 5.2L',
            potencia: '640 HP',
            aceleracion: '2.9 s',
            transmision: 'Total',
        },
    },
    {
        id: 9,
        name: 'Ferrari 488 GTB',
        img: 'accets/catalogo/ferrari.jpg',
        alt: 'Ferrari 488 GTB',
        desc: 'Deportivo italiano, motor V8 turbo y gran desempeño.',
        price: '$250.000.000 CLP',
        modal: {
            motor: 'V8 3.9L Twin Turbo',
            potencia: '670 HP',
            aceleracion: '3.0 s',
            transmision: 'Automática',
        },
    },
    {
        id: 10,
        name: 'Toyota Supra GR',
        img: 'accets/catalogo/toyotasupra.avif',
        alt: 'Toyota Supra GR',
        desc: 'Deportivo japonés, motor turbo y manejo ágil.',
        price: '$55.000.000 CLP',
        modal: {
            motor: '3.0L Turbo',
            potencia: '382 HP',
            aceleracion: '4.1 s',
            transmision: 'Automática',
        },
    },
    {
        id: 11,
        name: 'Mazda MX-5',
        img: 'accets/catalogo/Mazda MX-5.webp',
        alt: 'Mazda MX-5',
        desc: 'Roadster ligero, tracción trasera y experiencia de manejo pura.',
        price: '$35.000.000 CLP',
        modal: {
            motor: '2.0L',
            potencia: '181 HP',
            aceleracion: '6.5 s',
            transmision: 'Manual/Automática',
        },
    },
    {
        id: 12,
        name: 'Tesla Model S Plaid',
        img: 'accets/catalogo/tesla.jpeg',
        alt: 'Tesla Model S Plaid',
        desc: 'Eléctrico de alto rendimiento y tecnología avanzada.',
        price: '$130.000.000 CLP',
        badge: { text: 'Eléctrico', className: 'bg-info text-dark' },
        modal: {
            motor: 'Eléctrico triple',
            potencia: '1020 HP',
            aceleracion: '2.1 s',
            transmision: '628 km de autonomía',
        },
    },
];

// Componente Modal
function CarModal({ show, onClose, car, onAddToCart }) {
    if (!show || !car) return null;
    return (
        <>
            {/* Modal */}
            <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title">
                                <i className="bi bi-car-front-fill me-2"></i>
                                {car.name}
                            </h5>
                            <button type="button" className="btn-close btn-close-white" aria-label="Cerrar" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <div className="row align-items-center">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <img src={car.img} alt={car.alt} className="img-fluid rounded shadow" />
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item"><strong>Motor:</strong> {car.modal.motor}</li>
                                        <li className="list-group-item"><strong>Potencia:</strong> {car.modal.potencia}</li>
                                        <li className="list-group-item"><strong>0-100 km/h:</strong> {car.modal.aceleracion}</li>
                                        <li className="list-group-item"><strong>{car.name === 'Tesla Model S Plaid' ? 'Autonomía' : 'Transmisión/Tracción'}:</strong> {car.modal.transmision}</li>
                                    </ul>
                                    <p className="mb-0 text-muted">{car.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fondo oscuro solo detrás */}
            <div
                className="modal-backdrop fade show"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 1040
                }}
                onClick={onClose}
            ></div>
        </>
    );
}

// Componente Card
function CarCard({ car, onClick }) {
    return (
        <div className="col-md-4 col-lg-3">
            <div className="car-card p-3 h-100 shadow rounded bg-white">
                <div className="position-relative">
                    <img
                        src={car.img}
                        alt={car.alt}
                        className="img-fluid car-img rounded cursor-pointer"
                        style={{ objectFit: 'cover', height: 180, width: '100%' }}
                        onClick={onClick}
                    />
                    {car.badge && (
                        <span className={`badge position-absolute top-0 end-0 m-2 ${car.badge.className}`}>
                            {car.badge.text}
                        </span>
                    )}
                </div>
                <h5 className="mt-3 fw-bold">{car.name}</h5>
                <p className="text-muted small">{car.desc}</p>
                <div className="oferta fw-semibold mb-2">
                    Precio: <span className="text-success">{car.price}</span>
                </div>
            </div>
        </div>
    );
}

// Componente principal
function Catalog() {
    const [modalCar, setModalCar] = useState(null);

    return (
        <div>
            {/* Catálogo */}
            <div className="container py-5">
                <h1 className="text-center text-white mb-5 catalog-title">Catálogo de Autos</h1>
                <div className="row g-4">
                    {cars.map(car => (
                        <CarCard key={car.id} car={car} onClick={() => setModalCar(car)} />
                    ))}
                </div>
            </div>
            {/* Modal */}
            <CarModal show={!!modalCar} car={modalCar} onClose={() => setModalCar(null)} />
        </div>
    );
}

export default Catalog;
