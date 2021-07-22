/**
 * @fileoverview api/userAuth.js
 * @author Alexandre Ribeiro de Sá (@alexribeirodesa)
 * 
 * user authentication api
 * POST https://www.dialogastudio.com.br/api/user/auth -data {email: user email address&password: user password&hash: data hash},
 * OUT {status:success}/{status:err, code:#}
 */

const user = require('../../../src/core/user');
const usr = new user();

export const config = {
  api: {
    bodyParser: true,
  },
}

export default async (req, res) => {
  res.status(200).send(await usr.create(req.body.email, req.body.password));
};