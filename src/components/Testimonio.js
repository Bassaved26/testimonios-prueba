//Pasos paa crear un componente en react 
// importando react del paquete 'react' pero desde 202 no es necesario importarlo asi
import '../styles-sheets/Testimony.css'

//los componentes de react siempre se empieza en mayusculas
 function Testimonios(props){ /*Pasando a props en componentes*/
//definiendo estructura del componente
  return(
    <div className="contenedor-testimonios">
      <img 
        className="imagen-Testimonio"
        src={require(`../img/${props.imagen}.png`)}
        alt="Foto de Emma" /> {/* para insertar una hay que llamar al nodo require*/}
      <div className="testimony-content-text">
        <p className="testimony-name">
        <strong>{props.nombre}</strong> Bostian en <strong>{props.pais}</strong>{/* Agregando en negrita con la etiqueta <strong> que ayuda a tener mas importancia en el textp */}
        </p>
        <p className="testimony-job">
          {props.cargo} en {props.empresa}
        </p>
        <p className="testimony-text">
          "{props.testimonio}"
        </p>
      </div>
    </div>
  );

}

 export default Testimonios 