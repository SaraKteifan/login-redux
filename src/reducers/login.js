import axios from "axios";

let user ='';
const loginReducer=(state={error:''},action)=>{


    switch(action.type){
        
        case "emailORUsername":
            if(action.emailORUsername !==''){
                return {...state,emailORUsername:action.emailORUsername};
            }
            break;
        case "password":
            if(action.password !==''){
                return {...state, password:action.password}
            }
            break;
        case "LOGIN":
                const loadInfo = async () => {
                const res = await axios.get('http://localhost/login-redux/backend/login.php?email='+state.emailORUsername+'&username='+state.emailORUsername+'&password='+state.password);
                sessionStorage.clear()
                sessionStorage.setItem("user_info", res.data);
                console.log(res.data);
                let user_info= sessionStorage.getItem("user_info");

                if(user_info != ''){
                    window.location.href = "/Home";
                }
                return {...state, error: 'Username/ email or password is invalid'}
            
  
            };
            loadInfo();
            
            
        default:
            return state;
    }
    
    
    
}
export default loginReducer;