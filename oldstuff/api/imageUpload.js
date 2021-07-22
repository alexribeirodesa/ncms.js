const CDN = require('../../src/addon/CDN');

function imageUpload() {
  console.log("QQER MEDIOCRE PEGA INVESTIMENTO E INCUBADORA!!");
  
  let x = new CDN('dialoga-storage', 'dialoga-studio');
  x.uploadFile('C:/Users/alexa/Desktop/pixelfrito_home.jpg', 'projeto/home_c.jpg');

	return (
    <div>
      <p>image upload</p>
    </div>
  )
};

export default imageUpload;