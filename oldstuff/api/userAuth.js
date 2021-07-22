 /**
  * @fileoverview api/userAuth.js
  * @author Alexandre Ribeiro de Sá (@alexribeirodesa)
  * 
  * user authentication api
  * POST https://www.dialogastudio.com.br/api/userAuth -data {email: user email address&password: user password&hash: data hash},
  * OUT {status:success}/{status:err, code:#}
  */

export const config = {
  api: {
    bodyParser: true,
  },
}

export default async (req, res) => {
  //console.log('entrou');
  //console.log(JSON.stringify(req.body));
  //req.query

  //console.log(JSON.stringify(res));
  /*const form = new formidable.IncomingForm();
  form.uploadDir = "./";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });*/
  //res.status(200).send(req.body);
  res.status(200).send("{status:success}");
};