import Head from '../src/components/Head/index.js';

function Tempo(props) {
	const dynamicDate = new Date();
	const dynamicDateString = dynamicDate.toGMTString();

	return (
		<div>
			<Head title="Qual a hora?" />
			<h1>tempo</h1>
			<div>{dynamicDateString} (dinâmico)</div>
			<div>{props.staticDateString} (estático)</div>
		</div>
	)
}

export function getStaticProps() {
	const staticDate = new Date();
	const staticDateString = staticDate.toGMTString();

	return {
		props: {
			staticDateString
		},
		revalidate: 3600
	}
}

export default Tempo;
