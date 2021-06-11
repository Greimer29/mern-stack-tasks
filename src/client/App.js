import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state ={
            titulo:'',
            descripcion:'',
            tasks:[]
        }
        this.addTask = this.addTask.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount(){
        this.fetchTasks()
    }

    handleInput(e){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }

    fetchTasks(){
        fetch('/api/task')
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                tasks:data
            })
        })
    }

    addTask(e){
        if(this.state._id){
            fetch(`/api/task/${this.state._id}`,{
                method:'PUT',
                body:JSON.stringify(this.state),
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=> {
                M.toast({html:'Tarea Actualizada'});
                this.setState({
                    titulo:'',
                    descripcion:'',
                    _id:''
                })
                this.fetchTasks();
            })
        } else{
            fetch('/api/task',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            M.toast({html:'Tarea Guardada'});
            this.setState({
                titulo:"",
                descripcion:"",
                _id:''
            });
            this.fetchTasks();
        })
        .catch(err => console.error(err))}

        console.log(this.state);
        e.preventDefault();
    }

    deleteTask(id){
        if(confirm('Desea eliminar esta tarea?')){
            fetch(`/api/task/${id}`,{
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html:'Tarea Eliminada'})
                this.fetchTasks();
            })
        }
    }

    editTask(id){
        fetch(`/api/task/${id}`)
        .then(res => res.json())
        .then(data=> {
            this.setState({
                titulo:data.titulo,
                descripcion:data.descripcion,
                _id:data._id
            })
            this.fetchTasks();
        })
    }

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

            {/*General Content*/}
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                        {/*Form*/}
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input 
                                                    type="text" 
                                                    name="titulo" 
                                                    onChange={this.handleInput} 
                                                    placeholder="Task title" 
                                                    value={this.state.titulo}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea 
                                                    name="descripcion" 
                                                    onChange={this.handleInput} 
                                                    className="materialize-textarea" 
                                                    placeholder="Task Description"
                                                    value={this.state.descripcion}
                                                >

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

                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            title
                                        </th>
                                        <th>
                                            descripción
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task=>{
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.titulo}</td>
                                                    <td>{task.descripcion}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={()=>{this.deleteTask(task._id)}}>
                                                            <i className="material-icons">
                                                            delete
                                                            </i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" onClick={()=>{this.editTask(task._id)}}>
                                                            <i className="material-icons">
                                                            edit
                                                            </i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;