<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/8 0008
 * Time: 下午 20:22
 */

namespace app\common\model;


use think\Model;

class News extends Model
{

    protected $hidden = [
        'delete_time','create_time','update_time','status','column_id','listorder','click_num'
    ];

    protected function getMainImgUrlAttr($val,$data){
        return $this->handleImgUrl($val);
    }
    protected function getMobileImgsUrlAttr($val,$data){
        return $this->handleImgUrl($val);
    }

    private function handleImgUrl($val){
        $val = str_replace('\\','/',$val);
        return explode(';',$val);
    }


    public function getAllNewsData(){
        $data['status'] = ['neq',-1];
        $order = [
            'listorder' => 'desc',
            'id'        => 'desc',
        ];
        $result = self::where($data)
            ->order($order)
            ->select();
        return $result;
    }



    // 判断是否存在同名
    public function is_unique($name="",$id=0){
        $data = [
            'status'    => ['neq',-1],
            'id'        => ['neq',$id],
            'name'      => $name
        ];
        $result = $this->where($data)->find();
        return $result;
    }
    // 删除元素
    public function delSelChild($idArr=[]){
        $data = [
            'id' => ['in',$idArr]
        ];
        $result = $this->where($data)->update(['status'=>-1]);
        db('product_prop')->where(['product_id'=>['in',$idArr]])->delete();
        return $result;
    }


    /**
     * 前端和后台公用
     */
    public function getNewsData($id=0, $mark=false){
        $data = [
            'id'     => $id
        ];
        if($mark){
           $data['status'] = 1;
        }
        $proData = self::where($data)->find();
        return $proData;
    }



    /**
     * 前台数据调用
     */

    public function getNewsIndexData(){
        $data = [
            'status' => 1
        ];
        $newsData = self::where($data)->order('update_time desc')->select();
        return $newsData;
    }


}