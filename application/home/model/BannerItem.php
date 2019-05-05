<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/1/20
 * Time: 20:35
 */

namespace app\home\model;


use think\Model;

class BannerItem extends Model
{

    protected function getImgUrlAttr($val,$data){
        return $this->handleImgUrl($val);
    }
    protected function getThumbUrlAttr($val,$data){
        $val = str_replace('\\','/',$val);
        return config('APISetting.img_prefix').$val;
    }

    private function handleImgUrl($val){
        $val = str_replace('\\','/',$val);
        return explode(';',$val);
    }

    public static function getIndexBanner(){
        $data = [
            'banner_id' => 1
        ];
        $order = [
            'listorder' => 'desc'
        ];
        $result = self::where($data)->order($order)->select();
        return $result;
    }
}