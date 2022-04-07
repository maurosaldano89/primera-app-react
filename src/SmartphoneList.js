import React from 'react';
import Smartphone from './Smartphone';

class SmartphoneList extends React.Component{
	constructor(props){
		super(props)
		const smartphones = [
		{
			'brand' : 'Samsung',
			'price' : 110000,
			'barcode': 11
		},
		{
			'brand' : 'Xiaomi',
			'price' : 140000,
			'barcode': 15
		},
		{
			'brand' : 'Iphone',
			'price' : 250000,
			'barcode': 10
		},
		{
			'brand' : 'Xiaomi',
			'price' : 120000,
			'barcode': 8
		},
		{
			'brand' : 'Motorola',
			'price' : 95000,
			'barcode': 20
		}
		];

		this.state = {
			smartphones : smartphones
		}
	}

	onAddNewButtonClicked = () =>{
		const barcodes = this.state.smartphones.map ((smartphone)=>{
			return smartphone.barcode;
		});

		const newBarcode = Math.max(0,...barcodes) + 1;
		const newSmartphone = {
			'brand' : 'Iphone',
			'price' : 320000,
			'barcode' : newBarcode
		};
		const newSmartphones = [newSmartphone,...this.state.smartphones];

		this.setState({
			smartphones: newSmartphones
		})
	}

	render(){
		const smartphoneList = this.state.smartphones.map((smartphone)=>{
			return <Smartphone key={smartphone.barcode} smartphone={smartphone}/>
		})
		
		return(
			<div>
				<ul>{smartphoneList}</ul>
				<button onClick = {this.onAddNewButtonClicked}>Agregar nuevo Smartphone</button>
			</div>
			);
 }
}

export default SmartphoneList;