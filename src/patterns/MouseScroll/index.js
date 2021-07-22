import styles from './mousescroll.module.css';

function MouseScroll(props) {
	let c = props.className.split(" ");
	let classes = "";
	c.forEach(element => {
		classes += styles[element] + " ";	
	});

	return (
		<div className={`${styles["mouse"]} ${classes}`}></div>
	)
}

export default MouseScroll;