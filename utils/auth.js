export const isUserLoggedIn = () => {
  const token = localStorage.getItem('jwt');

  // transformación a boolean
  return !!token;
}