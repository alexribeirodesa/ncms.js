import NextHead from 'next/head';

function Seo(props) {
	let ogtype = props.og_type;
	if( !props.og_type ) {
		ogtype = "website";
	}
	
	return (
		<NextHead>
			{/* HTML TAGS */}
			<title>{props.title}</title>
			<meta name="description" content={props.description} />

			{/* OG TAGS */}
			<meta property="og:locale" content={props.og_locale} />
			<meta property="og:site_name" content={props.og_sitename} />
			<meta property="og:title" content={props.title} />
			<meta property="og:description" content={props.description} />
			<meta property="og:image" content={props.og_image} />

			<meta property="og:type" content={ogtype} />

			{ogtype !== "website" && (
				<>
				<meta property="article:author" content="Autor do artigo" />
				<meta property="article:section" content="Seção do artigo" />
				<meta property="article:tag" content="Tags do artigo" />
				<meta property="article:published_time" content="date_time" />
				</>
			)}
		</NextHead>
	)
}

export default Seo;