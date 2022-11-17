import Axios from 'axios';

const getCourses = (year, semester) => async () => {
    try {

      const { data } = await Axios.get('http://localhost:5000/api/users/course/get', { year, semester });
     window.alert(data)
      const courseInfo = JSON.stringify(data);
  
    if(courseInfo){
        return courseInfo;
    }
       
      
    } catch (error) {
    
      console.log(error.message)
      return error
    }
  };


  export default getCourses

  