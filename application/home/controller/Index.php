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
        // 首屏轮播
        $bannerData = BannerItem::getIndexBanner();
        // 首页推荐产品
        $resProData = Product::getRescPro();
        // 首页新品推荐产品
        $newsProData = Product::getRescPro(2);
        // 推荐专栏
        $resColumnData = Column::getIndexResc();
        // 分类
        $proCate = new Procate();
        $proCateData = $proCate->getCateJson();

        $indexCateData = $proCate->getSecondCate();

        return $this->fetch('',[
            'bannerData' => $bannerData,
            'resProData' => $resProData,
            'newsProData' => $newsProData,
            'resColumnData' => $resColumnData,
            'cateData' => $proCateData,
            'indexCateData' => $indexCateData
        ]);
    }
}
