// estos son los HOOK la importacion
import { useState, useEffect } from "react";
import Error from "./Error";

// nuestro componente
const Formulario = ({pacientes, setPacientes,paciente, setPaciente}) => { // via props
  
  // los hook siempre deben de ir dentro del componente antes del return
  // no se debe colocar dentro de condicionales ni despues del return
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  // escucha los cambios que sucedan en paciente
  useEffect(()=>{
   if(Object.keys(paciente).length > 0){// una forma de comprobar si un objeto tiene algo y comprueba si el arreglo esta vacio o no 
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
   } 

  },[paciente])

  // puedes tener multiples useEffect 





  const generarId =()=>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random +fecha
  }

  // generando la funcion para el evento
  const handleSubmit = (e) => {
    e.preventDefault(); // detiene la opcion por default

    // VALIDACION DEL FORMULARIO utilizando un methodos de los arreglos llamados includes
    // esto verifica que al menos uno de ellos tenga un string vacio
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");

      setError(true);

      // con este return hacemos que desaparesca la pantalla del erro y retornamos el setError

      return;
    } 
    // esto hace que el error desaparesca de la pantalla 
    setError(false)

     // objeto de pacientes 
     const objetoPaciente = {
      nombre, 
      propietario, 
      email,
      fecha,
      sintomas,
      
          
     } 
     if(paciente.id){
     // editando registro
     objetoPaciente.id = paciente.id
     

     const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
      paciente.id ? objetoPaciente : pacienteState)
     setPacientes(pacientesActualizados)
     setPaciente({})

     }else{
      objetoPaciente.id = generarId();
      setPacientes([...pacientes,objetoPaciente])
     }
     //console.log(objetoPaciente)

     // cojemos una copia de lo que hay en pacientes y pasamos el objetoPaciente

     // esto nos devuelvo un arreglo nuevo 
    

    // reiniciar el formulario cuando agregamos uno nuevo borra y se escribe otro nuevo
    setNombre('') // que sea igual a un string vacio
    setPropietario('') // que sea igual a un string vacio
    setEmail('')// que sea igual a un string vacio
    setFecha('')// que sea igual a un string vacio
    setSintomas('')// que sea igual a un string vacio
     
    
  };

  return (
    <div className="  md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center">
        Seguimientos Pacientes
      </h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade Paciente y {""}
        <span className=" text-indigo-600 font-bold ">Administralo</span>
      </p>

      <form
        // creando el evento y llamamos arriba del return  para asociarlo al evento
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
      >
        {/* Mostrando el errro en pantallar*/}
        {/* el caso verdadero  si hay un erro  de lo contrario el lado negativo el error*/}
       
        {error && <Error> <p>❕ todos los campos son obligatorios ✖</p>  </Error>} {/*se evalua esta expresion y retorna lo siguiente */} 

       
        

        <div className=" mb-5">
          <label
            htmlFor="mascota"
            className=" block  text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre la Macosta"
            className=" border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
            value={nombre}
            // onchange es un evento de React
            //aqui solo asignamos lo que el usuario escribe
            onChange={(e) => setNombre(e.target.value)} // de esta forma puedo leer el hook de nombre y modificarlo
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="propietario"
            className=" block  text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre del Propietario"
            className=" border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
            value={propietario}
            // onchange es un evento de React
            //aqui solo asignamos lo que el usuario escribe
            onChange={(e) => setPropietario(e.target.value)} // de esta forma puedo leer el hook de nombre y modificarlo
          />
        </div>

        <div className=" mb-5">
          <label
            htmlFor="email"
            className=" block  text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email contacto del propietario"
            className=" border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
            value={email}
            // onchange es un evento de React
            //aqui solo asignamos lo que el usuario escribe
            onChange={(e) => setEmail(e.target.value)} // de esta forma puedo leer el hook de nombre y modificarlo
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="alta"
            className=" block  text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>

          <input
            id="alta"
            type="date"
            placeholder=""
            className=" border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
            value={fecha}
            // onchange es un evento de React
            //aqui solo asignamos lo que el usuario escribe
            onChange={(e) => setFecha(e.target.value)} // de esta forma puedo leer el hook de nombre y modificarlo
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="alta"
            className=" block  text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>

          <textarea
            id="sintomas"
            className=" border-2 w-full p-2 mt-2 placer-gray-400 rounded-md"
            placeholder="Describe los sintomas "
            value={sintomas}
            // onchange es un evento de React
            //aqui solo asignamos lo que el usuario escribe
            onChange={(e) => setSintomas(e.target.value)} // de esta forma puedo leer el hook de nombre y modificarlo
          />
        </div>

        <input
          type="submit"
          className=" bg-indigo-600 w-full p-3  text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  );
};
export default Formulario;
