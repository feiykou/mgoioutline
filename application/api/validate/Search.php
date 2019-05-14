<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-05-14
 * Time: 16:19
 */

namespace app\api\validate;


class Search extends BaseValidate
{
    protected $rule = [
        'q' => 'require','搜索内容必须添加',
        'page' => 'isPositiveInteger',
        'size' => 'isPositiveInteger'
    ];
}