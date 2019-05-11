<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-05-04
 * Time: 23:39
 */

namespace app\api\controller\v1;


use app\api\controller\BaseController;
use app\common\model\Procate;

class Cate extends BaseController
{

    private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('procate');
    }


    public function getAllCate(){
        $proCateData = $this->model->getCateJson();
        return $proCateData;
    }

    public function getTopCate(){
        $cateData = $this->model->getTopCate();
        return $cateData;
    }

    public function getSonById($id){
        if(intval($id) <= 0) return;
        $cateData = $this->model->getSonCate($id);
        return $cateData;
    }

}