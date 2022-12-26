import { $authHost } from "./index"

export const addToBasket = async (itemId) => {
    const {response} = await $authHost.post('api/basket', itemId)
    return response
}

export const getBasket = async (id) => {
    const {data} = await $authHost.get('api/basket/' + id)
    return data
}