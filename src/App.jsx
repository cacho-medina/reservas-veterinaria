import "./App.css";
import Formulario from "./components/Formulario";
import Container from "react-bootstrap/Container";

function App() {
    return (
        <Container fluid className="px-0">
            <h1 className="text-center display-3 py-3">
                Administrador pacientes de veterinaria
            </h1>
            <Formulario></Formulario>
        </Container>
    );
}

export default App;
