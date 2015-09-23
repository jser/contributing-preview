// LICENSE : MIT
"use strict";
import Vue from "vue"
import {storeItem,restoreItem} from "./restore-item"
marked.setOptions({
    highlight: function (code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
    }
});
Vue.filter('ttp', function (value) {
    if (!value) {
        return "";
    }
    return value.replace(/https?:\/\//i, "")
        .replace(/_/g, "\\_");
});
var app = new Vue({
    el: '#js-app',
    data: {
        item: {
            "title": "サイトタイトル",
            "url": "http://example.com/",
            "content": "説明文",
            "date": "2015-09-23T07:06:00.112Z",
            "tags": [
                "tag"
            ],
            "relatedLinks": [
                {
                    "title": "関連サイト",
                    "url": "http://example.com"
                }
            ]
        }
    },
    methods: {
        storeItem: function (e) {
            storeItem(JSON.stringify(this.item));
        }
    },
    filters: {
        marked: function (content) {
            try {
                return marked(content);
            } catch (e) {
                console.log(e);
            }
            return content;
        }
    }
});

var itemValue = restoreItem();
if (itemValue) {
    try {
        app.item = JSON.parse(itemValue);
    } catch (e) {
        console.log(e);
    }
}