import Seo from '../src/components/Seo';
import Head from '../src/components/Head';
import Navbar from '../src/components/Navbar';
import Header from '../src/components/Header';
import Section from '../src/components/Section';
import PhotoItem from '../src/patterns/Item/photoitem';
import BlogItem from '../src/patterns/Item/blogitem';
import {userstate, useState} from 'react';

function HelloWorld() {
	return <h2>hello world!</h2>
}

function Caps(props) {
	const text = props.children;
	const textUpperCase = text.toUpperCase();
	return <div>{textUpperCase}</div>
}

function Counter() {
	const [value, setValue] = useState(1);

	function addCounter() {
		setValue(value+1);
	}

	return (
		<div>
			<div>{value}</div>
			<button onClick={addCounter}>+</button>
		</div>
	)
}

function Home() {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Seo title="Isso é um valor dinamico :3" />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="https://gmpg.org/xfn/11"></link>
        <script src="https://kit.fontawesome.com/d435be3cbe.js" crossOrigin="anonymous"></script>
        <link href="https://fonts.gstatic.com" rel="preconnect"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Wire+One&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      </Head>

			<Navbar />
			<Header src="/assets/header.jpg" href="" fullscreen="true" />
			
			{/* APRESENTAÇÃO */}
			<Section title="Ainda Irrelevante">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac volutpat ante. Maecenas molestie sapien sem. Suspendisse eros erat, pulvinar in cursus a, pellentesque a dolor. Suspendisse pharetra arcu ac faucibus consectetur. Suspendisse potenti. Fusce placerat consequat augue id vehicula. Morbi vehicula nulla sit amet condimentum pellentesque. Nam a nulla tellus. In eget dignissim sapien, non vehicula metus. Phasellus in tellus eleifend, euismod lorem et, vestibulum dui. Donec bibendum ante ipsum, eu dictum lectus laoreet ac. Nunc at urna sit amet augue tincidunt bibendum a ac nisi. Nam pellentesque fringilla quam ac ullamcorper. Nullam eu pellentesque ante, sed lacinia lorem.</p>
			</Section>

			{/* PORTFOLIO */}
			<Section className="portfolio" title="Portfolio">
				<PhotoItem className="col-6 col-md-4 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-6 col-md-4 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-6 col-md-4 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-6 col-md-4 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-6 col-md-4 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-6 col-md-4 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
			</Section>
			
			{/* BLOG */}
			<Section className="blog" title="Blog">
				<BlogItem className="col-6 col-md-4 mb-4" profile="https://thispersondoesnotexist.com/image" src="" href="" time="123" title="Title 1">lorem ipsum dolor sit amet, consectetur adipiscing elit.</BlogItem>
				<BlogItem className="col-6 col-md-4 mb-4" profile="https://thispersondoesnotexist.com/image" src="https://thisartworkdoesnotexist.com/" href="" time="123" title="Title 2">urere</BlogItem>
				<BlogItem className="col-6 col-md-4 mb-4" profile="https://thispersondoesnotexist.com/image" src="" href="" time="123" title="Title 3">urere</BlogItem>
				<BlogItem className="col-6 col-md-4 mb-4" profile="https://thispersondoesnotexist.com/image" src="https://thisartworkdoesnotexist.com/" href="" time="123" title="Title 4">urere</BlogItem>
				<BlogItem className="col-6 col-md-4 mb-4" profile="https://thispersondoesnotexist.com/image" src="" href="" time="123" title="Title 5">urere</BlogItem>
				<BlogItem className="col-6 col-md-4 mb-4" profile="https://thispersondoesnotexist.com/image" src="https://thisartworkdoesnotexist.com/" href="" time="123" title="Title 6">urere</BlogItem>
			</Section>

			{/* INSTAGRAM */}
			<Section className="instagram" title="">
				<PhotoItem className="col-4 col-md-4 col-lg-2 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-4 col-md-4 col-lg-2 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-4 col-md-4 col-lg-2 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-4 col-md-4 col-lg-2 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-4 col-md-4 col-lg-2 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
				<PhotoItem className="col-4 col-md-4 col-lg-2 mb-4" src="https://thisartworkdoesnotexist.com/" href="" />
			</Section>

			{/* LOJAS */}
			<Section className="clients" title=""></Section>

			<HelloWorld />
			<Caps>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget posuere quam, sed sodales odio. Phasellus justo metus, consequat in massa ac, consectetur consequat erat. Mauris diam orci, rutrum ut nisl nec, laoreet tristique lorem. Cras ac nibh eu nisi elementum tincidunt. Donec dapibus imperdiet blandit. Vivamus tincidunt sagittis libero, id rutrum nulla congue vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed pretium nec quam a imperdiet. In hac habitasse platea dictumst. Etiam vehicula fringilla erat, sit amet eleifend purus scelerisque sit amet. Mauris commodo orci sapien. Maecenas vitae tellus nisl. Donec risus neque, vulputate vel aliquam id, volutpat eu tellus. Curabitur enim tortor, gravida pellentesque purus eu, auctor rhoncus diam. Nam a vehicula ipsum, id mollis mauris. Fusce molestie semper ex quis dictum.
				Fusce cursus nunc non turpis porttitor, sed fermentum dui porttitor. Integer rhoncus nisl sed neque pulvinar, vel pretium elit rhoncus. Donec volutpat blandit magna id varius. Phasellus ac leo dapibus, posuere neque eu, consectetur nisi. Nullam vitae porta tortor, at pretium tortor. Vivamus bibendum enim lorem, eu sollicitudin libero sagittis ut. Etiam viverra neque vitae convallis ornare. Vivamus pulvinar metus eu libero vehicula, a sagittis justo congue. Mauris suscipit ultricies dapibus. Maecenas a hendrerit ligula, eget fringilla magna. Morbi nec libero non metus fringilla pulvinar. Sed dictum condimentum augue eu condimentum. Donec ut mollis quam.
				Nulla feugiat, ligula id rhoncus tempus, eros libero imperdiet quam, a mollis purus tortor at nunc. Proin dictum ante vitae nunc ultricies facilisis. Nam turpis turpis, vestibulum id laoreet at, feugiat in velit. Praesent a condimentum odio. Quisque nec luctus dui, in congue lectus. Nunc auctor nulla in interdum blandit. Duis pellentesque tincidunt volutpat. Sed risus eros, molestie et tempor ut, tincidunt sed justo. Sed hendrerit, purus nec lobortis rutrum, risus ligula sodales magna, nec lobortis urna lorem a velit.
				Vivamus auctor elit eget imperdiet imperdiet. Suspendisse potenti. Nunc placerat libero nibh, eu aliquam augue feugiat sed. Ut mollis, tortor et feugiat laoreet, mi arcu sagittis mi, eget accumsan sapien velit sed leo. Curabitur vel venenatis erat, in facilisis mauris. Phasellus vestibulum porta lacus at convallis. Duis odio nibh, viverra aliquam egestas vitae, efficitur vitae magna. Suspendisse potenti. Duis elementum, ex ut pulvinar lacinia, dui dui egestas augue, pulvinar auctor mi lorem vel ipsum. Quisque iaculis gravida porttitor. Morbi sed mi at ipsum ullamcorper tincidunt rhoncus semper mauris. Phasellus dictum luctus sollicitudin. Aliquam id vestibulum neque. Vivamus a orci diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id sollicitudin diam, vitae ultricies leo.
				Maecenas pharetra purus orci, et dapibus leo congue quis. Proin congue quis libero in gravida. Aliquam sit amet libero non felis aliquet faucibus dictum eu risus. Integer in tristique justo. Nam eu euismod lectus. Praesent ac ligula congue, vehicula tellus non, accumsan ipsum. Nulla facilisi.
			</Caps>
			<Counter />
		</div>
	)
}

export default Home
