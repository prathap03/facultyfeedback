import Axios from 'axios';

const signin = (rollNo, password) => async () => {
    try {

      const { data } = await Axios.post('http://localhost:5000/api/users/signin', { rollNo, password });
     window.alert(data)
      localStorage.setItem('userInfo', JSON.stringify(data));
      const userInfo = JSON.stringify(data);
    if(userInfo){
        document.location.href = '/';
    }
      
    } catch (error) {
    
      console.log(error.message)
      return error
    }
  };


  export default signin

  