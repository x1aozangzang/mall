import { request2 } from './request'

export function getdetail(iid) {
    return request2({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
    return request2({
        url: '/recommend',
    })
}
//通过es6创建类的方法给数据创建一个类，在detail.vue里直接给这个类创建类的对象即可
export class GoodsInfo {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discount
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}


export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam {
    constructor(info, rule) {
        // 注: images可能没有值(某些商品有值, 某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}