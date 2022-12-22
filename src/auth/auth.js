 function Admin() {
    const user = JSON.parse(localStorage.getItem('userAdmin'));
    if (user && user.access_token) {
      return { Authorization: 'Bearer ' + user.access_token };
    } else {
      return {};
    }
  }


  
   function user() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access_token) {
      return { Authorization: 'Bearer ' + user.access_token };
    } else {
      return {};
    }
  }


  const authHeader =
  {
    Admin,
    user,

  }
  export default authHeader;