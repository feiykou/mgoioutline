<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/10/12
 * Time: 9:53
 */

namespace app\home\controller;


use app\common\model\Procate;
use think\Controller;

class Contact extends Common
{
    public function contact(){
        $proCate = new Procate();
        $proCateData = $proCate->getCateJson();
        $newsData = model('news')->getAllNewsData();
        return $this->fetch('',[
            'cateData' => $proCateData,
            'newsData' => $newsData
        ]);
    }
}