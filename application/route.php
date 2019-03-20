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


Route::get('/product','home/product/lst');
Route::get('/product/list/[:cate_id]','home/product/lst',[],['cate_id'=>'\d+']);
Route::get('/product/detail/:id','home/product/detail',[],['id'=>'\d+']);
Route::get('/product/cate/:cate_id','home/product/cate',[],['cate_id'=>'\d+']);


Route::get('/about','home/about/about');
Route::get('/contact','home/contact/contact');
Route::get('/news','home/news/index');
Route::get('/news/list/[:cate_id]','home/news/index',[],['cate_id'=>'\d+']);
Route::get('/news/detail/:id','home/news/detail',[],['id'=>'\d+']);
Route::get('/news/cate/:cate_id','home/news/cate',[],['cate_id'=>'\d+']);


Route::get('/column','home/column/index');
Route::get('/column/list/:cate_id','home/column/index',[],['id'=>'\d+']);
Route::get('/column/detail/:id','home/column/detail',[],['id'=>'\d+']);
Route::get('/column/cate/:cate_id','home/column/cate',[],['cate_id'=>'\d+']);

Route::get('/index','home/home/index');