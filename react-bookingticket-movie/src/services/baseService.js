import axios from "axios";
import {DOMAIN,TOKEN} from '../util/settings/config'

export class baseService {
    //put json về phía backend
    put = (url,model) => {
        return  axios({
            url:`${DOMAIN}${url}`,
            method:'PUT',
            data:model,
            headers: {'TokenCybersoft': TOKEN} //JWT
        }) 
    }

    post = (url,model) => {
        return axios({
            url:`${DOMAIN}${url}`,
            method:'POST',
            data:model,
            headers: {'TokenCybersoft': TOKEN} //JWT
        }) 
    }


    get = (url) => {
        return axios({
            url:`${DOMAIN}${url}`,
            method:'GET',
            headers: {'TokenCybersoft': TOKEN}
        })
    }

    delete = (url) => {
        return axios({
            url:`${DOMAIN}${url}`,
            method:'DELETE',
            headers: {'TokenCybersoft': TOKEN} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}