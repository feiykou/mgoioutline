<?php

namespace app\home\controller;
use app\common\model\ColumnCate;

class Column extends Common
{
	private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('column');
    }
    public function index($cate_id=0){
        $newsData =$this->model->getNewsIndexData($cate_id);
        $sonCateData = ColumnCate::getSonData($cate_id);
        $curentCate = model('column_cate')->getCateById($cate_id);
        $cate = new ColumnCate();
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
        $cate = new ColumnCate();
        $cateData = $cate->getCateJson();
        return $this->fetch('',[
            'detailData' => $detailData,
            'cateData' => $cateData
        ]);
    }

    public function cate($cate_id){
        if(intval($cate_id) <= 0) return;
        $products = $this->model->getNewsIndexData($cate_id);
        return json($products);
    }
}