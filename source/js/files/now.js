/*! Copyright 2017 Halyul */
console.info("\u7248\u6743\u6240\u6709\uff0c\u7ffb\u7248\u5fc5\u7a76\uff01\u000d\u000a\u0043\u006f\u0070\u0079\u0072\u0069\u0067\u0068\u0074\u0020©\u0020\u0032\u0030\u0031\u0037\u0020\u0048\u0061\u006c\u0079\u0075\u006c");

var $$ = mdui.JQ;

$$(document).on('open.mdui.drawer', '#drawer', function (e) {
  $$('#appbar-drawer').addClass('back');
});

$$(document).on('close.mdui.drawer', '#drawer', function (e) {
  $$('#appbar-drawer').removeClass('back');
});