// eslint-disable-next-line react/prop-types
const Error = ({children}) => { // children es un palabra reservada en react y hace referencia todo lo que le pase al props

  return (
    // se retorna esto
    <div className=" bg-red-800 
     text-white text-center p-3 
     uppercase font-bold mb-3 rounded-md">
      
        {children}

        
    </div>
  );
};

export default Error;
