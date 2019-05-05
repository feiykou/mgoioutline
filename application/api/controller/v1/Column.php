<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-05-04
 * Time: 21:55
 */

namespace app\api\controller\v1;


use app\api\controller\BaseController;
use app\common\model\Column as ColumnModel;
use app\common\model\ColumnCate;

class Column extends BaseController
{
    private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('column');
    }

    public function detail($id){
        if(intval($id) <= 0) return;
        $detailData = $this->model->getNewsData($id);
        return $detailData;
    }

    public function getColumnByCateId($cate_id=0){
        $data = ColumnModel::getNewsIndexData($cate_id);
        return $data;
    }

    public function getTopCate(){
        $cate = ColumnCate::getTopCate();
        return $cate;
    }
}