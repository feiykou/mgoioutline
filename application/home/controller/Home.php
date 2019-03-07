<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/7
 * Time: 11:52
 */

namespace app\home\controller;


use think\Controller;

class Home extends Controller
{
    public function index(){
        return $this->fetch();
    }
}