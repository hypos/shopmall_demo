import { request } from './request'


export function addAddress(data) {
    return request({
        url: '/api/address',
        method: 'POST',
        data
    })
}
export function delAddress(id) {
    return request({
        url: `/api/address/${id}`,
        method: 'delete',
    })
}
export function editAddress(id, data) {
    return request({
        url: `/api/address/${id}`,
        method: 'PUT',
        data
    })
}

export function getAddressList() {
    return request({
        url: '/api/address',
    })
}

export function getAddressDetail(id) {
    return request({
        url: `/api/address/${id}`,
    })
}