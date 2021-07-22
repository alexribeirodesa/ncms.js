import cookies from 'js-cookie'

export const getUserFromCookie = () => {
  const cookie = cookies.get('auth');
  if(!cookie) {
    return;
  }

  return JSON.parse(cookie);
}

export const setUserCookie = (user, expires=10) => {
  //expires = 0.00011;
  cookies.set('auth', user, {
    expires: expires,
  });
}

export const removeUserCookie = () => cookies.remove('auth');