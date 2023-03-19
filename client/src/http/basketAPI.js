import { $authHost } from "./index"

export const addToBasket = async (itemId) => {
    const {response} = await $authHost.post('api/basket', itemId)
    return response
}

export const getBasket = async (id) => {
    const {data} = await $authHost.get('api/basket/' + id)
    return data
}

export const deleteFromBasket = async ( id, itemInfo ) => {
    const {data} = await $authHost.delete('api/basket/' + id, { data: {itemId: itemInfo[0], size: itemInfo[1]}})
    return data
}

export const changeQuantity = async ( basketItem, quantity ) => {
    const {data} = await $authHost.put('api/basket/', {basketItem: basketItem, quantity: quantity})
    return data
}