import fetchData from '../utils/fetchData';

const usePost =(url)=>{

  const submitLogin = async(value, reset, history)=>{
    const {data} = await fetchData.post(url, value);
    const {token} =data;
    localStorage.setItem("tkn", token)
    reset();
    setTimeout(() => {
      history.replace("/")
    }, 500);
  }

   
    const submitSignUp =(value, reset, history)=>{
        fetchData.post(url, value)
        .then((response) => {
            console.log(response);
            reset();
            setTimeout(() => {
              history.push("/login");
            }, 2000);
          })
          .catch((err) => console.log(err));
    }
    
    return {submitSignUp, submitLogin};
}

export default usePost;