import React, { useState } from "react";

// Utilidades para el formulario
const initialForm = {
    nombre: "",
    correo: "",
    numero: "",
    cv: null,
};
const initialErrors = {
    nombre: "",
    correo: "",
    numero: "",
    cv: "",
};

function Equipo() {
    // Estado para el formulario "Trabaja con Nosotros"
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
    const [alert, setAlert] = useState({ type: "", msg: "", show: false });

    // Manejo de cambios en el formulario
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    // Validación simple
    const validate = () => {
        let valid = true;
        let newErrors = { ...initialErrors };
        if (!form.nombre.trim()) {
            newErrors.nombre = "Por favor ingresa tu nombre.";
            valid = false;
        }
        if (!/\S+@\S+\.\S+/.test(form.correo)) {
            newErrors.correo = "Por favor ingresa un correo válido.";
            valid = false;
        }
        if (!/^[0-9]{7,15}$/.test(form.numero)) {
            newErrors.numero = "Por favor ingresa un número válido.";
            valid = false;
        }
        if (!form.cv || form.cv.type !== "application/pdf" || form.cv.size > 2 * 1024 * 1024) {
            newErrors.cv = "Adjunta un PDF menor a 2MB.";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    // Envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setAlert({
                type: "success",
                msg: "¡Solicitud enviada correctamente!",
                show: true,
            });
            setForm(initialForm);
            e.target.reset();
        } else {
            setAlert({
                type: "danger",
                msg: "Por favor corrige los errores.",
                show: true,
            });
        }
    };

    // Datos del equipo
    const ejecutivos = [
        {
            nombre: "Juan Pérez",
            cargo: "Director General",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            desc: "Liderazgo estratégico y pasión por la excelencia.",
            modal: {
                color: "primary",
                desc:
                    "Con más de 15 años de experiencia en el sector automotriz, Juan lidera el equipo con visión estratégica y pasión por la excelencia. Su compromiso ha sido clave en el crecimiento de la empresa.",
            },
        },
        {
            nombre: "María Gómez",
            cargo: "Gerente de Ventas",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            desc: "Experta en atención y fidelización de clientes.",
            modal: {
                color: "primary",
                desc:
                    "Especialista en ventas y atención al cliente, María ha impulsado la satisfacción y fidelización de nuestros clientes con su trato cercano y profesionalismo.",
            },
        },
        {
            nombre: "Carlos Ruiz",
            cargo: "Jefe de Finanzas",
            img: "https://randomuser.me/api/portraits/men/54.jpg",
            desc: "Gestión financiera y crecimiento sostenible.",
            modal: {
                color: "primary",
                desc:
                    "Carlos es responsable de la gestión financiera, asegurando la estabilidad y el crecimiento sostenible de la empresa con su enfoque analítico y transparente.",
            },
        },
        {
            nombre: "Ana Torres",
            cargo: "Gerente de Marketing",
            img: "https://randomuser.me/api/portraits/women/65.jpg",
            desc: "Estrategias innovadoras y creatividad.",
            modal: {
                color: "primary",
                desc:
                    "Ana lidera las estrategias de marketing, posicionando la marca y conectando con los clientes a través de campañas innovadoras y creativas.",
            },
        },
    ];

    const tecnicos = [
        {
            nombre: "Luis Fernández",
            cargo: "Técnico Mecánico",
            img: "https://randomuser.me/api/portraits/men/77.jpg",
            desc: "Precisión y dedicación en mecánica automotriz.",
            modal: {
                color: "success",
                desc:
                    "Experto en mecánica automotriz, Luis garantiza el óptimo funcionamiento de cada vehículo con precisión y dedicación.",
            },
        },
        {
            nombre: "Sofía Castro",
            cargo: "Especialista en Diagnóstico",
            img: "https://randomuser.me/api/portraits/women/72.jpg",
            desc: "Tecnología avanzada para diagnósticos precisos.",
            modal: {
                color: "success",
                desc:
                    "Sofía utiliza tecnología avanzada para detectar y resolver cualquier inconveniente, asegurando la seguridad y calidad de nuestros vehículos.",
            },
        },
        {
            nombre: "Miguel Herrera",
            cargo: "Técnico Electricista",
            img: "https://randomuser.me/api/portraits/men/81.jpg",
            desc: "Especialista en sistemas eléctricos automotrices.",
            modal: {
                color: "success",
                desc:
                    "Miguel es especialista en sistemas eléctricos, asegurando que cada componente funcione a la perfección y con total seguridad.",
            },
        },
        {
            nombre: "Laura Morales",
            cargo: "Técnica en Carrocería",
            img: "https://randomuser.me/api/portraits/women/85.jpg",
            desc: "Atención al detalle en estética y estructura.",
            modal: {
                color: "success",
                desc:
                    "Laura se encarga de la estética y estructura de los vehículos, devolviéndoles su mejor aspecto con gran atención al detalle.",
            },
        },
    ];

    // Estado para modals
    const [modal, setModal] = useState({ show: false, persona: null });

    // Renderiza tarjetas de equipo
    const renderTeam = (arr) =>
        arr.map((p, i) => (
            <div className="col" key={p.nombre}>
                <div className="card h-100 text-center shadow-sm border-0">
                    <div className="d-flex justify-content-center mt-3">
                        <img
                            src={p.img}
                            className={`rounded-circle team-img border border-3 border-${p.modal.color}`}
                            alt={p.nombre}
                            style={{
                                width: 110,
                                height: 110,
                                objectFit: "cover",
                                cursor: "pointer",
                            }}
                            onClick={() => setModal({ show: true, persona: p })}
                            tabIndex={0}
                            role="button"
                            aria-label={`Ver más sobre ${p.nombre}`}
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title mb-0">{p.nombre}</h5>
                        <small className="text-muted">{p.cargo}</small>
                        <p className="mt-2 small text-secondary">{p.desc}</p>
                    </div>
                </div>
            </div>
        ));

    // Modal de persona
    const PersonaModal = () =>
        modal.show && modal.persona ? (
            <div
                className="modal fade show"
                tabIndex="-1"
                style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
                role="dialog"
                aria-modal="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div
                            className={`modal-header bg-${modal.persona.modal.color} text-white`}
                        >
                            <h5 className="modal-title">
                                {modal.persona.nombre} - {modal.persona.cargo}
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                aria-label="Cerrar"
                                onClick={() => setModal({ show: false, persona: null })}
                            />
                        </div>
                        <div className="modal-body text-center">
                            <img
                                src={modal.persona.img}
                                className={`img-fluid rounded-circle mb-3 border border-3 border-${modal.persona.modal.color}`}
                                alt={modal.persona.nombre}
                                style={{ width: 120, height: 120, objectFit: "cover" }}
                            />
                            <p>{modal.persona.modal.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : null;

    return (
        <div className="container mt-5">
            <section>
                <h2 className="section-title">Nuestra Historia</h2>
                <div className="row align-items-center flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-8">
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2 d-flex align-items-start">
                                <i className="bi bi-flag-fill text-primary me-2 flex-shrink-0"></i>
                                <span>
                                    <strong>Fundados en 2010:</strong> Nacimos como un sueño
                                    familiar.
                                </span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                                <i className="bi bi-graph-up-arrow text-success me-2 flex-shrink-0"></i>
                                <span>
                                    <strong>Crecimiento constante:</strong> Hoy somos líderes en
                                    la región.
                                </span>
                            </li>
                            <li className="mb-2 d-flex align-items-start">
                                <i className="bi bi-stars text-warning me-2 flex-shrink-0"></i>
                                <span>
                                    <strong>Pasión y confianza:</strong> Más de una década
                                    superando expectativas.
                                </span>
                            </li>
                            <li className="d-flex align-items-start">
                                <i className="bi bi-emoji-smile text-info me-2 flex-shrink-0"></i>
                                <span>
                                    <strong>Tu mejor experiencia:</strong> ¡Encuentra el auto
                                    ideal con nosotros!
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
                        <img
                            src="accets/img/automotora.jpeg"
                            alt="AutoStore Historia"
                            className="img-fluid rounded shadow w-100"
                            style={{
                                maxWidth: 320,
                                maxHeight: 180,
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </section>

            <section>
                <h2 className="section-title">Logros del Equipo</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm text-center">
                            <div className="card-body">
                                <i className="bi bi-trophy-fill fs-1 text-warning mb-3"></i>
                                <h5 className="card-title">Premio a la Excelencia 2023</h5>
                                <p className="card-text small">
                                    Reconocidos como la mejor concesionaria regional por nuestro
                                    compromiso con la calidad y la satisfacción del cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm text-center">
                            <div className="card-body">
                                <i className="bi bi-people-fill fs-1 text-primary mb-3"></i>
                                <h5 className="card-title">+5,000 Clientes Satisfechos</h5>
                                <p className="card-text small">
                                    Hemos superado la marca de cinco mil clientes felices,
                                    consolidando nuestra reputación en la región.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0 shadow-sm text-center">
                            <div className="card-body">
                                <i className="bi bi-lightning-charge-fill fs-1 text-success mb-3"></i>
                                <h5 className="card-title">Innovación en Servicio</h5>
                                <p className="card-text small">
                                    Primeros en implementar diagnóstico digital avanzado y
                                    atención personalizada en la zona.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accordion */}
            <div className="accordion mb-4" id="equipoAccordion">
                {/* Nuestro Equipo */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingEquipo">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEquipo"
                            aria-expanded="true"
                            aria-controls="collapseEquipo"
                        >
                            Nuestro Equipo
                        </button>
                    </h2>
                    <div
                        id="collapseEquipo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingEquipo"
                        data-bs-parent="#equipoAccordion"
                    >
                        <div className="accordion-body">
                            <h4 className="mt-4 mb-3 text-primary">
                                <i className="bi bi-briefcase-fill me-2"></i>Ejecutivos
                            </h4>
                            <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
                                {renderTeam(ejecutivos)}
                            </div>
                            <h4 className="mt-4 mb-3 text-success">
                                <i className="bi bi-tools me-2"></i>Técnicos
                            </h4>
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {renderTeam(tecnicos)}
                            </div>
                            <PersonaModal />
                        </div>
                    </div>
                </div>
                {/* Misión y Visión */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingMisionVision">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseMisionVision"
                            aria-expanded="false"
                            aria-controls="collapseMisionVision"
                        >
                            Misión y Visión
                        </button>
                    </h2>
                    <div
                        id="collapseMisionVision"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingMisionVision"
                        data-bs-parent="#equipoAccordion"
                    >
                        <div className="accordion-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-bullseye me-2"></i>Misión
                                            </h5>
                                            <p className="card-text">
                                                Brindar vehículos de alta calidad y un servicio
                                                personalizado, superando las expectativas de nuestros
                                                clientes y contribuyendo al desarrollo sostenible de la
                                                comunidad.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className="bi bi-eye me-2"></i>Visión
                                            </h5>
                                            <p className="card-text">
                                                Ser la concesionaria líder e innovadora en la región,
                                                reconocida por la excelencia, la confianza y el
                                                compromiso con la satisfacción total del cliente.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Nuestros Valores */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingValores">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseValores"
                            aria-expanded="false"
                            aria-controls="collapseValores"
                        >
                            Nuestros Valores
                        </button>
                    </h2>
                    <div
                        id="collapseValores"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingValores"
                        data-bs-parent="#equipoAccordion"
                    >
                        <div className="accordion-body">
                            <div className="row row-cols-1 row-cols-md-2 g-3">
                                <div className="col">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-shield-check fs-2 text-primary me-3"></i>
                                        <div>
                                            <h6 className="mb-1">Integridad</h6>
                                            <p className="mb-0 small">
                                                Actuamos con honestidad, ética y transparencia en todas
                                                nuestras acciones y relaciones.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-award fs-2 text-success me-3"></i>
                                        <div>
                                            <h6 className="mb-1">Calidad</h6>
                                            <p className="mb-0 small">
                                                Nos esforzamos por ofrecer productos y servicios de
                                                excelencia, garantizando la satisfacción de nuestros
                                                clientes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-globe2 fs-2 text-info me-3"></i>
                                        <div>
                                            <h6 className="mb-1">Sostenibilidad</h6>
                                            <p className="mb-0 small">
                                                Fomentamos prácticas responsables que protegen el medio
                                                ambiente y contribuyen al bienestar social.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-lightbulb fs-2 text-warning me-3"></i>
                                        <div>
                                            <h6 className="mb-1">Innovación</h6>
                                            <p className="mb-0 small">
                                                Promovemos la creatividad y la mejora continua para
                                                adaptarnos a las tendencias y necesidades del mercado.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Trabaja con Nosotros */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTrabaja">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTrabaja"
                            aria-expanded="false"
                            aria-controls="collapseTrabaja"
                        >
                            Trabaja con Nosotros
                        </button>
                    </h2>
                    <div
                        id="collapseTrabaja"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTrabaja"
                        data-bs-parent="#equipoAccordion"
                    >
                        <div className="accordion-body">
                            <form
                                id="trabajaForm"
                                noValidate
                                encType="multipart/form-data"
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.nombre ? "is-invalid" : ""
                                        }`}
                                        id="nombre"
                                        name="nombre"
                                        value={form.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">{errors.nombre}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="correo" className="form-label">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control ${
                                            errors.correo ? "is-invalid" : ""
                                        }`}
                                        id="correo"
                                        name="correo"
                                        value={form.correo}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">{errors.correo}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="numero" className="form-label">
                                        Número de teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        className={`form-control ${
                                            errors.numero ? "is-invalid" : ""
                                        }`}
                                        id="numero"
                                        name="numero"
                                        value={form.numero}
                                        onChange={handleChange}
                                        required
                                        pattern="[0-9]{7,15}"
                                    />
                                    <div className="invalid-feedback">{errors.numero}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cv" className="form-label">
                                        Adjuntar CV (PDF, máx. 2MB)
                                    </label>
                                    <input
                                        type="file"
                                        className={`form-control ${errors.cv ? "is-invalid" : ""}`}
                                        id="cv"
                                        name="cv"
                                        accept=".pdf"
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">{errors.cv}</div>
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Enviar Solicitud
                                </button>
                            </form>
                            {alert.show && (
                                <div
                                    className={`alert alert-${alert.type} mt-3`}
                                    role="alert"
                                    onClick={() => setAlert({ ...alert, show: false })}
                                    style={{ cursor: "pointer" }}
                                >
                                    {alert.msg}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipo;
