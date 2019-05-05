<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-04-17
 * Time: 21:30
 */

namespace app\api\controller;


use app\common\model\Procate;
use think\Controller;

class BaseController extends Controller
{
    /**
     *
     * @url /cate/second
     * @http
     * @return false|null|\PDOStatement|string|\think\Collection
     */
    public function cate(){
        $proCate = new Procate();
        $indexCateData = $proCate->getSecondCate();
        return $indexCateData;
    }
}