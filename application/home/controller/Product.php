<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/12
 * Time: 9:53
 */

namespace app\home\controller;


use app\common\model\Procate;
use think\Exception;
use think\Validate;

class Product extends Common
{
    private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('product');
    }

    public function lst($cate_id=0){
        $curentCate = [];
        if($cate_id == 0){
            $products = $this->model->getAllProData();
            $crumbData = [];
        }else{
            $products = model('procate')->getProductByClumn($cate_id);
            $curentCate = model('procate')->getCateById($cate_id);
            $crumbData = Procate::getCrumb($cate_id);
        }

        $sonCateData = Procate::getSonData($cate_id);
        $proCate = new Procate();
        $proCateData = $proCate->getCateJson();
        $this->assign([
            'productsData'=> $products,
            'sonCateData' => $sonCateData,
            'curentCate' => $curentCate,
            'cateData' => $proCateData,
            'crumbData' => $crumbData
        ]);
        return $this->fetch();
    }

    public function detail($id){
        if(intval($id) <= 0) return;
        $productData = $this->model->getProAndPropData($id);
        $rescData = $this->model->getRescPro(4);
        $proCate = new Procate();
        $proCateData = $proCate->getCateJson();
        return $this->fetch('',[
            'productData' => $productData,
            'rescData' => $rescData,
            'cateData' => $proCateData
        ]);
    }

    public function cate($cate_id){
        if(intval($cate_id) <= 0) return;
        $products = model('procate')->getProductByClumn($cate_id);
        return json($products);
    }
}