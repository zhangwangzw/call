import {service} from "./request.js"

export function getHome(){
    return service({
        url:'/home/multidata'
    })
}



