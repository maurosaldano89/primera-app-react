import React from 'react';

class Smartphone extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const {smartphone} = this.props;
		const {brand, price, barcode} = smartphone;
		return(
			<div>
			<li>Marca de celular: {brand} 
			<br/>Precio: {price} 
			<br/> Codigo de barras: {barcode}</li>
			</div>
			) 
	}
}

export default Smartphone;