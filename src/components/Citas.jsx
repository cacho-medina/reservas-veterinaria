import Cita from "./Cita";

function Citas({ citas, deleteCita }) {
    return (
        <>
            <p className="display-2 mt-5 text-center">Citas</p>
            <div className="py-5 border-top border-bottom border-primary border-2 back d-flex flex-column flex-sm-row flex-wrap justify-content-center align-items-center gap-3 ">
                {citas.length ? (
                    citas?.map((cita, index) => {
                        return (
                            <Cita
                                cita={cita}
                                key={index}
                                deleteCita={deleteCita}
                            ></Cita>
                        );
                    })
                ) : (
                    <p className="display-1 text-center">
                        No hay citas guardadas
                    </p>
                )}
            </div>
        </>
    );
}

export default Citas;
