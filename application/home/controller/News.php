<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/2/2
 * Time: 9:16
 */

namespace app\home\controller;


class News extends Common
{

    private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('news');
    }
    public function index(){
        $newsData =$this->model->getNewsIndexData();
        return $this->fetch('news',[
            'newsData' => $newsData
        ]);
    }
}