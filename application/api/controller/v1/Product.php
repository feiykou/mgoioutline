<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-05-04
 * Time: 23:32
 */

namespace app\api\controller\v1;


use app\api\controller\BaseController;

class Product extends BaseController
{
    private $model;
    public function _initialize()
    {
        $this->model = model('product');
    }

    public function lst($cate_id=0){
        if($cate_id == 0){
            $products = $this->model->getAllProData();
        }else{
            $products = model('procate')->getProductByClumn($cate_id);
        }
        return $products;
    }
}