import React from 'react';
import logo from '../../assets/img/oldlogo.jpg';

const NavBarSection = () => {
    return (
        
	
<header>
<body id="home"></body>
	<a href="#home">
  <img src={logo} alt="logo" class="logo"></img>
	</a>
  <div class="nav">
			<nav>
				<ul class="menu">
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