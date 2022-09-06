class GoodsController {
    async upload(ctx, next) {
        ctx.body = '上传商品图片成功'
    }
}
module.exports = new GoodsController()