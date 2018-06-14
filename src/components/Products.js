import React, { Component } from 'react';
import style from './style.css';
import chairImg from './chairImg.jpg'

class Products extends Component{

	render(){
		return(
			<section className="product-sec">
			<div className="container">
			<div className="row">
				<h3>Popular Products <a href="#">--view all</a></h3>
				<div className="col-sm-4 col-md-4">
					<div className="product">
						<img src={chairImg}/>
						<h4><a href="#">lorem ipsum</a></h4>
						<h5>40,000</h5>
					</div>
				</div>
				<div className="col-sm-4 col-md-4">
					<div className="product">
						<img src={chairImg}/>
						<h4><a href="#">lorem ipsum</a></h4>
						<h5>40,000</h5>
					</div>
				</div>
				<div className="col-sm-4 col-md-4">
					<div className="product">
						<img src={chairImg}/>
						<h4><a href="#">lorem ipsum</a></h4>
						<h5>40,000</h5>
					</div>
				</div>
			

			</div>
<br/>
			<div className="row">
					<div className="col-sm-4 col-md-4">
					<div className="product">
						<img src={chairImg}/>
						<h4><a href="#">lorem ipsum</a></h4>
						<h5>40,000</h5>
					</div>
				</div>
				<div className="col-sm-4 col-md-4">
					<div className="product">
						<img src={chairImg}/>
						<h4><a href="#">lorem ipsum</a></h4>
						<h5>40,000</h5>
					</div>
				</div>
				<div className="col-sm-4 col-md-4">
					<div className="product">
						<img src={chairImg}/>
						<h4><a href="#">lorem ipsum</a></h4>
						<h5>40,000</h5>
					</div>
				</div>
			</div>
			</div>
			</section>
			);

	}

}

export default Products
