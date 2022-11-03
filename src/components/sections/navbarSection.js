import React from 'react';
import logo from '../../assets/img/oldlogo.jpg';

const NavBarSection = () => {
    return (

<header>
	<a href="#home">
  <img src={logo} alt="logo" className="logo"></img>
	</a>
  <div className="nav">
			<nav>
				<ul className="menu">
					<li><a href="#aboutme">About</a></li>
					<li><a href="#go">Resume</a></li>
					<li><a href="#test">Projects</a></li>
					<li><a href="#contactme">Contact</a></li>
				</ul>
			</nav>
	</div>
</header>
    )
}


export default NavBarSection;