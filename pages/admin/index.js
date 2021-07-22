//const {getCurrentUser} = require('../../src/core/firebase/auth');

function Admin(props) {
  return (
    <>
    </>
  )
}

Admin.getInitialProps = async ({req, res}) => {
  if(!req.headers.cookie) {
    res.writeHead(302, { Location: '/admin/login' });
  } else {
    res.writeHead(302, { Location: '/admin/dashboard' });
  }
  res.end();

  return { };
}

export default Admin;
