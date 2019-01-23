<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/3 0003
 * Time: 下午 16:05
 */

namespace app\admin\validate;


class Product extends BaseValidate
{
    protected $rule = [
        ['id', 'require|isPositiveInteger'],
        ['name', 'require', '产品名必须填写'],
        ['main_img_url','require','缩略图必须添加'],
        ['imgs_url','require','产品图必须添加'],
        ['mobile_imgs_url','require','移动端产品图必须添加'],
        ['code_img','require','二维码必须添加'],
        ['price','require|float','价格必须添加'],
        ['market_price','require|float','市场价必须添加'],
        ['link_url', 'require|url', '链接必须添加'],
        ['cate_id', 'require|isPositiveInteger','分类必须添加'],
        ['status', 'number|in:-1,0,1', '状态必须是数字|状态范围不合法']
    ];

    /** 场景 **/
    protected $scene = [
        'add'         => ['name','main_img_url','cate_id','imgs_url','mobile_imgs_url','code_img','price','market_price','link_url'],
        'status'      => ['id','status']
    ];
}