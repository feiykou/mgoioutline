<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/8 0008
 * Time: 下午 20:22
 */

namespace app\common\model;


use catetree\Catetree;
use think\Model;

class Product extends Model
{
    protected $autoWriteTimestamp = 'datetime';

    protected $hidden = [
        'delete_time','create_time','update_time','status','cate_id','column_id','listorder','click_num'
    ];

//    public function procate(){
//        return $this->hasMany('procate','id','cate_id')->field('name');
//    }

    public function category(){
        return $this->belongsTo('category','column_id','id')->field('name');
    }

    public function product_prop(){
        return $this->hasMany('product_prop','product_id','id');
    }
    public function product_cate(){
        return $this->hasMany('product_cate','product_id','id');
    }

    public function prop(){
        return $this->hasMany('product_prop','product_id','id');
    }
    public function property(){
        return $this->belongsToMany('property');
    }
    protected function getImgsUrlAttr($val,$data){
        return $this->handleImgUrl($val);
    }
    protected function getMainImgUrlAttr($val,$data){
        return $this->handleImgUrl($val);
    }
    protected function getMobileImgsUrlAttr($val,$data){
        return $this->handleImgUrl($val);
    }
    protected function getCodeImgAttr($val,$data){
        return $this->handleImgUrl($val);
    }

    private function handleImgUrl($val){
        $val = str_replace('\\','/',$val);
        return explode(';',$val);
    }

    protected function getCateIdAttr($val,$data){
        return explode(',',$val);
    }

    protected static function init()
    {
        Product::afterInsert(function ($products){
            // 接收表单数据
            $productData = input('post.');
            if(isset($productData['prop_id']) && isset($productData['prop_value'])){
                $param = [];
                $data = [];
                foreach ($productData['prop_id'] as $key => $val){
                    $param['prop_id'] = $val;
                    $param['prop_value'] = $productData['prop_value'][$key];
                    $param['prop_name'] = $productData['prop_name'][$key];
                    $data[] = $param;
                }
                if(!$data) return;
                $products->product_prop()->saveAll($data);
            }
            if(isset($productData['cate_id'])){
                $cateId_arr = explode(',',$productData['cate_id']);
                $data = [];
                $param = [];
                foreach ($cateId_arr  as $val){
                    $param['cate_id'] = $val;
                    $data[] = $param;
                }
                $products->product_cate()->saveAll($data);
            }

        });

        Product::afterUpdate(function ($products){
            // 接收表单数据
            $productData = input('post.');
            $product_id = 0;
            if(isset($products['id'])){
                $product_id = $products->id;
            }
            if(isset($productData['prop_id']) && isset($productData['prop_value'])){
                $param = [];
                $data = [];
                db('product_prop')->where('product_id',$product_id)->delete();
                foreach ($productData['prop_id'] as $key => $val){
                    $param['prop_id'] = $val;
                    $param['prop_value'] = $productData['prop_value'][$key];
                    $param['prop_name'] = $productData['prop_name'][$key];
                    $data[] = $param;
                }
                if(!$data) return;
                $products->product_prop()->saveAll($data);
            }
            if(isset($productData['cate_id'])){
                $cateId_arr = explode(',',$productData['cate_id']);
                $data = [];
                $param = [];
                foreach ($cateId_arr  as $val){
                    $param['cate_id'] = $val;
                    $data[] = $param;
                }
                db('product_cate')->where('product_id',$product_id)->delete();
                $products->product_cate()->saveAll($data);
            }
        });

    }


    public function getAllProData($data=[]){
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
    public function getProData($id=0, $mark=false){
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
    protected function getNameAttr($val,$data){
        return explode(',', $val);
    }


    public function getProAndPropData($id=0){
        $data = [
            'id'     => $id,
            'status' => 1
        ];
        $proData = self::with('prop')->where($data)->find();
        return $proData;
    }

    public static function getProductByCate($cateid){
        $data = [
            'cate_id' => $cateid,
            'status' => 1
        ];
        $order = [
            'listorder'=>'desc',
            'id' => 'desc'
        ];
        $result = self::where($data)->order($order)->select();
        return $result;
    }

    // 获取推荐产品
    public static function getRescPro($rescId=1){
        $data = [
            'status' => 1
        ];
        $order = [
            'listorder' => 'desc',
            'id' => 'desc'
        ];
        $result = self::where($data)->where('','exp',"find_in_set($rescId,attributes)")->order($order)->select();
        return $result;
    }


    // 获取产品页推荐产品数据   attributes=2表示新品推荐
    public function getProMainData($cate_id=0){
        $data = [
            'status' => 1,
            '' => [
                'exp',"find_in_set('2',attributes)"
            ],
            'column_id'  => $cate_id
        ];
        $result = db('product')->where($data)->select();
        return $result;
    }

    // 获取热销产品
    public static function getHotProData(){
        $data = [
            'status' => 1,
        ];
        $result = self::where($data)->where('','exp',"find_in_set('2',attributes)")->where('','exp',"find_in_set('1',label_attr)")->select();
        return $result;
    }


    // 提供栏目id获取某个产品
    public function getProByColumn($column_id){
        $data = [
            'status'    => 1,
            'column_id' => $column_id
        ];
        $result =  db('product')->where($data)->find();
        return $result;
    }


    // 获取分类下的产品
    public function getCateProducts(){
        $data = [
            'c.status' => 1,
        ];
        $order = [
            'c.listorder' => "desc",
            'c.id'        => "desc"
        ];
        $result = db('procate')->alias('c')
            ->where($data)
            ->field('c.name as cateName,p.id,p.name,p.name_desc,p.introduce,p.main_img_url,p.price')
            ->join('product p',['c.id = p.cate_id','p.status = 1'])
            ->order($order)
            ->order('p.listorder desc')
            ->select();

        $productCateArr = [];
        if(!empty($result)){
            foreach ($result as $val){
                $productCateArr[$val['cateName']][] = $val;
            }
        }
        return $productCateArr;
    }



    // 获取产品子栏目产品
    public function getProductByClumn($cateId){
//        $cateTree = new Catetree();
//        $idArr = $cateTree->childrenids($cateId,model('procate'));
//        $idArr[] = $cateId;
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

}