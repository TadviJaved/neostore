import React, { Component } from 'react';
import './style.css';

class TopHeader extends Component {
  render(){
    return (
      <section>
      		<header>
      		<nav className="navbar">
				  <div className="container">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="#">WebSiteName</a>
				    </div>
				    <ul className="nav navbar-nav">
				      <li className="active"><a href="#">Home</a></li>
				      <li><a href="#">Page 1</a></li>
				      <li><a href="#">Page 2</a></li>
				    </ul>
				    <form className="navbar-form navbar-left" action="">
				      <div className="input-group">
				        <input type="text" className="form-control" placeholder="Search" name="search"/>
				        <div className="input-group-btn">
				          <button className="btn btn-default" type="submit">
				            <i className="glyphicon glyphicon-search"></i>
				          </button>
				        </div>
				      </div>
				    </form>
				    <a href="#" className="header-cart">cart</a>
				     <div className="dropdown">
				  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
				    Dropdown button
				  </button>
				  <div className="dropdown-menu">
				    <a className="dropdown-item" href="#">login</a>
				    <a className="dropdown-item" href="#">logout</a>
				  
				  </div>
				</div> 
				  </div>
				</nav>

      		</header>
      </section>
    );
  }
}

export default TopHeader;