<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/7/31 0031
 * Time: 下午 15:46
 */

namespace app\home\controller;


use app\common\model\Procate;
use app\home\model\BannerItem;
use app\common\model\Product;

class Index extends Common
{
    public function index(){
        $cateData = Procate::getIndexCateProduct();
        $bannerData = BannerItem::getIndexBanner();
        $resProData = Product::getRescPro();
        return $this->fetch('',[
            'cateData' => $cateData,
            'bannerData' => $bannerData,
            'resProData' => $resProData
        ]);
    }
}
