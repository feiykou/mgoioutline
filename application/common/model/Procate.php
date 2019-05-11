<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/7
 * Time: 11:03
 */

namespace app\common\model;


use catetree\Catetree;
use think\Model;

class Procate extends Model
{
    protected $hidden = [
        'create_time','update_time'
    ];

    protected function getImgUrlAttr($val,$data){
        return $this->handleImgUrl($val);
    }

    private function handleImgUrl($val){
        $val = str_replace('\\','/',$val);
        $arr = explode(';',$val);
        foreach ($arr as &$item){
            $item = config('APISetting.img_prefix').$item;
        }
        return $arr;
    }

    protected function productCate(){
        return $this->belongsToMany('product','product_cate','product_id','cate_id');
    }

    // 获取产品子栏目产品
    public function getProductByClumn($cateId){
        $data = [
            'status' => 1
        ];
        $order = [
            'listorder' => "desc",
            'id'        => "desc"
        ];
        $result = Procate::get($cateId)->productCate()->where($data)->order($order)->select();
        return $result;
    }


    public function getAllCateData(){
        $cateData = self::alias('a1')
            ->field('a1.*,a2.name as pname')
            ->where(['a1.status'=>1])
            ->order([
                'a1.listorder'=>'desc',
                'a1.id' => 'desc'
            ])
            ->join('procate a2','a1.pid=a2.id','left')
            ->select();
        return $cateData;
    }

    /**
     * 获取当前id的父级元素和其他元素
     * @param $id
     * @return mixed
     */
    public static function getCateData($id=-1){
        $model = new self();
        $data = [
            'status' => 1
        ];
        $ModelDatas = $model->where($data)->select();

        $ids = "";
        if($id != -1){
            $sonDatas = sortData($ModelDatas,$id);
            foreach ($sonDatas as $key=>$value){
                $ids.= $value['id'].',';
            }
            $ids .= trim($id);
            $parentDept = $model->where(["id"=>['not in',$ids],'status'=>1])->select();
        }else{
            $parentDept = $ModelDatas;
        }
        // 排除id字符串的两种方式
        if(!$parentDept){
            return false;
        }else{
            // 对部门进行重新排序
            $parentSortDept = sortData($parentDept);
        }
        return $parentSortDept;
    }

    public function getChildCateIds($id=-1){
        $data = [
            'status' => 1
        ];
        $ModelDatas = self::where($data)->select();
        $ids = "";
        if($id != -1){
            $sonDatas = sortData($ModelDatas,$id);
            foreach ($sonDatas as $key=>$value){
                $ids.= $value['id'].',';
            }
            $ids .= trim($id);
        }
        return $ids;
    }

    public function getCateById($id=0){
        $data = [
            'status' => 1,
            'id'     => $id
        ];
        $modelDatas = self::where($data)->find();
        return $modelDatas;
    }

    // 判断是否存在同名
    public function is_unique($name="",$id=0){
        $data = [
            'status'    => 1,
            'id'        => ['neq',$id],
            'name'      => $name
        ];
        $result = $this->where($data)->find();
        return $result;
    }

    // 判断当前id是否存在子类
    public function is_child($id=-1){
        if(is_numeric($id)){
            $id = [$id];
        }
        $data = [
            "pid"  => ['in',$id],
            'status' => 1
        ];
        $result = self::where($data)->find();

        return $result;
    }

    public function delSelChild($idArr=[]){
        $data = [
            'id' => ['in',$idArr]
        ];
        $result = $this->where($data)->update(['status'=>0]);
        return $result;
    }

    public function is_exist_pro($id){
        if(is_numeric($id)){
            $id = [$id];
        }
        $data = [
            'status'      => ['neq',-1],
            'pro_cate_id' => ['in',$id]
        ];
        $result = \model('product')->where($data)->find();
        return $result;
    }


    /**
     * 获取home数据
     */
    public static function getIndexCateProduct(){
        $data = [
            'status'    =>  1,
            'pid' =>  0,
        ];
        $order = [
            'listorder' => 'desc',
            'id'        => 'desc'
        ];
        $column =self::where($data)->order($order)->field('id,name')->select();
        $cateData = [];
        foreach ($column as $key => $val){
            $tempData = [];
            $result = Product::getProductByCate($val['id']);
            if($result){
                $tempData['data'] = $result;
                $tempData['name'] = $val['name'];
                array_push($cateData,$tempData);
            }

        }
        return $cateData;
    }

    /**
     *  获取顶级分类
     */
    public function getTopCate(){
        $data = [
            'status'    =>  1,
            'pid' =>  0,
        ];
        $order = [
            'listorder' => 'desc',
            'id'        => 'desc'
        ];
        $column =self::where($data)->order($order)->field('id,name,img_url')->select();
        return $column;
    }

    public static function getCateJson(){
        $cateTree = new Catetree();
        $data = $cateTree->cateData(new self());
        return $data;
    }

    /*
     * 获取分类信息  --- 多个分类
     */
    private static function _getSelCate($ids=[]){
        $data = self::where('status','=','1')
            ->field('id,name,img_url')
            ->order([
                'listorder' => 'desc',
                'id' => 'desc'
            ])->select($ids);
        return $data;
    }

    /**
     * 获取顶级分类下的子类 -- 一级
     */
    private static function _getSonBypid(){
        $order = [
            'listorder' => 'desc',
            'id' => 'desc'
        ];
        $parentId = self::where([
            'pid' => 0,
            'status' => 1
        ])->order($order)
          ->field('id')
          ->select();
        return $parentId;
    }

    public static function getSonData($cateId){
        $cateTree = new Catetree();
        $ids = $cateTree->sonids($cateId, new self());

        $data = null;
        if(count($ids) > 0){
            $data = self::_getSelCate($ids);
        }
        return $data;
    }

    // 获取当前分类的下级分类
    public static function getSonCate($cateId){
        $order = [
            'listorder' => 'desc',
            'id' => 'desc'
        ];
        $result = self::where([
            'pid' => $cateId,
            'status' => 1
        ])->order($order)
            ->field('id,name,img_url')
            ->select();
        return $result;

    }

    /*
     * 获取顶级分类下子类信息
     */
    public static function getSecondCate(){
        $cateTree = new Catetree();
        $parentId = self::_getSonBypid();
        $ids = [];
        foreach ($parentId as $cateId){
            if(!$cateId) break;
            $arr = $cateTree->sonids($cateId['id'], new self());
            if(count($arr) >= 1){
                $ids = array_merge($ids,$arr);
            }
        }

        $data = null;
        if(count($ids) > 0){
            $data = self::_getSelCate($ids);
        }
        return $data;
    }

    public static function getCrumb($cateId){
        $cateTree = new Catetree();
        $parentArr = $cateTree->parentids($cateId,new self());
        return $parentArr;
    }
}