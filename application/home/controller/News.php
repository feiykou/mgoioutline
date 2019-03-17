<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/2/2
 * Time: 9:16
 */

namespace app\home\controller;


use app\common\model\NewsCate;

class News extends Common
{

    private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('news');
    }
    public function index($cate_id=0){
        $newsData =$this->model->getNewsIndexData($cate_id);
        $sonCateData = NewsCate::getSonData($cate_id);
        $curentCate = model('news_cate')->getCateById($cate_id);
        $cate = new NewsCate();
        $cateData = $cate->getCateJson();
        return $this->fetch('',[
            'newsData' => $newsData,
            'cateData' => $cateData,
            'sonCateData' => $sonCateData,
            'curentCate' => $curentCate,
        ]);
    }
    public function detail($id){
        if(intval($id) <= 0) return;
        $detailData = $this->model->getNewsData($id);
        $cate = new NewsCate();
        $cateData = $cate->getCateJson();
        return $this->fetch('',[
            'detailData' => $detailData,
            'cateData' => $cateData
        ]);
    }
    public function cate($cate_id){
        if(intval($cate_id) <= 0) return;
        $products = model('news')->getNewsIndexData($cate_id);
        return json($products);
    }
}