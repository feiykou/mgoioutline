<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/4/4 0004
 * Time: 下午 16:51
 */

namespace app\admin\controller;


class News extends Base
{
    private $model;
    public function _initialize()
    {
        parent::_initialize();
        $this->model = model('news');
    }

    public function index(){
        $newsAllData = $this->model->getAllNewsData();
        return $this->fetch('',[
            'newsAllData'   => $newsAllData
        ]);
    }

    public function add(){
//        (new ProductValidate())->goCheck('add');
        $columnSortData = model('category')->getColumnCate();
        return $this->fetch('',[
            'columnSortData' => $columnSortData
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

        // 更新数据s
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
        return $this->fetch('',[
            'newsAllData' => $newsAllData,
            'columnSortData' => $columnSortData
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