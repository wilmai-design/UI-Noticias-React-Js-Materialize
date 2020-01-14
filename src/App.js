import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = { 
    noticias: []
  }

  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c9aa1a7c0e054c16a94c6fc8fe571866`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    // console.log(noticias.articles);
    this.setState({
      noticias : noticias.articles
    })
  }


  render() {
    return ( 
      <Fragment>
        <Header 
          titulo = 'Noticias React API'
        />

        <div className="container white contenedor-noticias">
          <Formulario />

          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
