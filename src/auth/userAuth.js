import userApi from '../api/userApi'

const userAuth = {
    isAuthenticated: false,

    authenticate(callback){
        this.isAuthenticated = true;

        callback(); // run passed callback
    },

    signout(callback){
        this.isAuthenticated = false;
        userApi.signout();

        callback(); // run passed callback
    }
}

export {userAuth}