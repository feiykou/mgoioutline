<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/4 0004
 * Time: 下午 16:51
 */

namespace app\admin\controller;

use app\admin\validate\Product as ProductValidate;

class Product extends Base
{
    private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('product');
    }

    public function index(){
        $data = input('get.');
        $sdata = [];
        // 时间条件范围
        if(!empty($data['start_time']) && !empty($data['end_time']) && strtotime($data['end_time']) > strtotime($data['start_time'])){
            $sdata['create_time'] = [
                ['gt',strtotime($data['start_time'])],
                ['lt',strtotime($data['end_time'])+10000]
            ];
        }
        if(!empty($data['pro_cate_id'])){
            $ids = model('procate')->getChildCateIds($data['pro_cate_id']);
            if($ids == ''){
                $ids .= $data['pro_cate_id'];
            }

            $sdata['pro_cate_id'] = [
                'in',$ids
            ];
        }

        if(!empty($data['name'])){
            $sdata['name'] = ['like','%'.$data['name'].'%'];
        }

        $proAllData = $this->model->getAllProData($sdata);
        $cateData = model('procate')->getCateData();
        $attrData = config('attributes.attribute_type');
        $labelsData = config('attributes.labels_type');

        return $this->fetch('',[
            'proAllData'   => $proAllData,
            'attrData'     => $attrData,
            'labelsData'  => $labelsData,
            'cateData'     => $cateData,
            'start_time'   => empty($data['start_time']) ? '' : $data['start_time'],
            'end_time'     => empty($data['end_time']) ? '' : $data['end_time'],
            'name'         => empty($data['name']) ? '' : $data['name'],
            'pro_cate_id'  => empty($data['pro_cate_id']) ? '' : $data['pro_cate_id']
        ]);
    }

    public function add(){
        (new ProductValidate())->goCheck('add');
        $cateData = model('procate')->getCateData();
        $columnSortData = model('category')->getColumnCate();
        $attrData = config('attributes.attribute_type');
        $labelsData = config('attributes.labels_type');
        $propData = model('property')->select();
        return $this->fetch('',[
            'cateData'       => $cateData,
            'attrData'       => $attrData,
            'labelsData'  => $labelsData,
            'columnSortData' => $columnSortData,
            'propData' => $propData
        ]);
    }

    public function save(){
        if(!request()->post()){
            $this->error("请求失败");
        }
//        $validate = (new ProductValidate())->goCheck('add');
//        if(!$validate['type']){
//            $this->result("",'0',$validate['msg']);
//        }
        // 获取请求数据
        $data = input('post.');
        $proData = [
            'name'           =>      $data['name'],
            'name_desc'      =>      $data['name_desc'],
            'introduce'      =>      $data['introduce'],
            'main_img_url'   =>      empty($data['main_img_url'])?'':$data['main_img_url'],
            'imgs_url'       =>      empty($data['imgs_url'])?'':$data['imgs_url'],
            'mobile_imgs_url'=>      empty($data['mobile_imgs_url'])?'':$data['mobile_imgs_url'],
            'code_img'       =>      empty($data['code_img'])?'':$data['code_img'],
            'keywords'       =>      $data['keywords'],
            'description'    =>      $data['description'],
            'content'        =>      empty($data['content'])?'':$data['content'],
            'slogan'        =>      empty($data['slogan'])?'':$data['slogan'],
            'attributes'     =>      keyInArray($data,'attributes')? implode(',',$data['attributes']):'',
            'label_attr'     =>      keyInArray($data,'label_attr')? implode(',',$data['label_attr']):'',
            'click_num'      =>      $data['click_num'],
            'column_id'      =>      $data['column_id'],
            'price'          =>      $data['price'],
            'market_price'   =>      $data['market_price'],
            'stock'          =>      $data['stock'],
            'link_url'       =>      $data['link_url'],
        ];
        $is_exist_id = empty($data['id']);

        //判断是否存在同名
        $is_unique = $this->model->is_unique($data['name'],$is_exist_id?0:$data['id']);

        if($is_unique){
            $this->result('','0','存在同名类');
        }

        // 更新数据
        if(!$is_exist_id){
            $proData['id'] = $data['id'];
            return $update = $this->update($proData);
        }

        $result = $this->model->save($proData);
        if($result){
            $this->result(url('index'),'1','添加成功');
        }else{
            $this->result("",'0','添加失败');
        }
    }

    public function edit($id=0){
        if(intval($id) < 1){
            $this->error("参数不合法");
        }
        $attrData = config('attributes.attribute_type');
        $cateData = model('procate')->getCateData();
        $proAllData = $this->model->getProData($id);

        $proAllData['attributes'] = explode(',',$proAllData['attributes']);
        $proAllData['label_attr'] = explode(',',$proAllData['label_attr']);
        $labelsData = config('attributes.labels_type');
        $columnSortData = model('category')->getColumnCate();

        // 获取属性
        $productPropData = db('product_prop')->where('product_id',$id)->select();
        $propData = model('property')->select();

        // 获取分类
        $productCateData = db('product_cate')->field('cate_id')->where('product_id',$id)->select();
        $selCateData = [];
        foreach ($productCateData as $val){
            array_push($selCateData, $val['cate_id']);
        }

        return $this->fetch('',[
            'proAllData' => $proAllData,
            'attrData'   => $attrData,
            'labelsData'  => $labelsData,
            'cateData'   => $cateData,
            'columnSortData' => $columnSortData,
            'productPropData' => $productPropData,
            'selCateData' => $selCateData,
            'propData' => $propData
        ]);
    }

    // 更新
    public function update($data){
        $result = $this->model->save($data,['id' => intval($data['id'])]);
        if($result){
            $this->result(url('index'),'1','更新成功');
        }else{
            $this->result("",'0','更新失败');
        }
    }

    //删除
    public function del($id=-1){
        if(request()->isPost()){
            $id = request()->post()['idsArr'];
            if($id == []){
                $this->error("无选中的数据！");
            }
        }else{
            if(intval($id)<1){
                $this->error("参数不合法");
            }
        }

        if(!is_array($id)){
            $id = [$id];
        }
        // 删除
        $result = $this->model->delSelChild($id);
        // 返回状态码
        if($result){
            $this->result($_SERVER['HTTP_REFERER'], 1, '删除完成');
        }else{
            $this->result($_SERVER['HTTP_REFERER'], 0, '删除失败');
        }
    }

    // 排序
    public function listorder($id,$listorder){
        $result = $this->model->save(['listorder'=>$listorder],['id'=>$id]);
        if($result){
            $this->result($_SERVER['HTTP_REFERER'], 1, '更新完成');
        }else{
            $this->result($_SERVER['HTTP_REFERER'], 0, '更新失败');
        }
    }

}