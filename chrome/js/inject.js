!function(e){function n(t){if(o[t])return o[t].exports;var d=o[t]={exports:{},id:t,loaded:!1};return e[t].call(d.exports,d,d.exports,n),d.loaded=!0,d.exports}var o={};return n.m=e,n.c=o,n.p="",n(0)}([function(e,n){function o(e){chrome.runtime.sendMessage({method:"add_script",data:"js/"+e+".js"})}"undefined"!=typeof browser&&(chrome=browser),$(function(){window.addEventListener("message",function(e){e.source==window&&"yunData"==e.data.type&&(window.yunData=JSON.parse(e.data.data),o(window.location.href.includes("/disk/home")?"home":window.location.href.includes("/pcloud/album/")?"album":"share"))}),window.addEventListener("load",function(){var e=document.createElement("script");e.src=chrome.runtime.getURL("js/baidu.js"),document.body.appendChild(e)})})}]);