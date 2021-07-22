export const mapUserData = (user) => {
  console.log(JSON.stringify(user));
  const {uid, email, xa, diplayName, photoUrl} = user;
  return {
    id: uid,
    email,
    token: xa,
    name: diplayName,
    profilePic: photoUrl,
  }
}