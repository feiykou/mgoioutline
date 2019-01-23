<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/12 0012
 * Time: 下午 16:48
 */

namespace app\admin\model;


use think\Model;

class Property extends Model
{
// 通过id获取当前数据
    public function getPropById($id=0){
        $data = [
            'id' => $id
        ];
        return $this->where($data)
            ->find();
    }

    // 获取当前栏目下的所有子分类
    public function getAllData(){
        $order = [
            'id'        => 'desc'
        ];
        $result = $this->order($order)
            ->select();
        return $result;
    }

    // 判断是否存在同名
    public function is_unique($name="",$id=0){
        $data = [
            'id'        => ['neq',$id],
            'name'      => $name
        ];
        $result = $this->where($data)->find();
        return $result;
    }
}