<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/12
 * Time: 9:53
 */

namespace app\home\controller;


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

    public function product(){
        $products = $this->model->getCateProducts();
//        $rescPros = $this->model->getRescPro(3);
        $this->assign([
            'productsData'=> $products
        ]);
        return $this->fetch();
    }

    public function detail($id){
        if(intval($id) <= 0) return;
        $productData = $this->model->getProAndPropData($id);
        $rescData = $this->model->getRescPro(4);
        return $this->fetch('',[
            'productData' => $productData,
            'rescData' => $rescData
        ]);
    }
}