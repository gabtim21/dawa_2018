import React, { Component } from 'react';
import Operacion from './Calculadora.css';

export default class Contador extends Component{
	state = {
		cont: 0,
		n1: 0,
		n2: 0,
		respuesta: 0
	}
	verificar = (cambiar) =>{
		if (cambiar.target.id === "n1") {
			this.setState({
				n1: Number(cambiar.target.value)
			});
		}else {
			this.setState({
				n2: Number(cambiar.target.value)
			});
		}
	}
	sumar = () =>{
		this.setState({
			respuesta: this.state.n1 + this.state.n2
		});
	}
	restar = () =>{
		this.setState({
			respuesta: this.state.n1 - this.state.n2
		});
	}
	multiplicar = () =>{
		this.setState({
			respuesta: this.state.n1 * this.state.n2
		});
	}
	dividir = () =>{
		this.setState({
			respuesta: this.state.n1 / this.state.n2
		});
	}
	porcentaje = () =>{
		this.setState({
			respuesta: this.state.n1 / 100
		});
	}

	render(){
		return(
			<div className={Operacion.container}>
				<h1 className={Operacion.calculadoraTitle}>Calculadora</h1>
				<div className={Operacion.col}>
					<label>Ingrese el primer Número</label>
					<input type="number" className={Operacion.numeros} id="n1" value={this.state.n1} onChange={this.verificar}/>
				</div>
				<div className={Operacion.col}>
					<label>Ingrese el segundo Número</label>
					<input type="number" className={Operacion.numeros} id="n2" value={this.state.n2} onChange={this.verificar}/>
				</div>
				<div>
				<button className={Operacion.boton} id="respuesta" onClick={this.sumar}>Sumar</button>
				<button className={Operacion.boton} id="respuesta" onClick={this.restar}>Restar</button>
				<button className={Operacion.boton} id="respuesta" onClick={this.multiplicar}>Multiplicar</button>
				<button className={Operacion.boton} id="respuesta" onClick={this.dividir}>Dividir</button>
				<button className={Operacion.boton} id="respuesta" onClick={this.porcentaje}>Porcentaje</button>
				</div>
				<p className={Operacion.respuesta}>Respuesta: {this.state.respuesta}</p>
			</div>
			)
	}

}