import styles from './navbar.module.css';
import hamburger from './hamburger.module.css';
import {userstate, useState, useEffect } from 'react';

function Navbar(props) {
 	const [value, setValue] = useState(false);
	const [fixed, setFixed] = useState(false);

 	function toggleMenu() {
		setValue(!value);
 	}
	
	const handleScroll = () => {
		if( window.scrollY > 1 )
			setFixed(true);
		else
			setFixed(false);
	}
	 
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	})

	/*const handleScroll = () => {
		console.log('scroll event', window.scrollY)
	}*/
	/*this.setState({
    post: post,
    theposition: window.pageYOffset
	});*/

 	return (
		<>
			<div className={`${styles.navbar} ${fixed ? `${styles["is-fixed"]}`: null}`}>
				<div className="row justify-content-between no-gutters">
					<div className={`${styles.logo} w-auto`}>
						<img src="/assets/irrelevante_logo.svg" />
					</div>
					<div className={`${styles.menu} align-self-center w-auto d-none d-lg-block col-lg-auto`}>
						<div className="row justify-content-between no-gutters">
							<div className={`${styles.options} col-sm`}>
								<p><a href="#">home</a></p>
								<p><a href="#">portfolio</a></p>
								<p><a href="#">outro menu</a></p>
								<p><a href="#">sobre</a></p>
							</div>
							<div className={`${styles.social} col-sm`}>
								<a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
								<a href="#"><i className="fab fa-tiktok" aria-hidden="true"></i></a>
								<a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
								<a href="#"><i className="fab fa-facebook-square" aria-hidden="true"></i></a>
								<a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
								<a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
					<div className={`${styles.mobile}  align-self-center w-auto d-lg-none col-lg-auto`}>
						<button className={`${hamburger.hamburger} ${value ? `${hamburger["is-active"]}` : null}`} onClick={toggleMenu}>
							<svg width="32" height="32" viewBox="0 0 100 100">
								<path className={`${hamburger.line} ${hamburger.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
								<path className={`${hamburger.line} ${hamburger.line2}`} d="M 20,50 H 80" />
								<path className={`${hamburger.line} ${hamburger.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className={`${styles.mobilemenu} d-lg-none col-lg-auto ${value ? `${styles["is-active"]}`: null}`}>

			</div>
		</>
 	)
}

//{value ? 'hamburger is-active': null} 

export default Navbar;