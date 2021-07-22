import styles from './section.module.css';

function Section(props) {
	return (
		<div className={`${styles.section} ${props.className}`}>
			<div className="container">
				<div className="row">
					{props.title && (
					<div className="col-lg-1">
						<h1 className={styles.side}>{props.title}</h1>
					</div>
					)}
					<div className="col-md-auto col-lg-10">
						<div className="row justify-content-center">
							{props.children}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section;
