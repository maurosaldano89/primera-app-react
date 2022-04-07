import React from 'react';

class Smartphone extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const {delete,smartphone} = this.props;
		const {brand, price, barcode} = smartphone;
		return(
			<div>
			<li>Marca de celular: {brand} 
			<br/>Precio: {price} 
			<br/> Codigo de barras: {barcode}</li>
			<button href= '#' onClick= {delete}>
			</div>
			) 
	}
}

export default Smartphone;