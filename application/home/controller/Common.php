<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/13 0013
 * Time: 下午 19:54
 */

namespace app\home\controller;


use think\Controller;

class Common extends Controller
{

    public function _initialize()
    {
        // 获取全部栏目数据
        $this->getNavCates();
        // 获取当前栏目id
        $this->getCateId();
        $this->getControllerName();
    }

    // 获取全部栏目数据
    public function getNavCates(){
        $columnData = model('category')->getAllColumn();
        $this->assign([
            'columnData'    => $columnData
        ]);
    }

    public function getControllerName(){
        $view = strtolower(request()->controller());
        $view = $view != 'index' ? $view : '/';
        $this->assign([
            'controllName' => $view
        ]);
    }

    // 获取当前栏目id
    public function getCateId(){
        $cate_id = input('param.columnId');
        if($cate_id){
            $result = db("category")->where('id','=',$cate_id)->find();
            if($result){
                $parent_id = $result['pid'];
            }else{
                $parent_id = 0;
            }
            $this->assign([
                'cur_cate_id'    => $cate_id,
                'parent_id'      => $parent_id
            ]);
        }else{
            $this->assign([
                'cur_cate_id' => 0,
                'parent_id' => null
            ]);
        }
    }


    // 获取友情链接
    public function getFrientLink(){
        $order = [
            'listorder' => 'desc'
        ];
        $result = db("frient_link")->order($order)->select();
        $this->assign('frient_link',$result);
    }

}