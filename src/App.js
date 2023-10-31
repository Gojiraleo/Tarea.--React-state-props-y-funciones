import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Alert } from 'react-bootstrap';
import './App.css';

class App extends Component {
  state = {
    materias: [
      { id: "AEB-1001" , nombre: "Desarrollo de aplicaciones móviles", hora: "13:00-14:00", grupo: "F8A" },
      { id: "IFF-1012", nombre: "Estrategias de gestión", hora: "14:00-15:00", grupo: "F8A" },
      { id: "IFD-1023", nombre: "Taller de emprendedores", hora: "18:00-17:00", grupo: "F8A" },
      { id: "IFF-1016", nombre: "Inteligencia de Negocios", hora: "16:00-17:00", grupo: "F8A" },
      { id: "IFD-1023", nombre: "Taller de emprendedores", hora: "14:00-15:00", grupo: "F8B" },
      { id: "IFF-1012", nombre: "Estrategias de gestión", hora: "15:00-16:00", grupo: "F8B" },
      { id: "AEB-1001", nombre: "Desarrollo de aplicaciones móviles", hora: "16:00-17:00", grupo: "F8B" },
      { id: "IFF-1016", nombre: "Inteligencia de Negocios", hora: "17:00-18:00", grupo: "F8B" },
    ],
    materiasEditadas: [] // Lista para almacenar las materias editadas
  }

  handleAgregar = (materia) => {
    if (this.state.materiasEditadas.length >= 3) {
      alert("Ya has agregado el máximo de tres materias");
      return;
    }

    if (this.state.materiasEditadas.find(p => p.id === materia.id)) {
      alert("Ya has Agregado esta materia");
      return;
    }

    this.setState(prevState => ({
      materiasEditadas: [...prevState.materiasEditadas, materia]
    }), () => {
      alert("La materia fue agregada"); // Alerta para indicar que la materia fue agregada
    });
  }

  delete = (materia) => {
    let temporal = this.state.materiasEditadas.filter(p => p.id !== materia.id);
    this.setState({
      materiasEditadas: temporal
    })
  }

  render() {
    const numeroMaterias = this.state.materiasEditadas.length;

    return (
      <div className="App">
        <Header />
        <Banner />
        <div className="App-body">
          <div className="table-container">
            <div className="table-wrapper">
              <h1>Materias</h1>
              {this.state.materias.length > 0 ? (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Clave</th>
                      <th>Nombre</th>
                      <th>Hora</th>
                      <th>Grupo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.materias.map(materia => (
                      <tr key={materia.id}>
                        <td>{materia.id}</td>
                        <td>{materia.nombre}</td>
                        <td>{materia.hora}</td>
                        <td>{materia.grupo}</td>
                        <td>
                          <Button
                            variant="success"
                            onClick={() => this.handleAgregar(materia)}
                            disabled={this.state.materiasEditadas.some(p => p.id === materia.id)}
                          >
                            +
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h2>No tienes materias</h2>
              )}
            </div>
          </div>
          <div className="table-container">
            <div className="table-wrapper">
              <h1>Mi horario: ({numeroMaterias} materias)</h1>
              {numeroMaterias > 0 ? (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Clave</th>
                      <th>Nombre</th>
                      <th>Hora</th>
                      <th>Grupo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.materiasEditadas.map(materia => (
                      <tr key={materia.id}>
                        <td>{materia.id}</td>
                        <td>{materia.nombre}</td>
                        <td>{materia.hora}</td>
                        <td>{materia.grupo}</td>
                        <td>{<Button variant='danger' onClick={() => this.delete(materia)}>-</Button>}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <h2>No hay materias</h2>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  };
}

export default App;
