<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/4 0004
 * Time: 下午 16:51
 */

namespace app\admin\controller;


class Column extends Base
{
    private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('column');
    }

    public function index(){
        $data = input('get.');
        $sdata = [];
        // 时间条件范围
        if(!empty($data['start_time']) && !empty($data['end_time']) && strtotime($data['end_time']) > strtotime($data['start_time'])){
            $sdata['create_time'] = [
                ['gt',$data['start_time']],
                ['lt',$data['end_time']]
            ];
        }
        if(!empty($data['cate_id'])){
            $ids = model('column_cate')->getChildCateIds($data['cate_id']);
            if($ids == ''){
                $ids .= $data['cate_id'];
            }

            $sdata['cate_id'] = [
                'in',$ids
            ];
        }

        if(!empty($data['name'])){
            $sdata['name'] = ['like','%'.$data['name'].'%'];
        }

        $cateData = model('column_cate')->getCateData();
        $newsAllData = $this->model->getAllNewsData($sdata);
        $attrData = config('attributes.news_attr_type');
        return $this->fetch('',[
            'newsAllData'   => $newsAllData,
            'cateData' => $cateData,
            'attrData'     => $attrData,
            'start_time'   => empty($data['start_time']) ? '' : $data['start_time'],
            'end_time'     => empty($data['end_time']) ? '' : $data['end_time'],
            'name'         => empty($data['name']) ? '' : $data['name'],
            'cate_id'  => empty($data['cate_id']) ? '' : $data['cate_id']
        ]);
    }

    public function add(){
//        (new ProductValidate())->goCheck('add');
        $columnSortData = model('category')->getColumnCate();
        $newCates = model('column_cate')->getCateData();
        $attrData = config('attributes.news_attr_type');
        return $this->fetch('',[
            'columnSortData' => $columnSortData,
            'attrData'     => $attrData,
            'newCates' => $newCates
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
        $is_exist_id = empty($data['id']);

        //判断是否存在同名
        $is_unique = $this->model->is_unique($data['name'],$is_exist_id?0:$data['id']);

        if($is_unique){
            $this->result('','0','存在同名类');
        }
        $data['attributes'] = keyInArray($data,'attributes') ? implode(',',$data['attributes']):'';

        // 更新数据
        if(!$is_exist_id){
            $proData['id'] = $data['id'];
            return $update = $this->update($data);
        }

        $result = $this->model->save($data);
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

        $newsAllData = $this->model->getNewsData($id);
        $columnSortData = model('category')->getColumnCate();
        $newCates = model('column_cate')->getCateData();

        $attrData = config('attributes.news_attr_type');
        $newsAllData['attributes'] = explode(',',$newsAllData['attributes']);

        return $this->fetch('',[
            'newsAllData' => $newsAllData,
            'columnSortData' => $columnSortData,
            'attrData'     => $attrData,
            'newCates' => $newCates
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