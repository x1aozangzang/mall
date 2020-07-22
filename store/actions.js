export default {
    addcart(state, payload) {
        console.log(payload);
        //查找之前数组中是否有该商品
        const oldproduct = state.carlist.find(item => item.iid === payload.iid)
        if (oldproduct) {
            oldproduct.count += 1
        } else {
            payload.count = 1
            state.carlist.push(payload)
        }

    }
}