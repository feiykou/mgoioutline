<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-05-04
 * Time: 23:32
 */

namespace app\api\controller\v1;


use app\api\controller\BaseController;
use app\common\model\Procate;

class Product extends BaseController
{
    private $model;
    public function _initialize()
    {
        $this->model = model('product');
    }

//    public function lst($cate_id=0){
//        if($cate_id == 0){
//            $products = $this->model->getAllProData();
//        }else{
//            $products = model('procate')->getProductByClumn($cate_id);
//        }
//        return $products;
//    }

    public function lst($cate_id=0){
        if($cate_id == 0){
            $products = $this->model->getAllProData();
        }else{
            $cate_ids = Procate::getAllCateById($cate_id);
            $productIdsArr = model('product_cate')
                ->where(['cate_id' => ['in',$cate_ids]])
                ->field('product_id')
                ->select();
            $ids = [];
            foreach ($productIdsArr as $data){
                array_push($ids,$data['product_id']);
            }
            $products = $this->model->getProByIds($ids);
        }
        return $products;
    }
}