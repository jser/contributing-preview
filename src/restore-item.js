// LICENSE : MIT
"use strict";
export function restoreItem() {
    var hash = location.hash;
    if (hash) {
        var trimed = hash[0] === "#" ? hash.substring(1) : hash;
        return decodeURIComponent(trimed);
    }
}
export function storeItem(content){
    location.hash = encodeURIComponent(content);
}