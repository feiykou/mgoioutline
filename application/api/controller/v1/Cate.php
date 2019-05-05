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
    public function getAllCate(){
        $proCate = new Procate();
        $proCateData = $proCate->getCateJson();
        return $proCateData;
    }
}