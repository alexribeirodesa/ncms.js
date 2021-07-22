/*
import {useForm} from 'react-hook-form';

function FileUploadForm() {
  const formSubmit = async event  => {
    event.preventDefault();
    const res = await fetch( `/api/imageUpload`, {
      body: JSON.stringify({
        method: 'POST',
        body: blob  
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json();
  }

	return (
    <form onSubmit={formSubmit}>
      <p>Origem: <input type="file" name="file" /></p>
      <p>Destino: <input type="text" namr="text" /></p>
      <p><button type="submit">Enviar</button></p>
    </form>
	)
}

function Google(props) {
	return (
		<div>
			<h1>Google Cloud Storage Test</h1>
      <div className="App">
        <FileUploadForm />
      </div>
		</div>
	)
}

export default Google;
*/


import {useForm} from 'react-hook-form';

function FileUploadForm() {
  const {register, handleSubmit} = useForm();
  
	return (
    <form onSubmit={handleSubmit(async (data) => {
      alert(JSON.stringify(data));

      /*const res = await fetch( `/api/imageUpload`, {
        body: JSON.stringify({
          method: 'POST',
          //body: blob
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })*/

      /*const CDN = require('../src/addon/CDN');
      let x = new CDN('dialoga-storage', 'dialoga-studio');
      x.uploadFile('C:/Users/alexa/Desktop/pixelfrito_home.jpg', 'projeto/home_b.jpg');*/
    })}>
      <p>Origem: <input {...register('file')} type="file" name="file" /></p>
      <p>Destino: <input {...register('text')} type="text" namr="text" /></p>
      <p><button type="submit">Enviar</button></p>
    </form>
	)
}

function Google(props) {
	return (
		<div>
			<h1>Google Cloud Storage Test</h1>
      <div className="App">
        <FileUploadForm />
      </div>
		</div>
	)
}


export async function getStaticProps() {
  let gcOut = 1;

	return {
		props: {
			gcOut
		},
		revalidate: 3600
	}
}

export default Google;