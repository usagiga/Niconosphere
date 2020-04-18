// ==UserScript==
// @name         Niconosphere
// @namespace    https://github.com/usagiga/Niconosphere
// @version      1.0
// @description  ニコニコのスマホ用サイトを開いたときにPC用ページにリダイレクトするスクリプト
// @author       Usagigawara
// @match        https://sp.nicovideo.jp/*
// @match        https://dic.nicovideo.jp/t/a/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    let pageUrl = new URL(window.location.href);
    let hostname = pageUrl.host;

    if (hostname === "sp.nicovideo.jp") pageUrl.host = "www.nicovideo.jp";
    if (hostname === "dic.nicovideo.jp") pageUrl.pathname = pageUrl.pathname.substring(2); // Remove `/t`

    window.location.replace(pageUrl.toString());
})();
