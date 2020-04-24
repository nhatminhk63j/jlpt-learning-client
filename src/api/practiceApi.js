import Api from './Api'

export default {
    getListPractice(path){
        return Api.get(path);
    },

    getPracticeExam(path){
        return Api.get(path);
    }
}