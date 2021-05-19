import React, {Component} from 'react';

class App extends Component {
    render(){
        return (
            <div>
            {/*Navigation bar*/}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a href="/" className="brand-logo link">
                            MERN Stack
                        </a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" placeholder="Task title" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea className="materialize-textarea" placeholder="Task Description">

                                                </textarea>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darken-4">
                                            Enviar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col s7"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;