import ListadoPacientes from "./components/ListadoPacientes";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Pacientes from "./components/Pacientes";

function App() {
  // genero la funcion aqui luego la paso al componente
  const [pacientes, setPacientes] = useState([]); // su valor inicial es un arreglo vacio
  const [paciente, setPaciente] = useState({}); // su valor inicial es un objeto vacio

  // localstorange

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };

    // mando a llamar la funcion
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes)); // lo convierte a un string
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacienteActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacienteActualizados);
  };

  return (
    <div className=" container  mx-auto mt-20">
      <Header />

      <div className=" mt-12  md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes
          // el componente
          pacientes={pacientes}
          setPaciente={setPaciente} // modifica la parte del state
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
