import { request } from './request'

// 选择产商品的状态
export function checkedCard(data) {
    return request({
        url: '/api/carts/checked',
        method: 'PATCH',
        data
    })
}
// 添加到购物车
export function addCart(data) {
    return request({
        url: '/api/carts',
        method: 'POST',
        data
    })
}

// 获得购物车
export function getCart(data = '') {
    return request({
        url: '/api/carts?' + data,
    })
}

// 删除购物车
export function deleteCartItem(id) {
    return request({
        url: `/api/carts/${id}`,
        method: 'DELETE',
    })
}

// 修改购物车
export function modifyCart(id, data) {
    return request({
        url: `/api/carts/${id}`,
        method: 'PUT',
        data
    })
}

