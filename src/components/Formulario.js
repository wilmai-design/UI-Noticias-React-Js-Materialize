import React, { Component, Fragment } from 'react';

class Formulario  extends Component {
    state = {  }
    render() {
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-2">
                    <form>
                        <h2>Encuentra Noticias por categoría</h2>

                        <div className="input-field col s12 m8">
                            <select>
                                <option value="general">General</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sport">Sport</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Formulario;