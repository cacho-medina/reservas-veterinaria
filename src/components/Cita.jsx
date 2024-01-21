import pet from "../assets/pet.svg";
function Cita({ cita, deleteCita }) {
    return (
        <div className="cita d-flex flex-column gap-2">
            <div className="d-flex align-items-center justify-content-between gap-3">
                <div className="col-2 text-center">
                    <img src={pet} alt="pet logo" className="img-fluid" />
                </div>
                <div className="col-9">
                    <p className="my-0">
                        <span className="fw-bold">Mascota:</span> {cita.mascota}
                    </p>
                    <p className="my-0 text-secondary">
                        <span className="fw-bold">Dueño:</span> {cita.dueno}
                    </p>
                </div>
            </div>
            <div className="bg-primary text-light p-2">
                <p className="my-1">
                    <span className="fw-bold">Fecha:</span> {cita.fecha}
                </p>
                <p className="my-1">
                    <span className="fw-bold">Hora:</span> {cita.hora}
                </p>
                <p className="my-1">
                    <span className="fw-bold">Sintomas:</span> {cita.sintomas}
                </p>
            </div>
            <div className="p-2 align-self-end">
                <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                        deleteCita(cita.mascota);
                    }}
                >
                    borrar
                </button>
            </div>
        </div>
    );
}

export default Cita;
