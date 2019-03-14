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
use app\common\model\Column;

class Index extends Common
{
    public function index(){
        $bannerData = BannerItem::getIndexBanner();
        $resProData = Product::getRescPro();
        $resColumnData = Column::getIndexResc();
        $proCate = new Procate();
        $proCateData = $proCate->getCateJson();

        return $this->fetch('',[
            'bannerData' => $bannerData,
            'resProData' => $resProData,
            'resColumnData' => $resColumnData,
            'cateData' => $proCateData
        ]);
    }
}
