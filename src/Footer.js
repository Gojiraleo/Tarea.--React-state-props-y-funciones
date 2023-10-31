import React from 'react';
import './Footer.css';  // Asegúrate de importar el archivo de estilos de Footer

const Footer = (props) => {
  return (
    <footer className="footer">
      <p>{props.text}</p>
    </footer>
  );
}

Footer.defaultProps = {
  text: "© 2023 Tu Compañía. Todos los derechos reservados."
}

export default Footer;
