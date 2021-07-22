import Seo from '../../../../src/components/Seo';
import Head from '../../../../src/components/Head';

function AdminHead(props) {
	return (
		<>
			<Seo title={`Dialoga CMS | ${props.title}`} />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='profile' href='https://gmpg.org/xfn/11' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://use.fontawesome.com/releases/v5.0.2/css/all.css' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito:wght@200;700;800&family=Roboto&display=swap' rel='stylesheet' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl' crossOrigin='anonymous' />
      </Head>
		</>
	)
}

export default AdminHead
