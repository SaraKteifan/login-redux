import axios from "axios";

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
            axios.get('http://localhost/login-redux/backend/login.php?email='+state.emailORUsername+'&username='+state.emailORUsername+'&password='+state.password).then(res => {
                sessionStorage.setItem("user_info", res.data);
              })
            let user_info= sessionStorage.getItem("user_info");
            if(user_info){
                console.log(true);
            }else{
                console.log(false);
            }
            // if(user_info != ''){
            //     window.location.href = "/Home";
            // }else{
            //     return {...state, error: 'Username/ email or password is invalid'}
            // }
        default:
            return state;
    }
    
    
    
}
export default loginReducer;