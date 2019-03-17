<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\Route;
Route::get('/home','home/index/index');
Route::get('/cate','home/index/getCate');


Route::get('/product/[:columnId]','home/product/lst',[],['columnId'=>'\d+']);
Route::get('/product/list/[:cate_id]','home/product/lst',[],['cate_id'=>'\d+']);
Route::get('/product/detail/:id','home/product/detail',[],['id'=>'\d+']);
Route::get('/product/cate/:cate_id','home/product/cate',[],['cate_id'=>'\d+']);


Route::get('/about/[:cate_id]','home/about/about',[],['cate_id'=>'\d+']);
Route::get('/contact/[:cate_id]','home/contact/contact',[],['cate_id'=>'\d+']);
Route::get('/news/[:columnId]','home/news/index',[],['columnId'=>'\d+']);
Route::get('/news/list/[:cate_id]','home/news/index',[],['cate_id'=>'\d+']);
Route::get('/news/detail/:id','home/news/detail',[],['id'=>'\d+']);
Route::get('/news/cate/:cate_id','home/news/cate',[],['cate_id'=>'\d+']);


Route::get('/column/[:columnId]','home/column/index',[],['columnId'=>'\d+']);
Route::get('/column/list/:cate_id','home/column/index',[],['id'=>'\d+']);
Route::get('/column/detail/:id','home/column/detail',[],['id'=>'\d+']);
Route::get('/column/cate/:cate_id','home/column/cate',[],['cate_id'=>'\d+']);

Route::get('/index','home/home/index');