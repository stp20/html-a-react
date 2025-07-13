import React from 'react';

const autos = [
    {
        img: 'accets/img/toyota.webp',
        alt: 'Auto 1',
        nombre: 'Toyota Corolla 2023',
        descripcion: 'Eficiencia, tecnología y confort en un solo vehículo.',
        precioOriginal: '$24.000.000 CLP',
        precioOferta: '$22.000.000 CLP',
    },
    {
        img: 'accets/catalogo/Audi r8.jpg',
        alt: 'Auto 2',
        nombre: 'Audi R8',
        descripcion: 'Deportivo, transmisión automática, excelente rendimiento. 18,000 km.',
        precioOriginal: '$70.500.000 CLP',
        precioOferta: '$50.800.000 CLP',
    },
    {
        img: 'accets/img/mustang gt.webp',
        alt: 'Auto 3',
        nombre: 'Ford Mustang 2019',
        descripcion: 'Motor V6, diseño clásico, perfecto para amantes de la velocidad. 30,000 km.',
        precioOriginal: '$27.500.000 CLP',
        precioOferta: '$25.900.000 CLP',
    },
    {
        img: 'accets/catalogo/camaro.webp',
        alt: 'Auto 4',
        nombre: 'Chevrolet camaro',
        descripcion: 'Compacto, bajo consumo, tecnología avanzada. 10,000 km.',
        precioOriginal: '$20.000.000 CLP',
        precioOferta: '$15.500.000 CLP',
    },
    {
        img: 'accets/catalogo/Mercedes.webp',
        alt: 'Auto 5',
        nombre: 'Mercedes-Benz Clase C',
        descripcion: 'Amplio espacio interior, sistema de seguridad avanzado. 22,000 km.',
        precioOriginal: '$19.000.000 CLP',
        precioOferta: '$17.500.000 CLP',
    },
    {
        img: 'accets/catalogo/Porche.webp',
        alt: 'Auto 6',
        nombre: 'Porsche 911',
        descripcion: 'Deportivo, motor turbo, tecnología avanzada. 12,000 km.',
        precioOriginal: '$84.000.000 CLP',
        precioOferta: '$79.900.000 CLP',
    },
    {
        img: 'accets/img/Honda.webp',
        alt: 'Auto 7',
        nombre: 'Honda CR-V 2022',
        descripcion: 'Espacio, seguridad y tecnología para toda la familia.',
        precioOriginal: '$30.000.000 CLP',
        precioOferta: '$28.500.000 CLP',
    },
];

function Ofert() {
    return (
        <div>
            <h1>Catálogo de Autos en Oferta</h1>
            <div className="catalogo">
                {autos.map((auto, idx) => (
                    <div className="auto" key={idx}>
                        <img src={auto.img} alt={auto.alt} />
                        <h2>{auto.nombre}</h2>
                        <p>{auto.descripcion}</p>
                        <div>
                            <span className="text-muted text-decoration-line-through me-2">{auto.precioOriginal}</span>
                            <span className="oferta">Oferta: {auto.precioOferta}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Ofert;
