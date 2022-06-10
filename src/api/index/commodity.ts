import { RequestInstance, RequestParam } from "../../network"

export const showNewsCommodity = (params?: any) => {
    return RequestParam.request({
        url: '/getImg',
        method: 'Get',
        params: params
    })
} 
    