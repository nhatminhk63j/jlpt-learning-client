import Api from './Api'

export default {
    login(user){
        const requestOptions = {
            headers: {
              'Content-Type': 'application/json'
            },
        };
        return Api.post('login', user, requestOptions);
    },

    logout(){
        localStorage.removeItem("token");
    },

    create(user){
        return Api.post('create', user);
    }
}