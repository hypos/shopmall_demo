import { request } from "./request"

// 创建订单
export function createOrder(data) {
    return request({
        url: "/api/orders",
        method: "POST",
        data
    })
}

// 获取订单预览
export function getOrderPreview() {
    return request({
        url: "/api/orders/preview",
    })
}

// 支付订单
export function payOrder(order, params) {
    return request({
        url: `/api/orders/${order}/pay`,
        params
    })
}

// 获取支付订单的状态
export function getPayOrderStatus(order) {
    return request({
        url: `/api/orders/${order}/status`,
    })
}

// 获取订单详情
export function getOrderDetail(order) {
    return request({
        url: `/api/orders/${order}`,
        params: {
            include: 'user,orderDetails.goods'
        }
    })
}

// 获取订单列表
export function getOrderList(params) {
    return request({
        url: `/api/orders`,
        params
    })
}

export function confirmOrder(order) {
    return request({
        url: `/api/orders/${order}/confirm`,
        method: 'PATCH',
    })
}

// 获取物流详情
export function getViewExpress(order) {
    return request({
        url: `/api/orders/${order}/express`,
    })
}
