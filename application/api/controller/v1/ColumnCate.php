<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-05-11
 * Time: 17:20
 */

namespace app\api\controller\v1;


use app\api\controller\BaseController;

class ColumnCate extends BaseController
{
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('column_cate');
    }

    public function getColumnCateById($id){
        if(intval($id) <= 0) return;
        $cateData = $this->model->getCateById($id);
        return $cateData;
    }
}