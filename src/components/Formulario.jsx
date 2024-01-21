import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Citas from "./Citas";

function Formulario() {
    const validarFecha = (dob) => {
        const fecha = new Date(dob);
        const hoy = new Date();
        return (
            !isNaN(fecha) && fecha.toString() !== "Invalid Date" && fecha < hoy
        );
    };
    const validar = (info) => {
        const errors = {};

        if (!info.mascota) {
            errors.mascota = "ingrese el nombre de su mascota";
        }
        if (info.mascota.length < 3) {
            errors.mascota = "ingrese un nombre valido";
        }

        if (!info.dueno) {
            errors.dueno = "ingrese su nombre";
        }
        if (info.dueno.length < 3) {
            errors.dueno = "ingrese un nombre valido";
        }

        if (!info.sintomas) {
            errors.sintomas = "ingrese los sintomas";
        }

        if (!info.hora) {
            errors.hora = "ingrese un horario";
        }

        if (!info.fecha) {
            errors.fecha = "ingrese una fecha";
        }
        if (validarFecha(info.fecha)) {
            errors.fecha = "ingrese una fecha valida";
        }

        return errors;
    };
    const initial = {
        mascota: "",
        dueno: "",
        sintomas: "",
        fecha: "",
        hora: "",
    };
    const citasInitial = JSON.parse(localStorage.getItem("citas")) || [];
    const [errors, setErrors] = useState({});
    const [data, setData] = useState(initial);
    const [citas, setCitas] = useState(citasInitial);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Object.keys(errors).length) {
            setCitas([...citas, data]);
            setData(initial);
            alert("Cita agendada!");
        } else {
            alert("Por favor completa los datos para agendar una cita");
        }
    };
    const handleInputChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setErrors(validar({ ...data, [e.target.name]: e.target.value }));
    };
    const deleteCita = (nombreMascota) => {
        const filtered = citas.filter((item) => item.mascota !== nombreMascota);
        setCitas(filtered);
    };
    useEffect(() => {
        localStorage.setItem("citas", JSON.stringify(citas));
    }, [citas]);
    return (
        <>
            <Form
                className="shadow text-center py-2 container-fluid contenedor px-0"
                onSubmit={handleSubmit}
            >
                <h3 className="">LLenar el formulario para agendar una cita</h3>
                <div className="back fw-medium py-3 my-2 px-1 px-md-4 border-top border-bottom border-2 border-primary d-flex flex-column gap-2 gap-md-4">
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-md-4">
                        <Form.Label className="gris" htmlFor="mascota">
                            Nombre de la mascota
                        </Form.Label>
                        <Form.Control
                            id="mascota"
                            type="text"
                            className="input mx-auto mx-md-0"
                            placeholder="nombre de la mascota"
                            name="mascota"
                            value={data.mascota}
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.mascota ? (
                        <p className="error text-end">{errors.mascota}</p>
                    ) : (
                        ""
                    )}
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-md-4">
                        <Form.Label className="gris" htmlFor="dueno">
                            Nombre del dueño
                        </Form.Label>
                        <Form.Control
                            id="dueno"
                            type="text"
                            className="input mx-auto mx-md-0"
                            placeholder="nombre del dueño"
                            name="dueno"
                            value={data.dueno}
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.dueno ? (
                        <p className="error text-end">{errors.dueno}</p>
                    ) : (
                        ""
                    )}
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-md-4">
                        <Form.Label className="gris" htmlFor="sintomas">
                            Sintomas
                        </Form.Label>
                        <Form.Control
                            id="sintomas"
                            type="text"
                            className="input mx-auto mx-md-0"
                            placeholder="describir sintomas"
                            name="sintomas"
                            value={data.sintomas}
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.sintomas ? (
                        <p className="error text-end">{errors.sintomas}</p>
                    ) : (
                        ""
                    )}
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-center justify-content-between gap-md-3">
                            <Form.Label className="gris" htmlFor="fecha">
                                Fecha
                            </Form.Label>
                            <Form.Control
                                id="fecha"
                                type="date"
                                className="input mx-auto mx-md-0"
                                name="fecha"
                                value={data.fecha}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column flex-md-row align-items-center justify-content-between gap-md-3">
                            <Form.Label className="gris" htmlFor="hora">
                                Hora
                            </Form.Label>
                            <Form.Control
                                id="hora"
                                type="time"
                                className="input mx-auto mx-md-0"
                                name="hora"
                                value={data.hora}
                                onChange={handleInputChange}
                            />
                        </div>
                        {errors.fecha || errors.hora ? (
                            <p className="error text-center">
                                La fecha y hora correctas necesarias
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <Button
                    type="submit"
                    variant="outline-primary"
                    disabled={!data.fecha}
                >
                    Agendar
                </Button>
            </Form>
            <Citas citas={citas} deleteCita={deleteCita}></Citas>
        </>
    );
}

export default Formulario;
