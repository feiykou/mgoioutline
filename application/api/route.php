<?php

use think\Route;

Route::get('api/:version/index/banner','api/:version.Index/indexBanner');
Route::get('api/:version/index/rescProduct','api/:version.Index/rescProduct');
Route::get('api/:version/index/newsProduct','api/:version.Index/newsProduct');
Route::get('api/:version/index/topCate','api/:version.Index/topCate');
Route::get('api/:version/index/column','api/:version.Index/getIndexColumn');

Route::get('api/:version/column/detail/:id','api/:version.Column/detail');
Route::get('api/:version/cate/all','api/:version.Cate/getAllCate');


Route::get('api/:version/product/:cate_id','api/:version.Product/lst');
Route::get('api/:version/column/:cate_id','api/:version.Column/getColumnByCateId',[],['cate_id'=>'\d+']);
Route::get('api/:version/column/top_cate','api/:version.Column/getTopCate');


// 公共
Route::get('api/:version/cate/second','api/BaseController/cate');


