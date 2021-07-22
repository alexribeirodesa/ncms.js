import styles from './header.module.css';
import MouseScroll from '../../patterns/MouseScroll';

function Header(props) {
	return (
		<div className={`${styles.header} ${props.fullscreen === "true" ? `${styles.fullscreen}` : null}`} style={{backgroundImage: `url(${props.src})`}}>
			<MouseScroll className="arrow" />
		</div>
	);
}

export default Header;
