// redirect current user to login page if not logged
export const admUserLoginRedirect = async (req, res) => {
  if(!req.headers.cookie) {
    res.writeHead(302, { Location: '/admin' });
    res.end();

    return true;
  }

  return false;
}
