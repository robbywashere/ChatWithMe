/*! Fireside - v0.1.0 - 2013-09-17
* http://www.github.com/robbywashere/fireside
* Copyright (c) 2013 Robby; Licensed MIT */
this.JSON||(this.JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)r=rep[n],typeof r=="string"&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(){function o(){try{return r in t&&t[r]}catch(e){return!1}}var e={},t=window,n=t.document,r="localStorage",i="__storejs__",s;e.disabled=!1,e.set=function(e,t){},e.get=function(e){},e.remove=function(e){},e.clear=function(){},e.transact=function(t,n,r){var i=e.get(t);r==null&&(r=n,n=null),typeof i=="undefined"&&(i=n||{}),r(i),e.set(t,i)},e.getAll=function(){},e.serialize=function(e){return JSON.stringify(e)},e.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=t[r],e.set=function(t,n){return n===undefined?e.remove(t):(s.setItem(t,e.serialize(n)),n)},e.get=function(t){return e.deserialize(s.getItem(t))},e.remove=function(e){s.removeItem(e)},e.clear=function(){s.clear()},e.getAll=function(){var t={};for(var n=0;n<s.length;++n){var r=s.key(n);t[r]=e.get(r)}return t};else if(n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}function l(t){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=t.apply(e,n);return u.removeChild(s),i}}var c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function h(e){return e.replace(c,"___")}e.set=l(function(t,n,i){return n=h(n),i===undefined?e.remove(n):(t.setAttribute(n,e.serialize(i)),t.save(r),i)}),e.get=l(function(t,n){return n=h(n),e.deserialize(t.getAttribute(n))}),e.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),e.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);for(var n=0,i;i=t[n];n++)e.removeAttribute(i.name);e.save(r)}),e.getAll=l(function(t){var n=t.XMLDocument.documentElement.attributes,r={};for(var i=0,s;s=n[i];++i){var o=h(s.name);r[s.name]=e.deserialize(t.getAttribute(o))}return r})}try{e.set(i,i),e.get(i)!=i&&(e.disabled=!0),e.remove(i)}catch(f){e.disabled=!0}e.enabled=!e.disabled,typeof module!="undefined"&&module.exports?module.exports=e:typeof define=="function"&&define.amd?define(e):this.store=e}()

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

var Base64 = (function () {
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    var obj = {
        /**
         * Encodes a string in base64
         * @param {String} input The string to encode in base64.
         */
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) + keyStr.charAt(enc4);
            } while (i < input.length);

            return output;
        },

        /**
         * Decodes a base64 string.
         * @param {String} input The string to decode.
         */
        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            } while (i < input.length);

            return output;
        }
    };

    return obj;
})();
/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

var MD5 = (function () {
    /*
     * Configurable variables. You may need to tweak these to be compatible with
     * the server-side, but the defaults work in most cases.
     */
    var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase */
    var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance */
    var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode */

    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */
    var safe_add = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    };

    /*
     * Bitwise rotate a 32-bit number to the left.
     */
    var bit_rol = function (num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    };

    /*
     * Convert a string to an array of little-endian words
     * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
     */
    var str2binl = function (str) {
        var bin = [];
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz)
        {
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
        }
        return bin;
    };

    /*
     * Convert an array of little-endian words to a string
     */
    var binl2str = function (bin) {
        var str = "";
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < bin.length * 32; i += chrsz)
        {
            str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
        }
        return str;
    };

    /*
     * Convert an array of little-endian words to a hex string.
     */
    var binl2hex = function (binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++)
        {
            str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
                hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
        }
        return str;
    };

    /*
     * Convert an array of little-endian words to a base-64 string
     */
    var binl2b64 = function (binarray) {
        var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var str = "";
        var triplet, j;
        for(var i = 0; i < binarray.length * 4; i += 3)
        {
            triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16) |
                (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 ) |
                ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
            for(j = 0; j < 4; j++)
            {
                if(i * 8 + j * 6 > binarray.length * 32) { str += b64pad; }
                else { str += tab.charAt((triplet >> 6*(3-j)) & 0x3F); }
            }
        }
        return str;
    };

    /*
     * These functions implement the four basic operations the algorithm uses.
     */
    var md5_cmn = function (q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q),safe_add(x, t)), s),b);
    };

    var md5_ff = function (a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    };

    var md5_gg = function (a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    };

    var md5_hh = function (a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    };

    var md5_ii = function (a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    };

    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length
     */
    var core_md5 = function (x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var a =  1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d =  271733878;

        var olda, oldb, oldc, oldd;
        for (var i = 0; i < x.length; i += 16)
        {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
            d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
            d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
            d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
            d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

            a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
            d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
            c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
            d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
            c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
            d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
            c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
            d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
            c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
            d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
            d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
            d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
            d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
            d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
            d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
            d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
            d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    };


    /*
     * Calculate the HMAC-MD5, of a key and some data
     */
    var core_hmac_md5 = function (key, data) {
        var bkey = str2binl(key);
        if(bkey.length > 16) { bkey = core_md5(bkey, key.length * chrsz); }

        var ipad = new Array(16), opad = new Array(16);
        for(var i = 0; i < 16; i++)
        {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }

        var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
        return core_md5(opad.concat(hash), 512 + 128);
    };

    var obj = {
        /*
         * These are the functions you'll usually want to call.
         * They take string arguments and return either hex or base-64 encoded
         * strings.
         */
        hexdigest: function (s) {
            return binl2hex(core_md5(str2binl(s), s.length * chrsz));
        },

        b64digest: function (s) {
            return binl2b64(core_md5(str2binl(s), s.length * chrsz));
        },

        hash: function (s) {
            return binl2str(core_md5(str2binl(s), s.length * chrsz));
        },

        hmac_hexdigest: function (key, data) {
            return binl2hex(core_hmac_md5(key, data));
        },

        hmac_b64digest: function (key, data) {
            return binl2b64(core_hmac_md5(key, data));
        },

        hmac_hash: function (key, data) {
            return binl2str(core_hmac_md5(key, data));
        },

        /*
         * Perform a simple self-test to see if the VM is working
         */
        test: function () {
            return MD5.hexdigest("abc") === "900150983cd24fb0d6963f7d28e17f72";
        }
    };

    return obj;
})();
/*
    This program is distributed under the terms of the MIT license.
    Please see the LICENSE file for details.

    Copyright 2006-2008, OGG, LLC
*/

/* jslint configuration: */
/*global document, window, setTimeout, clearTimeout, console,
    XMLHttpRequest, ActiveXObject,
    Base64, MD5,
    Strophe, $build, $msg, $iq, $pres */

/** File: strophe.js
 *  A JavaScript library for XMPP BOSH.
 *
 *  This is the JavaScript version of the Strophe library.  Since JavaScript
 *  has no facilities for persistent TCP connections, this library uses
 *  Bidirectional-streams Over Synchronous HTTP (BOSH) to emulate
 *  a persistent, stateful, two-way connection to an XMPP server.  More
 *  information on BOSH can be found in XEP 124.
 */

/** PrivateFunction: Function.prototype.bind
 *  Bind a function to an instance.
 *
 *  This Function object extension method creates a bound method similar
 *  to those in Python.  This means that the 'this' object will point
 *  to the instance you want.  See
 *  <a href='https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind'>MDC's bind() documentation</a> and 
 *  <a href='http://benjamin.smedbergs.us/blog/2007-01-03/bound-functions-and-function-imports-in-javascript/'>Bound Functions and Function Imports in JavaScript</a>
 *  for a complete explanation.
 *
 *  This extension already exists in some browsers (namely, Firefox 3), but
 *  we provide it to support those that don't.
 *
 *  Parameters:
 *    (Object) obj - The object that will become 'this' in the bound function.
 *    (Object) argN - An option argument that will be prepended to the 
 *      arguments given for the function call
 *
 *  Returns:
 *    The bound function.
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (obj /*, arg1, arg2, ... */)
    {
        var func = this;
        var _slice = Array.prototype.slice;
        var _concat = Array.prototype.concat;
        var _args = _slice.call(arguments, 1);
        
        return function () {
            return func.apply(obj ? obj : this,
                              _concat.call(_args,
                                           _slice.call(arguments, 0)));
        };
    };
}

/** PrivateFunction: Array.prototype.indexOf
 *  Return the index of an object in an array.
 *
 *  This function is not supplied by some JavaScript implementations, so
 *  we provide it if it is missing.  This code is from:
 *  http://developer.mozilla.org/En/Core_JavaScript_1.5_Reference:Objects:Array:indexOf
 *
 *  Parameters:
 *    (Object) elt - The object to look for.
 *    (Integer) from - The index from which to start looking. (optional).
 *
 *  Returns:
 *    The index of elt in the array or -1 if not found.
 */
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elt /*, from*/)
    {
        var len = this.length;

        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
            from += len;
        }

        for (; from < len; from++) {
            if (from in this && this[from] === elt) {
                return from;
            }
        }

        return -1;
    };
}

/* All of the Strophe globals are defined in this special function below so
 * that references to the globals become closures.  This will ensure that
 * on page reload, these references will still be available to callbacks
 * that are still executing.
 */

(function (callback) {
var Strophe;

/** Function: $build
 *  Create a Strophe.Builder.
 *  This is an alias for 'new Strophe.Builder(name, attrs)'.
 *
 *  Parameters:
 *    (String) name - The root element name.
 *    (Object) attrs - The attributes for the root element in object notation.
 *
 *  Returns:
 *    A new Strophe.Builder object.
 */
function $build(name, attrs) { return new Strophe.Builder(name, attrs); }
/** Function: $msg
 *  Create a Strophe.Builder with a <message/> element as the root.
 *
 *  Parmaeters:
 *    (Object) attrs - The <message/> element attributes in object notation.
 *
 *  Returns:
 *    A new Strophe.Builder object.
 */
function $msg(attrs) { return new Strophe.Builder("message", attrs); }
/** Function: $iq
 *  Create a Strophe.Builder with an <iq/> element as the root.
 *
 *  Parameters:
 *    (Object) attrs - The <iq/> element attributes in object notation.
 *
 *  Returns:
 *    A new Strophe.Builder object.
 */
function $iq(attrs) { return new Strophe.Builder("iq", attrs); }
/** Function: $pres
 *  Create a Strophe.Builder with a <presence/> element as the root.
 *
 *  Parameters:
 *    (Object) attrs - The <presence/> element attributes in object notation.
 *
 *  Returns:
 *    A new Strophe.Builder object.
 */
function $pres(attrs) { return new Strophe.Builder("presence", attrs); }

/** Class: Strophe
 *  An object container for all Strophe library functions.
 *
 *  This class is just a container for all the objects and constants
 *  used in the library.  It is not meant to be instantiated, but to
 *  provide a namespace for library objects, constants, and functions.
 */
Strophe = {
    /** Constant: VERSION
     *  The version of the Strophe library. Unreleased builds will have
     *  a version of head-HASH where HASH is a partial revision.
     */
    VERSION: "1.0.2",

    /** Constants: XMPP Namespace Constants
     *  Common namespace constants from the XMPP RFCs and XEPs.
     *
     *  NS.HTTPBIND - HTTP BIND namespace from XEP 124.
     *  NS.BOSH - BOSH namespace from XEP 206.
     *  NS.CLIENT - Main XMPP client namespace.
     *  NS.AUTH - Legacy authentication namespace.
     *  NS.ROSTER - Roster operations namespace.
     *  NS.PROFILE - Profile namespace.
     *  NS.DISCO_INFO - Service discovery info namespace from XEP 30.
     *  NS.DISCO_ITEMS - Service discovery items namespace from XEP 30.
     *  NS.MUC - Multi-User Chat namespace from XEP 45.
     *  NS.SASL - XMPP SASL namespace from RFC 3920.
     *  NS.STREAM - XMPP Streams namespace from RFC 3920.
     *  NS.BIND - XMPP Binding namespace from RFC 3920.
     *  NS.SESSION - XMPP Session namespace from RFC 3920.
     */
    NS: {
        HTTPBIND: "http://jabber.org/protocol/httpbind",
        BOSH: "urn:xmpp:xbosh",
        CLIENT: "jabber:client",
        AUTH: "jabber:iq:auth",
        ROSTER: "jabber:iq:roster",
        PROFILE: "jabber:iq:profile",
        DISCO_INFO: "http://jabber.org/protocol/disco#info",
        DISCO_ITEMS: "http://jabber.org/protocol/disco#items",
        MUC: "http://jabber.org/protocol/muc",
        SASL: "urn:ietf:params:xml:ns:xmpp-sasl",
        STREAM: "http://etherx.jabber.org/streams",
        BIND: "urn:ietf:params:xml:ns:xmpp-bind",
        SESSION: "urn:ietf:params:xml:ns:xmpp-session",
        VERSION: "jabber:iq:version",
        STANZAS: "urn:ietf:params:xml:ns:xmpp-stanzas"
    },

    /** Function: addNamespace
     *  This function is used to extend the current namespaces in
     *	Strophe.NS.  It takes a key and a value with the key being the
     *	name of the new namespace, with its actual value.
     *	For example:
     *	Strophe.addNamespace('PUBSUB', "http://jabber.org/protocol/pubsub");
     *
     *  Parameters:
     *    (String) name - The name under which the namespace will be
     *      referenced under Strophe.NS
     *    (String) value - The actual namespace.
     */
    addNamespace: function (name, value)
    {
	Strophe.NS[name] = value;
    },

    /** Constants: Connection Status Constants
     *  Connection status constants for use by the connection handler
     *  callback.
     *
     *  Status.ERROR - An error has occurred
     *  Status.CONNECTING - The connection is currently being made
     *  Status.CONNFAIL - The connection attempt failed
     *  Status.AUTHENTICATING - The connection is authenticating
     *  Status.AUTHFAIL - The authentication attempt failed
     *  Status.CONNECTED - The connection has succeeded
     *  Status.DISCONNECTED - The connection has been terminated
     *  Status.DISCONNECTING - The connection is currently being terminated
     *  Status.ATTACHED - The connection has been attached
     */
    Status: {
        ERROR: 0,
        CONNECTING: 1,
        CONNFAIL: 2,
        AUTHENTICATING: 3,
        AUTHFAIL: 4,
        CONNECTED: 5,
        DISCONNECTED: 6,
        DISCONNECTING: 7,
        ATTACHED: 8
    },

    /** Constants: Log Level Constants
     *  Logging level indicators.
     *
     *  LogLevel.DEBUG - Debug output
     *  LogLevel.INFO - Informational output
     *  LogLevel.WARN - Warnings
     *  LogLevel.ERROR - Errors
     *  LogLevel.FATAL - Fatal errors
     */
    LogLevel: {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        FATAL: 4
    },

    /** PrivateConstants: DOM Element Type Constants
     *  DOM element types.
     *
     *  ElementType.NORMAL - Normal element.
     *  ElementType.TEXT - Text data element.
     */
    ElementType: {
        NORMAL: 1,
        TEXT: 3,
        CDATA: 4
    },

    /** PrivateConstants: Timeout Values
     *  Timeout values for error states.  These values are in seconds.
     *  These should not be changed unless you know exactly what you are
     *  doing.
     *
     *  TIMEOUT - Timeout multiplier. A waiting request will be considered
     *      failed after Math.floor(TIMEOUT * wait) seconds have elapsed.
     *      This defaults to 1.1, and with default wait, 66 seconds.
     *  SECONDARY_TIMEOUT - Secondary timeout multiplier. In cases where
     *      Strophe can detect early failure, it will consider the request
     *      failed if it doesn't return after
     *      Math.floor(SECONDARY_TIMEOUT * wait) seconds have elapsed.
     *      This defaults to 0.1, and with default wait, 6 seconds.
     */
    TIMEOUT: 1.1,
    SECONDARY_TIMEOUT: 0.1,

    /** Function: forEachChild
     *  Map a function over some or all child elements of a given element.
     *
     *  This is a small convenience function for mapping a function over
     *  some or all of the children of an element.  If elemName is null, all
     *  children will be passed to the function, otherwise only children
     *  whose tag names match elemName will be passed.
     *
     *  Parameters:
     *    (XMLElement) elem - The element to operate on.
     *    (String) elemName - The child element tag name filter.
     *    (Function) func - The function to apply to each child.  This
     *      function should take a single argument, a DOM element.
     */
    forEachChild: function (elem, elemName, func)
    {
        var i, childNode;

        for (i = 0; i < elem.childNodes.length; i++) {
            childNode = elem.childNodes[i];
            if (childNode.nodeType == Strophe.ElementType.NORMAL &&
                (!elemName || this.isTagEqual(childNode, elemName))) {
                func(childNode);
            }
        }
    },

    /** Function: isTagEqual
     *  Compare an element's tag name with a string.
     *
     *  This function is case insensitive.
     *
     *  Parameters:
     *    (XMLElement) el - A DOM element.
     *    (String) name - The element name.
     *
     *  Returns:
     *    true if the element's tag name matches _el_, and false
     *    otherwise.
     */
    isTagEqual: function (el, name)
    {
        return el.tagName.toLowerCase() == name.toLowerCase();
    },

    /** PrivateVariable: _xmlGenerator
     *  _Private_ variable that caches a DOM document to
     *  generate elements.
     */
    _xmlGenerator: null,

    /** PrivateFunction: _makeGenerator
     *  _Private_ function that creates a dummy XML DOM document to serve as
     *  an element and text node generator.
     */
    _makeGenerator: function () {
        var doc;

        if (document.implementation.createDocument === undefined) {
            doc = this._getIEXmlDom();
            doc.appendChild(doc.createElement('strophe'));
        } else {
            doc = document.implementation
                .createDocument('jabber:client', 'strophe', null);
        }

        return doc;
    },

    /** Function: xmlGenerator
     *  Get the DOM document to generate elements.
     *
     *  Returns:
     *    The currently used DOM document.
     */
    xmlGenerator: function () {
        if (!Strophe._xmlGenerator) {
            Strophe._xmlGenerator = Strophe._makeGenerator();
        }
        return Strophe._xmlGenerator;
    },

    /** PrivateFunction: _getIEXmlDom
     *  Gets IE xml doc object
     *
     *  Returns:
     *    A Microsoft XML DOM Object
     *  See Also:
     *    http://msdn.microsoft.com/en-us/library/ms757837%28VS.85%29.aspx
     */
    _getIEXmlDom : function() {
        var doc = null;
        var docStrings = [
            "Msxml2.DOMDocument.6.0",
            "Msxml2.DOMDocument.5.0",
            "Msxml2.DOMDocument.4.0",
            "MSXML2.DOMDocument.3.0",
            "MSXML2.DOMDocument",
            "MSXML.DOMDocument",
            "Microsoft.XMLDOM"
        ];

        for (var d = 0; d < docStrings.length; d++) {
            if (doc === null) {
                try {
                    doc = new ActiveXObject(docStrings[d]);
                } catch (e) {
                    doc = null;
                }
            } else {
                break;
            }
        }

        return doc;
    },

    /** Function: xmlElement
     *  Create an XML DOM element.
     *
     *  This function creates an XML DOM element correctly across all
     *  implementations. Note that these are not HTML DOM elements, which
     *  aren't appropriate for XMPP stanzas.
     *
     *  Parameters:
     *    (String) name - The name for the element.
     *    (Array|Object) attrs - An optional array or object containing
     *      key/value pairs to use as element attributes. The object should
     *      be in the format {'key': 'value'} or {key: 'value'}. The array
     *      should have the format [['key1', 'value1'], ['key2', 'value2']].
     *    (String) text - The text child data for the element.
     *
     *  Returns:
     *    A new XML DOM element.
     */
    xmlElement: function (name)
    {
        if (!name) { return null; }

        var node = Strophe.xmlGenerator().createElement(name);

        // FIXME: this should throw errors if args are the wrong type or
        // there are more than two optional args
        var a, i, k;
        for (a = 1; a < arguments.length; a++) {
            if (!arguments[a]) { continue; }
            if (typeof(arguments[a]) == "string" ||
                typeof(arguments[a]) == "number") {
                node.appendChild(Strophe.xmlTextNode(arguments[a]));
            } else if (typeof(arguments[a]) == "object" &&
                       typeof(arguments[a].sort) == "function") {
                for (i = 0; i < arguments[a].length; i++) {
                    if (typeof(arguments[a][i]) == "object" &&
                        typeof(arguments[a][i].sort) == "function") {
                        node.setAttribute(arguments[a][i][0],
                                          arguments[a][i][1]);
                    }
                }
            } else if (typeof(arguments[a]) == "object") {
                for (k in arguments[a]) {
                    if (arguments[a].hasOwnProperty(k)) {
                        node.setAttribute(k, arguments[a][k]);
                    }
                }
            }
        }

        return node;
    },

    /*  Function: xmlescape
     *  Excapes invalid xml characters.
     *
     *  Parameters:
     *     (String) text - text to escape.
     *
     *	Returns:
     *      Escaped text.
     */
    xmlescape: function(text)
    {
        text = text.replace(/\&/g, "&amp;");
        text = text.replace(/</g,  "&lt;");
        text = text.replace(/>/g,  "&gt;");
        text = text.replace(/'/g,  "&apos;");
        text = text.replace(/"/g,  "&quot;");
        return text;
    },

    /** Function: xmlTextNode
     *  Creates an XML DOM text node.
     *
     *  Provides a cross implementation version of document.createTextNode.
     *
     *  Parameters:
     *    (String) text - The content of the text node.
     *
     *  Returns:
     *    A new XML DOM text node.
     */
    xmlTextNode: function (text)
    {
	//ensure text is escaped
	//text = Strophe.xmlescape(text);

        return Strophe.xmlGenerator().createTextNode(text);
    },

    /** Function: getText
     *  Get the concatenation of all text children of an element.
     *
     *  Parameters:
     *    (XMLElement) elem - A DOM element.
     *
     *  Returns:
     *    A String with the concatenated text of all text element children.
     */
    getText: function (elem)
    {
        if (!elem) { return null; }

        var str = "";
        if (elem.childNodes.length === 0 && elem.nodeType ==
            Strophe.ElementType.TEXT) {
            str += elem.nodeValue;
        }

        for (var i = 0; i < elem.childNodes.length; i++) {
            if (elem.childNodes[i].nodeType == Strophe.ElementType.TEXT) {
                str += elem.childNodes[i].nodeValue;
            }
        }

        return str;
    },

    /** Function: copyElement
     *  Copy an XML DOM element.
     *
     *  This function copies a DOM element and all its descendants and returns
     *  the new copy.
     *
     *  Parameters:
     *    (XMLElement) elem - A DOM element.
     *
     *  Returns:
     *    A new, copied DOM element tree.
     */
    copyElement: function (elem)
    {
        var i, el;
        if (elem.nodeType == Strophe.ElementType.NORMAL) {
            el = Strophe.xmlElement(elem.tagName);

            for (i = 0; i < elem.attributes.length; i++) {
                el.setAttribute(elem.attributes[i].nodeName.toLowerCase(),
                                elem.attributes[i].value);
            }

            for (i = 0; i < elem.childNodes.length; i++) {
                el.appendChild(Strophe.copyElement(elem.childNodes[i]));
            }
        } else if (elem.nodeType == Strophe.ElementType.TEXT) {
            el = Strophe.xmlGenerator().createTextNode(elem.nodeValue);
        }

        return el;
    },

    /** Function: escapeNode
     *  Escape the node part (also called local part) of a JID.
     *
     *  Parameters:
     *    (String) node - A node (or local part).
     *
     *  Returns:
     *    An escaped node (or local part).
     */
    escapeNode: function (node)
    {
        return node.replace(/^\s+|\s+$/g, '')
            .replace(/\\/g,  "\\5c")
            .replace(/ /g,   "\\20")
            .replace(/\"/g,  "\\22")
            .replace(/\&/g,  "\\26")
            .replace(/\'/g,  "\\27")
            .replace(/\//g,  "\\2f")
            .replace(/:/g,   "\\3a")
            .replace(/</g,   "\\3c")
            .replace(/>/g,   "\\3e")
            .replace(/@/g,   "\\40");
    },

    /** Function: unescapeNode
     *  Unescape a node part (also called local part) of a JID.
     *
     *  Parameters:
     *    (String) node - A node (or local part).
     *
     *  Returns:
     *    An unescaped node (or local part).
     */
    unescapeNode: function (node)
    {
        return node.replace(/\\20/g, " ")
            .replace(/\\22/g, '"')
            .replace(/\\26/g, "&")
            .replace(/\\27/g, "'")
            .replace(/\\2f/g, "/")
            .replace(/\\3a/g, ":")
            .replace(/\\3c/g, "<")
            .replace(/\\3e/g, ">")
            .replace(/\\40/g, "@")
            .replace(/\\5c/g, "\\");
    },

    /** Function: getNodeFromJid
     *  Get the node portion of a JID String.
     *
     *  Parameters:
     *    (String) jid - A JID.
     *
     *  Returns:
     *    A String containing the node.
     */
    getNodeFromJid: function (jid)
    {
        if (jid.indexOf("@") < 0) { return null; }
        return jid.split("@")[0];
    },

    /** Function: getDomainFromJid
     *  Get the domain portion of a JID String.
     *
     *  Parameters:
     *    (String) jid - A JID.
     *
     *  Returns:
     *    A String containing the domain.
     */
    getDomainFromJid: function (jid)
    {
        var bare = Strophe.getBareJidFromJid(jid);
        if (bare.indexOf("@") < 0) {
            return bare;
        } else {
            var parts = bare.split("@");
            parts.splice(0, 1);
            return parts.join('@');
        }
    },

    /** Function: getResourceFromJid
     *  Get the resource portion of a JID String.
     *
     *  Parameters:
     *    (String) jid - A JID.
     *
     *  Returns:
     *    A String containing the resource.
     */
    getResourceFromJid: function (jid)
    {
        var s = jid.split("/");
        if (s.length < 2) { return null; }
        s.splice(0, 1);
        return s.join('/');
    },

    /** Function: getBareJidFromJid
     *  Get the bare JID from a JID String.
     *
     *  Parameters:
     *    (String) jid - A JID.
     *
     *  Returns:
     *    A String containing the bare JID.
     */
    getBareJidFromJid: function (jid)
    {
        return jid ? jid.split("/")[0] : null;
    },

    /** Function: log
     *  User overrideable logging function.
     *
     *  This function is called whenever the Strophe library calls any
     *  of the logging functions.  The default implementation of this
     *  function does nothing.  If client code wishes to handle the logging
     *  messages, it should override this with
     *  > Strophe.log = function (level, msg) {
     *  >   (user code here)
     *  > };
     *
     *  Please note that data sent and received over the wire is logged
     *  via Strophe.Connection.rawInput() and Strophe.Connection.rawOutput().
     *
     *  The different levels and their meanings are
     *
     *    DEBUG - Messages useful for debugging purposes.
     *    INFO - Informational messages.  This is mostly information like
     *      'disconnect was called' or 'SASL auth succeeded'.
     *    WARN - Warnings about potential problems.  This is mostly used
     *      to report transient connection errors like request timeouts.
     *    ERROR - Some error occurred.
     *    FATAL - A non-recoverable fatal error occurred.
     *
     *  Parameters:
     *    (Integer) level - The log level of the log message.  This will
     *      be one of the values in Strophe.LogLevel.
     *    (String) msg - The log message.
     */
    log: function (level, msg)
    {
        return;
    },

    /** Function: debug
     *  Log a message at the Strophe.LogLevel.DEBUG level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    debug: function(msg)
    {
        this.log(this.LogLevel.DEBUG, msg);
    },

    /** Function: info
     *  Log a message at the Strophe.LogLevel.INFO level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    info: function (msg)
    {
        this.log(this.LogLevel.INFO, msg);
    },

    /** Function: warn
     *  Log a message at the Strophe.LogLevel.WARN level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    warn: function (msg)
    {
        this.log(this.LogLevel.WARN, msg);
    },

    /** Function: error
     *  Log a message at the Strophe.LogLevel.ERROR level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    error: function (msg)
    {
        this.log(this.LogLevel.ERROR, msg);
    },

    /** Function: fatal
     *  Log a message at the Strophe.LogLevel.FATAL level.
     *
     *  Parameters:
     *    (String) msg - The log message.
     */
    fatal: function (msg)
    {
        this.log(this.LogLevel.FATAL, msg);
    },

    /** Function: serialize
     *  Render a DOM element and all descendants to a String.
     *
     *  Parameters:
     *    (XMLElement) elem - A DOM element.
     *
     *  Returns:
     *    The serialized element tree as a String.
     */
    serialize: function (elem)
    {
        var result;

        if (!elem) { return null; }

        if (typeof(elem.tree) === "function") {
            elem = elem.tree();
        }

        var nodeName = elem.nodeName;
        var i, child;

        if (elem.getAttribute("_realname")) {
            nodeName = elem.getAttribute("_realname");
        }

        result = "<" + nodeName;
        for (i = 0; i < elem.attributes.length; i++) {
               if(elem.attributes[i].nodeName != "_realname") {
                 result += " " + elem.attributes[i].nodeName.toLowerCase() +
                "='" + elem.attributes[i].value
                    .replace(/&/g, "&amp;")
                       .replace(/\'/g, "&apos;")
                       .replace(/</g, "&lt;") + "'";
               }
        }

        if (elem.childNodes.length > 0) {
            result += ">";
            for (i = 0; i < elem.childNodes.length; i++) {
                child = elem.childNodes[i];
                switch( child.nodeType ){
                  case Strophe.ElementType.NORMAL:
                    // normal element, so recurse
                    result += Strophe.serialize(child);
                    break;
                  case Strophe.ElementType.TEXT:
                    // text element to escape values
                    result += Strophe.xmlescape(child.nodeValue);
                    break;
                  case Strophe.ElementType.CDATA:
                    // cdata section so don't escape values
                    result += "<![CDATA["+child.nodeValue+"]]>";
                }
            }
            result += "</" + nodeName + ">";
        } else {
            result += "/>";
        }

        return result;
    },

    /** PrivateVariable: _requestId
     *  _Private_ variable that keeps track of the request ids for
     *  connections.
     */
    _requestId: 0,

    /** PrivateVariable: Strophe.connectionPlugins
     *  _Private_ variable Used to store plugin names that need
     *  initialization on Strophe.Connection construction.
     */
    _connectionPlugins: {},

    /** Function: addConnectionPlugin
     *  Extends the Strophe.Connection object with the given plugin.
     *
     *  Parameters:
     *    (String) name - The name of the extension.
     *    (Object) ptype - The plugin's prototype.
     */
    addConnectionPlugin: function (name, ptype)
    {
        Strophe._connectionPlugins[name] = ptype;
    }
};

/** Class: Strophe.Builder
 *  XML DOM builder.
 *
 *  This object provides an interface similar to JQuery but for building
 *  DOM element easily and rapidly.  All the functions except for toString()
 *  and tree() return the object, so calls can be chained.  Here's an
 *  example using the $iq() builder helper.
 *  > $iq({to: 'you', from: 'me', type: 'get', id: '1'})
 *  >     .c('query', {xmlns: 'strophe:example'})
 *  >     .c('example')
 *  >     .toString()
 *  The above generates this XML fragment
 *  > <iq to='you' from='me' type='get' id='1'>
 *  >   <query xmlns='strophe:example'>
 *  >     <example/>
 *  >   </query>
 *  > </iq>
 *  The corresponding DOM manipulations to get a similar fragment would be
 *  a lot more tedious and probably involve several helper variables.
 *
 *  Since adding children makes new operations operate on the child, up()
 *  is provided to traverse up the tree.  To add two children, do
 *  > builder.c('child1', ...).up().c('child2', ...)
 *  The next operation on the Builder will be relative to the second child.
 */

/** Constructor: Strophe.Builder
 *  Create a Strophe.Builder object.
 *
 *  The attributes should be passed in object notation.  For example
 *  > var b = new Builder('message', {to: 'you', from: 'me'});
 *  or
 *  > var b = new Builder('messsage', {'xml:lang': 'en'});
 *
 *  Parameters:
 *    (String) name - The name of the root element.
 *    (Object) attrs - The attributes for the root element in object notation.
 *
 *  Returns:
 *    A new Strophe.Builder.
 */
Strophe.Builder = function (name, attrs)
{
    // Set correct namespace for jabber:client elements
    if (name == "presence" || name == "message" || name == "iq") {
        if (attrs && !attrs.xmlns) {
            attrs.xmlns = Strophe.NS.CLIENT;
        } else if (!attrs) {
            attrs = {xmlns: Strophe.NS.CLIENT};
        }
    }

    // Holds the tree being built.
    this.nodeTree = Strophe.xmlElement(name, attrs);

    // Points to the current operation node.
    this.node = this.nodeTree;
};

Strophe.Builder.prototype = {
    /** Function: tree
     *  Return the DOM tree.
     *
     *  This function returns the current DOM tree as an element object.  This
     *  is suitable for passing to functions like Strophe.Connection.send().
     *
     *  Returns:
     *    The DOM tree as a element object.
     */
    tree: function ()
    {
        return this.nodeTree;
    },

    /** Function: toString
     *  Serialize the DOM tree to a String.
     *
     *  This function returns a string serialization of the current DOM
     *  tree.  It is often used internally to pass data to a
     *  Strophe.Request object.
     *
     *  Returns:
     *    The serialized DOM tree in a String.
     */
    toString: function ()
    {
        return Strophe.serialize(this.nodeTree);
    },

    /** Function: up
     *  Make the current parent element the new current element.
     *
     *  This function is often used after c() to traverse back up the tree.
     *  For example, to add two children to the same element
     *  > builder.c('child1', {}).up().c('child2', {});
     *
     *  Returns:
     *    The Stophe.Builder object.
     */
    up: function ()
    {
        this.node = this.node.parentNode;
        return this;
    },

    /** Function: attrs
     *  Add or modify attributes of the current element.
     *
     *  The attributes should be passed in object notation.  This function
     *  does not move the current element pointer.
     *
     *  Parameters:
     *    (Object) moreattrs - The attributes to add/modify in object notation.
     *
     *  Returns:
     *    The Strophe.Builder object.
     */
    attrs: function (moreattrs)
    {
        for (var k in moreattrs) {
            if (moreattrs.hasOwnProperty(k)) {
                this.node.setAttribute(k, moreattrs[k]);
            }
        }
        return this;
    },

    /** Function: c
     *  Add a child to the current element and make it the new current
     *  element.
     *
     *  This function moves the current element pointer to the child,
     *  unless text is provided.  If you need to add another child, it
     *  is necessary to use up() to go back to the parent in the tree.
     *
     *  Parameters:
     *    (String) name - The name of the child.
     *    (Object) attrs - The attributes of the child in object notation.
     *    (String) text - The text to add to the child.
     *
     *  Returns:
     *    The Strophe.Builder object.
     */
    c: function (name, attrs, text)
    {
        var child = Strophe.xmlElement(name, attrs, text);
        this.node.appendChild(child);
        if (!text) {
            this.node = child;
        }
        return this;
    },

    /** Function: cnode
     *  Add a child to the current element and make it the new current
     *  element.
     *
     *  This function is the same as c() except that instead of using a
     *  name and an attributes object to create the child it uses an
     *  existing DOM element object.
     *
     *  Parameters:
     *    (XMLElement) elem - A DOM element.
     *
     *  Returns:
     *    The Strophe.Builder object.
     */
    cnode: function (elem)
    {
        var xmlGen = Strophe.xmlGenerator();
        try {
            var impNode = (xmlGen.importNode !== undefined);
        }
        catch (e) {
            var impNode = false;
        }
        var newElem = impNode ?
                      xmlGen.importNode(elem, true) :
                      Strophe.copyElement(elem);
        this.node.appendChild(newElem);
        this.node = newElem;
        return this;
    },

    /** Function: t
     *  Add a child text element.
     *
     *  This *does not* make the child the new current element since there
     *  are no children of text elements.
     *
     *  Parameters:
     *    (String) text - The text data to append to the current element.
     *
     *  Returns:
     *    The Strophe.Builder object.
     */
    t: function (text)
    {
        var child = Strophe.xmlTextNode(text);
        this.node.appendChild(child);
        return this;
    }
};


/** PrivateClass: Strophe.Handler
 *  _Private_ helper class for managing stanza handlers.
 *
 *  A Strophe.Handler encapsulates a user provided callback function to be
 *  executed when matching stanzas are received by the connection.
 *  Handlers can be either one-off or persistant depending on their
 *  return value. Returning true will cause a Handler to remain active, and
 *  returning false will remove the Handler.
 *
 *  Users will not use Strophe.Handler objects directly, but instead they
 *  will use Strophe.Connection.addHandler() and
 *  Strophe.Connection.deleteHandler().
 */

/** PrivateConstructor: Strophe.Handler
 *  Create and initialize a new Strophe.Handler.
 *
 *  Parameters:
 *    (Function) handler - A function to be executed when the handler is run.
 *    (String) ns - The namespace to match.
 *    (String) name - The element name to match.
 *    (String) type - The element type to match.
 *    (String) id - The element id attribute to match.
 *    (String) from - The element from attribute to match.
 *    (Object) options - Handler options
 *
 *  Returns:
 *    A new Strophe.Handler object.
 */
Strophe.Handler = function (handler, ns, name, type, id, from, options)
{
    this.handler = handler;
    this.ns = ns;
    this.name = name;
    this.type = type;
    this.id = id;
    this.options = options || {matchbare: false};

    // default matchBare to false if undefined
    if (!this.options.matchBare) {
        this.options.matchBare = false;
    }

    if (this.options.matchBare) {
        this.from = from ? Strophe.getBareJidFromJid(from) : null;
    } else {
        this.from = from;
    }

    // whether the handler is a user handler or a system handler
    this.user = true;
};

Strophe.Handler.prototype = {
    /** PrivateFunction: isMatch
     *  Tests if a stanza matches the Strophe.Handler.
     *
     *  Parameters:
     *    (XMLElement) elem - The XML element to test.
     *
     *  Returns:
     *    true if the stanza matches and false otherwise.
     */
    isMatch: function (elem)
    {
        var nsMatch;
        var from = null;

        if (this.options.matchBare) {
            from = Strophe.getBareJidFromJid(elem.getAttribute('from'));
        } else {
            from = elem.getAttribute('from');
        }

        nsMatch = false;
        if (!this.ns) {
            nsMatch = true;
        } else {
            var that = this;
            Strophe.forEachChild(elem, null, function (elem) {
                if (elem.getAttribute("xmlns") == that.ns) {
                    nsMatch = true;
                }
            });

            nsMatch = nsMatch || elem.getAttribute("xmlns") == this.ns;
        }

        if (nsMatch &&
            (!this.name || Strophe.isTagEqual(elem, this.name)) &&
            (!this.type || elem.getAttribute("type") == this.type) &&
            (!this.id || elem.getAttribute("id") == this.id) &&
            (!this.from || from == this.from)) {
                return true;
        }

        return false;
    },

    /** PrivateFunction: run
     *  Run the callback on a matching stanza.
     *
     *  Parameters:
     *    (XMLElement) elem - The DOM element that triggered the
     *      Strophe.Handler.
     *
     *  Returns:
     *    A boolean indicating if the handler should remain active.
     */
    run: function (elem)
    {
        var result = null;
        try {
            result = this.handler(elem);
        } catch (e) {
            if (e.sourceURL) {
                Strophe.fatal("error: " + this.handler +
                              " " + e.sourceURL + ":" +
                              e.line + " - " + e.name + ": " + e.message);
            } else if (e.fileName) {
                if (typeof(console) != "undefined") {
                    console.trace();
                    console.error(this.handler, " - error - ", e, e.message);
                }
                Strophe.fatal("error: " + this.handler + " " +
                              e.fileName + ":" + e.lineNumber + " - " +
                              e.name + ": " + e.message);
            } else {
                Strophe.fatal("error: " + this.handler);
            }

            throw e;
        }

        return result;
    },

    /** PrivateFunction: toString
     *  Get a String representation of the Strophe.Handler object.
     *
     *  Returns:
     *    A String.
     */
    toString: function ()
    {
        return "{Handler: " + this.handler + "(" + this.name + "," +
            this.id + "," + this.ns + ")}";
    }
};

/** PrivateClass: Strophe.TimedHandler
 *  _Private_ helper class for managing timed handlers.
 *
 *  A Strophe.TimedHandler encapsulates a user provided callback that
 *  should be called after a certain period of time or at regular
 *  intervals.  The return value of the callback determines whether the
 *  Strophe.TimedHandler will continue to fire.
 *
 *  Users will not use Strophe.TimedHandler objects directly, but instead
 *  they will use Strophe.Connection.addTimedHandler() and
 *  Strophe.Connection.deleteTimedHandler().
 */

/** PrivateConstructor: Strophe.TimedHandler
 *  Create and initialize a new Strophe.TimedHandler object.
 *
 *  Parameters:
 *    (Integer) period - The number of milliseconds to wait before the
 *      handler is called.
 *    (Function) handler - The callback to run when the handler fires.  This
 *      function should take no arguments.
 *
 *  Returns:
 *    A new Strophe.TimedHandler object.
 */
Strophe.TimedHandler = function (period, handler)
{
    this.period = period;
    this.handler = handler;

    this.lastCalled = new Date().getTime();
    this.user = true;
};

Strophe.TimedHandler.prototype = {
    /** PrivateFunction: run
     *  Run the callback for the Strophe.TimedHandler.
     *
     *  Returns:
     *    true if the Strophe.TimedHandler should be called again, and false
     *      otherwise.
     */
    run: function ()
    {
        this.lastCalled = new Date().getTime();
        return this.handler();
    },

    /** PrivateFunction: reset
     *  Reset the last called time for the Strophe.TimedHandler.
     */
    reset: function ()
    {
        this.lastCalled = new Date().getTime();
    },

    /** PrivateFunction: toString
     *  Get a string representation of the Strophe.TimedHandler object.
     *
     *  Returns:
     *    The string representation.
     */
    toString: function ()
    {
        return "{TimedHandler: " + this.handler + "(" + this.period +")}";
    }
};

/** PrivateClass: Strophe.Request
 *  _Private_ helper class that provides a cross implementation abstraction
 *  for a BOSH related XMLHttpRequest.
 *
 *  The Strophe.Request class is used internally to encapsulate BOSH request
 *  information.  It is not meant to be used from user's code.
 */

/** PrivateConstructor: Strophe.Request
 *  Create and initialize a new Strophe.Request object.
 *
 *  Parameters:
 *    (XMLElement) elem - The XML data to be sent in the request.
 *    (Function) func - The function that will be called when the
 *      XMLHttpRequest readyState changes.
 *    (Integer) rid - The BOSH rid attribute associated with this request.
 *    (Integer) sends - The number of times this same request has been
 *      sent.
 */
Strophe.Request = function (elem, func, rid, sends)
{
    this.id = ++Strophe._requestId;
    this.xmlData = elem;
    this.data = Strophe.serialize(elem);
    // save original function in case we need to make a new request
    // from this one.
    this.origFunc = func;
    this.func = func;
    this.rid = rid;
    this.date = NaN;
    this.sends = sends || 0;
    this.abort = false;
    this.dead = null;
    this.age = function () {
        if (!this.date) { return 0; }
        var now = new Date();
        return (now - this.date) / 1000;
    };
    this.timeDead = function () {
        if (!this.dead) { return 0; }
        var now = new Date();
        return (now - this.dead) / 1000;
    };
    this.xhr = this._newXHR();
};

Strophe.Request.prototype = {
    /** PrivateFunction: getResponse
     *  Get a response from the underlying XMLHttpRequest.
     *
     *  This function attempts to get a response from the request and checks
     *  for errors.
     *
     *  Throws:
     *    "parsererror" - A parser error occured.
     *
     *  Returns:
     *    The DOM element tree of the response.
     */
    getResponse: function ()
    {
        var node = null;
        if (this.xhr.responseXML && this.xhr.responseXML.documentElement) {
            node = this.xhr.responseXML.documentElement;
            if (node.tagName == "parsererror") {
                Strophe.error("invalid response received");
                Strophe.error("responseText: " + this.xhr.responseText);
                Strophe.error("responseXML: " +
                              Strophe.serialize(this.xhr.responseXML));
                throw "parsererror";
            }
        } else if (this.xhr.responseText) {
            Strophe.error("invalid response received");
            Strophe.error("responseText: " + this.xhr.responseText);
            Strophe.error("responseXML: " +
                          Strophe.serialize(this.xhr.responseXML));
        }

        return node;
    },

    /** PrivateFunction: _newXHR
     *  _Private_ helper function to create XMLHttpRequests.
     *
     *  This function creates XMLHttpRequests across all implementations.
     *
     *  Returns:
     *    A new XMLHttpRequest.
     */
    _newXHR: function ()
    {
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("text/xml");
            }
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        // use Function.bind() to prepend ourselves as an argument
        xhr.onreadystatechange = this.func.bind(null, this);

        return xhr;
    }
};

/** Class: Strophe.Connection
 *  XMPP Connection manager.
 *
 *  Thie class is the main part of Strophe.  It manages a BOSH connection
 *  to an XMPP server and dispatches events to the user callbacks as
 *  data arrives.  It supports SASL PLAIN, SASL DIGEST-MD5, and legacy
 *  authentication.
 *
 *  After creating a Strophe.Connection object, the user will typically
 *  call connect() with a user supplied callback to handle connection level
 *  events like authentication failure, disconnection, or connection
 *  complete.
 *
 *  The user will also have several event handlers defined by using
 *  addHandler() and addTimedHandler().  These will allow the user code to
 *  respond to interesting stanzas or do something periodically with the
 *  connection.  These handlers will be active once authentication is
 *  finished.
 *
 *  To send data to the connection, use send().
 */

/** Constructor: Strophe.Connection
 *  Create and initialize a Strophe.Connection object.
 *
 *  Parameters:
 *    (String) service - The BOSH service URL.
 *
 *  Returns:
 *    A new Strophe.Connection object.
 */
Strophe.Connection = function (service)
{
    /* The path to the httpbind service. */
    this.service = service;
    /* The connected JID. */
    this.jid = "";
    /* request id for body tags */
    this.rid = Math.floor(Math.random() * 4294967295);
    /* The current session ID. */
    this.sid = null;
    this.streamId = null;
    /* stream:features */
    this.features = null;

    // SASL
    this.do_session = false;
    this.do_bind = false;

    // handler lists
    this.timedHandlers = [];
    this.handlers = [];
    this.removeTimeds = [];
    this.removeHandlers = [];
    this.addTimeds = [];
    this.addHandlers = [];

    this._idleTimeout = null;
    this._disconnectTimeout = null;

    this.authenticated = false;
    this.disconnecting = false;
    this.connected = false;

    this.errors = 0;

    this.paused = false;

    // default BOSH values
    this.hold = 1;
    this.wait = 60;
    this.window = 5;

    this._data = [];
    this._requests = [];
    this._uniqueId = Math.round(Math.random() * 10000);

    this._sasl_success_handler = null;
    this._sasl_failure_handler = null;
    this._sasl_challenge_handler = null;

    // setup onIdle callback every 1/10th of a second
    this._idleTimeout = setTimeout(this._onIdle.bind(this), 100);

    // initialize plugins
    for (var k in Strophe._connectionPlugins) {
        if (Strophe._connectionPlugins.hasOwnProperty(k)) {
	    var ptype = Strophe._connectionPlugins[k];
            // jslint complaints about the below line, but this is fine
            var F = function () {};
            F.prototype = ptype;
            this[k] = new F();
	    this[k].init(this);
        }
    }
};

Strophe.Connection.prototype = {
    /** Function: reset
     *  Reset the connection.
     *
     *  This function should be called after a connection is disconnected
     *  before that connection is reused.
     */
    reset: function ()
    {
        this.rid = Math.floor(Math.random() * 4294967295);

        this.sid = null;
        this.streamId = null;

        // SASL
        this.do_session = false;
        this.do_bind = false;

        // handler lists
        this.timedHandlers = [];
        this.handlers = [];
        this.removeTimeds = [];
        this.removeHandlers = [];
        this.addTimeds = [];
        this.addHandlers = [];

        this.authenticated = false;
        this.disconnecting = false;
        this.connected = false;

        this.errors = 0;

        this._requests = [];
        this._uniqueId = Math.round(Math.random()*10000);
    },

    /** Function: pause
     *  Pause the request manager.
     *
     *  This will prevent Strophe from sending any more requests to the
     *  server.  This is very useful for temporarily pausing while a lot
     *  of send() calls are happening quickly.  This causes Strophe to
     *  send the data in a single request, saving many request trips.
     */
    pause: function ()
    {
        this.paused = true;
    },

    /** Function: resume
     *  Resume the request manager.
     *
     *  This resumes after pause() has been called.
     */
    resume: function ()
    {
        this.paused = false;
    },

    /** Function: getUniqueId
     *  Generate a unique ID for use in <iq/> elements.
     *
     *  All <iq/> stanzas are required to have unique id attributes.  This
     *  function makes creating these easy.  Each connection instance has
     *  a counter which starts from zero, and the value of this counter
     *  plus a colon followed by the suffix becomes the unique id. If no
     *  suffix is supplied, the counter is used as the unique id.
     *
     *  Suffixes are used to make debugging easier when reading the stream
     *  data, and their use is recommended.  The counter resets to 0 for
     *  every new connection for the same reason.  For connections to the
     *  same server that authenticate the same way, all the ids should be
     *  the same, which makes it easy to see changes.  This is useful for
     *  automated testing as well.
     *
     *  Parameters:
     *    (String) suffix - A optional suffix to append to the id.
     *
     *  Returns:
     *    A unique string to be used for the id attribute.
     */
    getUniqueId: function (suffix)
    {
        if (typeof(suffix) == "string" || typeof(suffix) == "number") {
            return ++this._uniqueId + ":" + suffix;
        } else {
            return ++this._uniqueId + "";
        }
    },

    /** Function: connect
     *  Starts the connection process.
     *
     *  As the connection process proceeds, the user supplied callback will
     *  be triggered multiple times with status updates.  The callback
     *  should take two arguments - the status code and the error condition.
     *
     *  The status code will be one of the values in the Strophe.Status
     *  constants.  The error condition will be one of the conditions
     *  defined in RFC 3920 or the condition 'strophe-parsererror'.
     *
     *  Please see XEP 124 for a more detailed explanation of the optional
     *  parameters below.
     *
     *  Parameters:
     *    (String) jid - The user's JID.  This may be a bare JID,
     *      or a full JID.  If a node is not supplied, SASL ANONYMOUS
     *      authentication will be attempted.
     *    (String) pass - The user's password.
     *    (Function) callback - The connect callback function.
     *    (Integer) wait - The optional HTTPBIND wait value.  This is the
     *      time the server will wait before returning an empty result for
     *      a request.  The default setting of 60 seconds is recommended.
     *      Other settings will require tweaks to the Strophe.TIMEOUT value.
     *    (Integer) hold - The optional HTTPBIND hold value.  This is the
     *      number of connections the server will hold at one time.  This
     *      should almost always be set to 1 (the default).
     */
    connect: function (jid, pass, callback, wait, hold)
    {
        this.jid = jid;
        this.pass = pass;
        this.connect_callback = callback;
        this.disconnecting = false;
        this.connected = false;
        this.authenticated = false;
        this.errors = 0;

        this.wait = wait || this.wait;
        this.hold = hold || this.hold;

        // parse jid for domain and resource
        this.domain = Strophe.getDomainFromJid(this.jid);

        // build the body tag
        var body = this._buildBody().attrs({
            to: this.domain,
            "xml:lang": "en",
            wait: this.wait,
            hold: this.hold,
            content: "text/xml; charset=utf-8",
            ver: "1.6",
            "xmpp:version": "1.0",
            "xmlns:xmpp": Strophe.NS.BOSH
        });

        this._changeConnectStatus(Strophe.Status.CONNECTING, null);

        this._requests.push(
            new Strophe.Request(body.tree(),
                                this._onRequestStateChange.bind(
                                    this, this._connect_cb.bind(this)),
                                body.tree().getAttribute("rid")));
        this._throttledRequestHandler();
    },

    /** Function: attach
     *  Attach to an already created and authenticated BOSH session.
     *
     *  This function is provided to allow Strophe to attach to BOSH
     *  sessions which have been created externally, perhaps by a Web
     *  application.  This is often used to support auto-login type features
     *  without putting user credentials into the page.
     *
     *  Parameters:
     *    (String) jid - The full JID that is bound by the session.
     *    (String) sid - The SID of the BOSH session.
     *    (String) rid - The current RID of the BOSH session.  This RID
     *      will be used by the next request.
     *    (Function) callback The connect callback function.
     *    (Integer) wait - The optional HTTPBIND wait value.  This is the
     *      time the server will wait before returning an empty result for
     *      a request.  The default setting of 60 seconds is recommended.
     *      Other settings will require tweaks to the Strophe.TIMEOUT value.
     *    (Integer) hold - The optional HTTPBIND hold value.  This is the
     *      number of connections the server will hold at one time.  This
     *      should almost always be set to 1 (the default).
     *    (Integer) wind - The optional HTTBIND window value.  This is the
     *      allowed range of request ids that are valid.  The default is 5.
     */
    attach: function (jid, sid, rid, callback, wait, hold, wind)
    {
        this.jid = jid;
        this.sid = sid;
        this.rid = rid;
        this.connect_callback = callback;

        this.domain = Strophe.getDomainFromJid(this.jid);

        this.authenticated = true;
        this.connected = true;

        this.wait = wait || this.wait;
        this.hold = hold || this.hold;
        this.window = wind || this.window;

        this._changeConnectStatus(Strophe.Status.ATTACHED, null);
    },

    /** Function: xmlInput
     *  User overrideable function that receives XML data coming into the
     *  connection.
     *
     *  The default function does nothing.  User code can override this with
     *  > Strophe.Connection.xmlInput = function (elem) {
     *  >   (user code)
     *  > };
     *
     *  Parameters:
     *    (XMLElement) elem - The XML data received by the connection.
     */
    xmlInput: function (elem)
    {
        return;
    },

    /** Function: xmlOutput
     *  User overrideable function that receives XML data sent to the
     *  connection.
     *
     *  The default function does nothing.  User code can override this with
     *  > Strophe.Connection.xmlOutput = function (elem) {
     *  >   (user code)
     *  > };
     *
     *  Parameters:
     *    (XMLElement) elem - The XMLdata sent by the connection.
     */
    xmlOutput: function (elem)
    {
        return;
    },

    /** Function: rawInput
     *  User overrideable function that receives raw data coming into the
     *  connection.
     *
     *  The default function does nothing.  User code can override this with
     *  > Strophe.Connection.rawInput = function (data) {
     *  >   (user code)
     *  > };
     *
     *  Parameters:
     *    (String) data - The data received by the connection.
     */
    rawInput: function (data)
    {
        return;
    },

    /** Function: rawOutput
     *  User overrideable function that receives raw data sent to the
     *  connection.
     *
     *  The default function does nothing.  User code can override this with
     *  > Strophe.Connection.rawOutput = function (data) {
     *  >   (user code)
     *  > };
     *
     *  Parameters:
     *    (String) data - The data sent by the connection.
     */
    rawOutput: function (data)
    {
        return;
    },

    /** Function: send
     *  Send a stanza.
     *
     *  This function is called to push data onto the send queue to
     *  go out over the wire.  Whenever a request is sent to the BOSH
     *  server, all pending data is sent and the queue is flushed.
     *
     *  Parameters:
     *    (XMLElement |
     *     [XMLElement] |
     *     Strophe.Builder) elem - The stanza to send.
     */
    send: function (elem)
    {
        if (elem === null) { return ; }

        var callbackObj = {};


        

        if (typeof(elem.sort) === "function") {
            for (var i = 0; i < elem.length; i++) {
                this._queueData(elem[i],callbackObj);
            }
        } else if (typeof(elem.tree) === "function") {
            this._queueData(elem.tree(),callbackObj);
        } else {
            this._queueData(elem,callbackObj);
        }

        this._throttledRequestHandler();
        clearTimeout(this._idleTimeout);
        this._idleTimeout = setTimeout(this._onIdle.bind(this), 100);
        
        return { success: function(fn) { callbackObj.success = fn; return this; },error: function(fn) { callbackObj.error = fn; return this; } }
        
    },

    /** Function: flush
     *  Immediately send any pending outgoing data.
     *
     *  Normally send() queues outgoing data until the next idle period
     *  (100ms), which optimizes network use in the common cases when
     *  several send()s are called in succession. flush() can be used to
     *  immediately send all pending data.
     */
    flush: function ()
    {
        // cancel the pending idle period and run the idle function
        // immediately
        clearTimeout(this._idleTimeout);
        this._onIdle();
    },

    /** Function: sendIQ
     *  Helper function to send IQ stanzas.
     *
     *  Parameters:
     *    (XMLElement) elem - The stanza to send.
     *    (Function) callback - The callback function for a successful request.
     *    (Function) errback - The callback function for a failed or timed
     *      out request.  On timeout, the stanza will be null.
     *    (Integer) timeout - The time specified in milliseconds for a
     *      timeout to occur.
     *
     *  Returns:
     *    The id used to send the IQ.
    */
    sendIQ: function(elem, callback, errback, timeout) {
        var timeoutHandler = null;
        var that = this;

        if (typeof(elem.tree) === "function") {
            elem = elem.tree();
        }
	var id = elem.getAttribute('id');

	// inject id if not found
	if (!id) {
	    id = this.getUniqueId("sendIQ");
	    elem.setAttribute("id", id);
	}

	var handler = this.addHandler(function (stanza) {
	    // remove timeout handler if there is one
            if (timeoutHandler) {
                that.deleteTimedHandler(timeoutHandler);
            }

            var iqtype = stanza.getAttribute('type');
	    if (iqtype == 'result') {
		if (callback) {
                    callback(stanza);
                }
	    } else if (iqtype == 'error') {
		if (errback) {
                    errback(stanza);
                }
	    } else {
                throw {
                    name: "StropheError",
                    message: "Got bad IQ type of " + iqtype
                };
            }
	}, null, 'iq', null, id);

	// if timeout specified, setup timeout handler.
	if (timeout) {
	    timeoutHandler = this.addTimedHandler(timeout, function () {
                // get rid of normal handler
                that.deleteHandler(handler);

	        // call errback on timeout with null stanza
                if (errback) {
		    errback(null);
                }
		return false;
	    });
	}

	this.send(elem);

	return id;
    },

    /** PrivateFunction: _queueData
     *  Queue outgoing data for later sending.  Also ensures that the data
     *  is a DOMElement.
     */
    _queueData: function (element,callbackObj) {
        if (element === null ||
            !element.tagName ||
            !element.childNodes) {
            throw {
                name: "StropheError",
                message: "Cannot queue non-DOMElement."
            };
        }
        
        element.callbacks = callbackObj; 
         
        this._data.push(element);
    },

    /** PrivateFunction: _sendRestart
     *  Send an xmpp:restart stanza.
     */
    _sendRestart: function ()
    {
        this._data.push("restart");

        this._throttledRequestHandler();
        clearTimeout(this._idleTimeout);
        this._idleTimeout = setTimeout(this._onIdle.bind(this), 100);
    },

    /** Function: addTimedHandler
     *  Add a timed handler to the connection.
     *
     *  This function adds a timed handler.  The provided handler will
     *  be called every period milliseconds until it returns false,
     *  the connection is terminated, or the handler is removed.  Handlers
     *  that wish to continue being invoked should return true.
     *
     *  Because of method binding it is necessary to save the result of
     *  this function if you wish to remove a handler with
     *  deleteTimedHandler().
     *
     *  Note that user handlers are not active until authentication is
     *  successful.
     *
     *  Parameters:
     *    (Integer) period - The period of the handler.
     *    (Function) handler - The callback function.
     *
     *  Returns:
     *    A reference to the handler that can be used to remove it.
     */
    addTimedHandler: function (period, handler)
    {
        var thand = new Strophe.TimedHandler(period, handler);
        this.addTimeds.push(thand);
        return thand;
    },

    /** Function: deleteTimedHandler
     *  Delete a timed handler for a connection.
     *
     *  This function removes a timed handler from the connection.  The
     *  handRef parameter is *not* the function passed to addTimedHandler(),
     *  but is the reference returned from addTimedHandler().
     *
     *  Parameters:
     *    (Strophe.TimedHandler) handRef - The handler reference.
     */
    deleteTimedHandler: function (handRef)
    {
        // this must be done in the Idle loop so that we don't change
        // the handlers during iteration
        this.removeTimeds.push(handRef);
    },

    /** Function: addHandler
     *  Add a stanza handler for the connection.
     *
     *  This function adds a stanza handler to the connection.  The
     *  handler callback will be called for any stanza that matches
     *  the parameters.  Note that if multiple parameters are supplied,
     *  they must all match for the handler to be invoked.
     *
     *  The handler will receive the stanza that triggered it as its argument.
     *  The handler should return true if it is to be invoked again;
     *  returning false will remove the handler after it returns.
     *
     *  As a convenience, the ns parameters applies to the top level element
     *  and also any of its immediate children.  This is primarily to make
     *  matching /iq/query elements easy.
     *
     *  The options argument contains handler matching flags that affect how
     *  matches are determined. Currently the only flag is matchBare (a
     *  boolean). When matchBare is true, the from parameter and the from
     *  attribute on the stanza will be matched as bare JIDs instead of
     *  full JIDs. To use this, pass {matchBare: true} as the value of
     *  options. The default value for matchBare is false.
     *
     *  The return value should be saved if you wish to remove the handler
     *  with deleteHandler().
     *
     *  Parameters:
     *    (Function) handler - The user callback.
     *    (String) ns - The namespace to match.
     *    (String) name - The stanza name to match.
     *    (String) type - The stanza type attribute to match.
     *    (String) id - The stanza id attribute to match.
     *    (String) from - The stanza from attribute to match.
     *    (String) options - The handler options
     *
     *  Returns:
     *    A reference to the handler that can be used to remove it.
     */
    addHandler: function (handler, ns, name, type, id, from, options)
    {
        var hand = new Strophe.Handler(handler, ns, name, type, id, from, options);
        this.addHandlers.push(hand);
        return hand;
    },

    /** Function: deleteHandler
     *  Delete a stanza handler for a connection.
     *
     *  This function removes a stanza handler from the connection.  The
     *  handRef parameter is *not* the function passed to addHandler(),
     *  but is the reference returned from addHandler().
     *
     *  Parameters:
     *    (Strophe.Handler) handRef - The handler reference.
     */
    deleteHandler: function (handRef)
    {
        // this must be done in the Idle loop so that we don't change
        // the handlers during iteration
        this.removeHandlers.push(handRef);
    },

    /** Function: disconnect
     *  Start the graceful disconnection process.
     *
     *  This function starts the disconnection process.  This process starts
     *  by sending unavailable presence and sending BOSH body of type
     *  terminate.  A timeout handler makes sure that disconnection happens
     *  even if the BOSH server does not respond.
     *
     *  The user supplied connection callback will be notified of the
     *  progress as this process happens.
     *
     *  Parameters:
     *    (String) reason - The reason the disconnect is occuring.
     */
    disconnect: function (reason)
    {
        this._changeConnectStatus(Strophe.Status.DISCONNECTING, reason);

        Strophe.info("Disconnect was called because: " + reason);
        if (this.connected) {
            // setup timeout handler
            this._disconnectTimeout = this._addSysTimedHandler(
                3000, this._onDisconnectTimeout.bind(this));
            this._sendTerminate();
        }
    },

    /** PrivateFunction: _changeConnectStatus
     *  _Private_ helper function that makes sure plugins and the user's
     *  callback are notified of connection status changes.
     *
     *  Parameters:
     *    (Integer) status - the new connection status, one of the values
     *      in Strophe.Status
     *    (String) condition - the error condition or null
     */
    _changeConnectStatus: function (status, condition)
    {
        // notify all plugins listening for status changes
        for (var k in Strophe._connectionPlugins) {
            if (Strophe._connectionPlugins.hasOwnProperty(k)) {
                var plugin = this[k];
                if (plugin.statusChanged) {
                    try {
                        plugin.statusChanged(status, condition);
                    } catch (err) {
                        Strophe.error("" + k + " plugin caused an exception " +
                                      "changing status: " + err);
                    }
                }
            }
        }

        // notify the user's callback
        if (this.connect_callback) {
            try {
                this.connect_callback(status, condition);
            } catch (e) {
                Strophe.error("User connection callback caused an " +
                              "exception: " + e);
            }
        }
    },

    /** PrivateFunction: _buildBody
     *  _Private_ helper function to generate the <body/> wrapper for BOSH.
     *
     *  Returns:
     *    A Strophe.Builder with a <body/> element.
     */
    _buildBody: function ()
    {
        var bodyWrap = $build('body', {
            rid: this.rid++,
            xmlns: Strophe.NS.HTTPBIND
        });

        if (this.sid !== null) {
            bodyWrap.attrs({sid: this.sid});
        }

        return bodyWrap;
    },

    /** PrivateFunction: _removeRequest
     *  _Private_ function to remove a request from the queue.
     *
     *  Parameters:
     *    (Strophe.Request) req - The request to remove.
     */
    _removeRequest: function (req)
    {
        Strophe.debug("removing request");

        var i;
        for (i = this._requests.length - 1; i >= 0; i--) {
            if (req == this._requests[i]) {
                this._requests.splice(i, 1);
            }
        }

        // IE6 fails on setting to null, so set to empty function
        req.xhr.onreadystatechange = function () {};

        this._throttledRequestHandler();
    },

    /** PrivateFunction: _restartRequest
     *  _Private_ function to restart a request that is presumed dead.
     *
     *  Parameters:
     *    (Integer) i - The index of the request in the queue.
     */
    _restartRequest: function (i)
    {
        var req = this._requests[i];
        if (req.dead === null) {
            req.dead = new Date();
        }

        this._processRequest(i);
    },

    /** PrivateFunction: _processRequest
     *  _Private_ function to process a request in the queue.
     *
     *  This function takes requests off the queue and sends them and
     *  restarts dead requests.
     *
     *  Parameters:
     *    (Integer) i - The index of the request in the queue.
     */
    _processRequest: function (i)
    {
        var req = this._requests[i];
        var reqStatus = -1;

        try {
            if (req.xhr.readyState == 4) {
                reqStatus = req.xhr.status;
            }
        } catch (e) {
            Strophe.error("caught an error in _requests[" + i +
                          "], reqStatus: " + reqStatus);
        }

        if (typeof(reqStatus) == "undefined") {
            reqStatus = -1;
        }

        // make sure we limit the number of retries
        if (req.sends > 5) {
            this._onDisconnectTimeout();
            return;
        }

        var time_elapsed = req.age();
        var primaryTimeout = (!isNaN(time_elapsed) &&
                              time_elapsed > Math.floor(Strophe.TIMEOUT * this.wait));
        var secondaryTimeout = (req.dead !== null &&
                                req.timeDead() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait));
        var requestCompletedWithServerError = (req.xhr.readyState == 4 &&
                                               (reqStatus < 1 ||
                                                reqStatus >= 500));
        if (primaryTimeout || secondaryTimeout ||
            requestCompletedWithServerError) {
            if (secondaryTimeout) {
                Strophe.error("Request " +
                              this._requests[i].id +
                              " timed out (secondary), restarting");
            }
            req.abort = true;
            req.xhr.abort();
            // setting to null fails on IE6, so set to empty function
            req.xhr.onreadystatechange = function () {};
            this._requests[i] = new Strophe.Request(req.xmlData,
                                                    req.origFunc,
                                                    req.rid,
                                                    req.sends);
            req = this._requests[i];
        }

        if (req.xhr.readyState === 0) {
            Strophe.debug("request id " + req.id +
                          "." + req.sends + " posting");

            try {
                req.xhr.open("POST", this.service, true);
            } catch (e2) {
                Strophe.error("XHR open failed.");
                if (!this.connected) {
                    this._changeConnectStatus(Strophe.Status.CONNFAIL,
                                              "bad-service");
                }
                this.disconnect();
                return;
            }

            // Fires the XHR request -- may be invoked immediately
            // or on a gradually expanding retry window for reconnects
            var sendFunc = function () {
                req.date = new Date();
                req.xhr.send(req.data);
            };

            // Implement progressive backoff for reconnects --
            // First retry (send == 1) should also be instantaneous
            if (req.sends > 1) {
                // Using a cube of the retry number creates a nicely
                // expanding retry window
                var backoff = Math.min(Math.floor(Strophe.TIMEOUT * this.wait),
                                       Math.pow(req.sends, 3)) * 1000;
                setTimeout(sendFunc, backoff);
            } else {
                sendFunc();
            }

            req.sends++;

            if (this.xmlOutput !== Strophe.Connection.prototype.xmlOutput) {
                this.xmlOutput(req.xmlData);
            }
            if (this.rawOutput !== Strophe.Connection.prototype.rawOutput) {
                this.rawOutput(req.data);
            }
        } else {
            Strophe.debug("_processRequest: " +
                          (i === 0 ? "first" : "second") +
                          " request has readyState of " +
                          req.xhr.readyState);
        }
    },

    /** PrivateFunction: _throttledRequestHandler
     *  _Private_ function to throttle requests to the connection window.
     *
     *  This function makes sure we don't send requests so fast that the
     *  request ids overflow the connection window in the case that one
     *  request died.
     */
    _throttledRequestHandler: function ()
    {
        if (!this._requests) {
            Strophe.debug("_throttledRequestHandler called with " +
                          "undefined requests");
        } else {
            Strophe.debug("_throttledRequestHandler called with " +
                          this._requests.length + " requests");
        }

        if (!this._requests || this._requests.length === 0) {
            return;
        }

        if (this._requests.length > 0) {
            this._processRequest(0);
        }

        if (this._requests.length > 1 &&
            Math.abs(this._requests[0].rid -
                     this._requests[1].rid) < this.window) {
            this._processRequest(1);
        }
    },

    /** PrivateFunction: _onRequestStateChange
     *  _Private_ handler for Strophe.Request state changes.
     *
     *  This function is called when the XMLHttpRequest readyState changes.
     *  It contains a lot of error handling logic for the many ways that
     *  requests can fail, and calls the request callback when requests
     *  succeed.
     *
     *  Parameters:
     *    (Function) func - The handler for the request.
     *    (Strophe.Request) req - The request that is changing readyState.
     */
    _onRequestStateChange: function (func, req)
    {
        Strophe.debug("request id " + req.id +
                      "." + req.sends + " state changed to " +
                      req.xhr.readyState);

        if (req.abort) {
            req.abort = false;
            return;
        }

        // request complete
        var reqStatus;
        if (req.xhr.readyState == 4) {
            reqStatus = 0;
            try {
                reqStatus = req.xhr.status;
            } catch (e) {
                // ignore errors from undefined status attribute.  works
                // around a browser bug
            }

            if (typeof(reqStatus) == "undefined") {
                reqStatus = 0;
            }

            if (this.disconnecting) {
                if (reqStatus >= 400) {
                    this._hitError(reqStatus);
                    return;
                }
            }

            var reqIs0 = (this._requests[0] == req);
            var reqIs1 = (this._requests[1] == req);

            if ((reqStatus > 0 && reqStatus < 500) || req.sends > 5) {
                // remove from internal queue
                this._removeRequest(req);
                Strophe.debug("request id " +
                              req.id +
                              " should now be removed");
            }

            // request succeeded
            if (reqStatus == 200) {
                // if request 1 finished, or request 0 finished and request
                // 1 is over Strophe.SECONDARY_TIMEOUT seconds old, we need to
                // restart the other - both will be in the first spot, as the
                // completed request has been removed from the queue already
                if (reqIs1 ||
                    (reqIs0 && this._requests.length > 0 &&
                     this._requests[0].age() > Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait))) {
                    this._restartRequest(0);
                }
                // call handler
                Strophe.debug("request id " +
                              req.id + "." +
                              req.sends + " got 200");
                func(req);
                this.errors = 0;
            } else {
                //HTTP Error on Request calling CB STACK
                this._execCBStack(this._callbackStack,false)
                Strophe.error("request id " +
                              req.id + "." +
                              req.sends + " error " + reqStatus +
                              " happened");
                if (reqStatus === 0 ||
                    (reqStatus >= 400 && reqStatus < 600) ||
                    reqStatus >= 12000) {
                    this._hitError(reqStatus);
                    if (reqStatus >= 400 && reqStatus < 500) {
                        this._changeConnectStatus(Strophe.Status.DISCONNECTING,
                                                  null);
                        this._doDisconnect();
                    }
                }
            }

            if (!((reqStatus > 0 && reqStatus < 500) ||
                  req.sends > 5)) {
                this._throttledRequestHandler();
            }
        }
    },

    /** PrivateFunction: _hitError
     *  _Private_ function to handle the error count.
     *
     *  Requests are resent automatically until their error count reaches
     *  5.  Each time an error is encountered, this function is called to
     *  increment the count and disconnect if the count is too high.
     *
     *  Parameters:
     *    (Integer) reqStatus - The request status.
     */
    _hitError: function (reqStatus)
    {
        this.errors++;
        Strophe.warn("request errored, status: " + reqStatus +
                     ", number of errors: " + this.errors);
        if (this.errors > 4) {
            this._onDisconnectTimeout();
        }
    },

    /** PrivateFunction: _doDisconnect
     *  _Private_ function to disconnect.
     *
     *  This is the last piece of the disconnection logic.  This resets the
     *  connection and alerts the user's connection callback.
     */
    _doDisconnect: function ()
    {
        Strophe.info("_doDisconnect was called");
        this.authenticated = false;
        this.disconnecting = false;
        this.sid = null;
        this.streamId = null;
        this.rid = Math.floor(Math.random() * 4294967295);

        // tell the parent we disconnected
        if (this.connected) {
            this._changeConnectStatus(Strophe.Status.DISCONNECTED, null);
            this.connected = false;
        }

        // delete handlers
        this.handlers = [];
        this.timedHandlers = [];
        this.removeTimeds = [];
        this.removeHandlers = [];
        this.addTimeds = [];
        this.addHandlers = [];
    },
    
    _execCBStack: function(objArray,bool) {
      if (typeof objArray !== "object") { return; }
        var _type = (bool) ? "success" : "error";
        objArray.reverse();
        while (objArray.length > 0) { 
          var fns = objArray.pop(); 
          if ((fns.hasOwnProperty(_type)) && (typeof fns[_type] === "function")) { fns[_type](); } 
          //memory leak curtailing?
          fns = null;
        }
      

    },

    /** PrivateFunction: _dataRecv
     *  _Private_ handler to processes incoming data from the the connection.
     *
     *  Except for _connect_cb handling the initial connection request,
     *  this function handles the incoming data for all requests.  This
     *  function also fires stanza handlers that match each incoming
     *  stanza.
     *
     *  Parameters:
     *    (Strophe.Request) req - The request that has data ready.
     */
    _dataRecv: function (req)
    {
        try {
            var elem = req.getResponse();
        } catch (e) {
            if (e != "parsererror") { throw e; }
            this.disconnect("strophe-parsererror");
        }
        if (elem === null) { return; }

        if (this.xmlInput !== Strophe.Connection.prototype.xmlInput) {
            this.xmlInput(elem);
        }
        if (this.rawInput !== Strophe.Connection.prototype.rawInput) {
            this.rawInput(Strophe.serialize(elem));
        }

        // remove handlers scheduled for deletion
        var i, hand;
        while (this.removeHandlers.length > 0) {
            hand = this.removeHandlers.pop();
            i = this.handlers.indexOf(hand);
            if (i >= 0) {
                this.handlers.splice(i, 1);
            }
        }

        // add handlers scheduled for addition
        while (this.addHandlers.length > 0) {
            this.handlers.push(this.addHandlers.pop());
        }

        // handle graceful disconnect
        if (this.disconnecting && this._requests.length === 0) {
            this.deleteTimedHandler(this._disconnectTimeout);
            this._disconnectTimeout = null;
            this._doDisconnect();
            return;
        }

        var typ = elem.getAttribute("type");
        var cond, conflict;
        if (typ !== null && typ == "terminate") {

        // Exec CallBack Stack, HTTP 200 _BUT_ error between client and server!
        this._execCBStack(this._callbackStack,false);


            // Don't process stanzas that come in after disconnect
            if (this.disconnecting) {
                return;
            }

            // an error occurred
            cond = elem.getAttribute("condition");
            conflict = elem.getElementsByTagName("conflict");
            if (cond !== null) {
                if (cond == "remote-stream-error" && conflict.length > 0) {
                    cond = "conflict";
                }
                this._changeConnectStatus(Strophe.Status.CONNFAIL, cond);
            } else {
                this._changeConnectStatus(Strophe.Status.CONNFAIL, "unknown");
            }
            this.disconnect();
            return;
        }

        // Exec CallBack Stack, assuming no errors at this point
        this._execCBStack(this._callbackStack,true);

        // send each incoming stanza through the handler chain
        var that = this;
        Strophe.forEachChild(elem, null, function (child) {
            var i, newList;
            // process handlers
            newList = that.handlers;
            that.handlers = [];
            for (i = 0; i < newList.length; i++) {
                var hand = newList[i];
                // encapsulate 'handler.run' not to lose the whole handler list if
                // one of the handlers throws an exception
                try {
                    if (hand.isMatch(child) &&
                        (that.authenticated || !hand.user)) {
                        if (hand.run(child)) {
                            that.handlers.push(hand);
                        }
                    } else {
                        that.handlers.push(hand);
                    }
                } catch(e) {
                    //if the handler throws an exception, we consider it as false
                }
            }
        });
    },

    /** PrivateFunction: _sendTerminate
     *  _Private_ function to send initial disconnect sequence.
     *
     *  This is the first step in a graceful disconnect.  It sends
     *  the BOSH server a terminate body and includes an unavailable
     *  presence if authentication has completed.
     */
    _sendTerminate: function ()
    {
        Strophe.info("_sendTerminate was called");
        var body = this._buildBody().attrs({type: "terminate"});

        if (this.authenticated) {
            body.c('presence', {
                xmlns: Strophe.NS.CLIENT,
                type: 'unavailable'
            });
        }

        this.disconnecting = true;

        var req = new Strophe.Request(body.tree(),
                                      this._onRequestStateChange.bind(
                                          this, this._dataRecv.bind(this)),
                                      body.tree().getAttribute("rid"));

        this._requests.push(req);
        this._throttledRequestHandler();
    },

    /** PrivateFunction: _connect_cb
     *  _Private_ handler for initial connection request.
     *
     *  This handler is used to process the initial connection request
     *  response from the BOSH server. It is used to set up authentication
     *  handlers and start the authentication process.
     *
     *  SASL authentication will be attempted if available, otherwise
     *  the code will fall back to legacy authentication.
     *
     *  Parameters:
     *    (Strophe.Request) req - The current request.
     */
    _connect_cb: function (req)
    {
        Strophe.info("_connect_cb was called");

        this.connected = true;
        var bodyWrap = req.getResponse();
        if (!bodyWrap) { return; }

        if (this.xmlInput !== Strophe.Connection.prototype.xmlInput) {
            this.xmlInput(bodyWrap);
        }
        if (this.rawInput !== Strophe.Connection.prototype.rawInput) {
            this.rawInput(Strophe.serialize(bodyWrap));
        }

        var typ = bodyWrap.getAttribute("type");
        var cond, conflict;
        if (typ !== null && typ == "terminate") {
            // an error occurred
            cond = bodyWrap.getAttribute("condition");
            conflict = bodyWrap.getElementsByTagName("conflict");
            if (cond !== null) {
                if (cond == "remote-stream-error" && conflict.length > 0) {
                    cond = "conflict";
                }
                this._changeConnectStatus(Strophe.Status.CONNFAIL, cond);
            } else {
                this._changeConnectStatus(Strophe.Status.CONNFAIL, "unknown");
            }
            return;
        }

        // check to make sure we don't overwrite these if _connect_cb is
        // called multiple times in the case of missing stream:features
        if (!this.sid) {
            this.sid = bodyWrap.getAttribute("sid");
        }
        if (!this.stream_id) {
            this.stream_id = bodyWrap.getAttribute("authid");
        }
        var wind = bodyWrap.getAttribute('requests');
        if (wind) { this.window = parseInt(wind, 10); }
        var hold = bodyWrap.getAttribute('hold');
        if (hold) { this.hold = parseInt(hold, 10); }
        var wait = bodyWrap.getAttribute('wait');
        if (wait) { this.wait = parseInt(wait, 10); }


        var do_sasl_plain = false;
        var do_sasl_digest_md5 = false;
        var do_sasl_anonymous = false;

        var mechanisms = bodyWrap.getElementsByTagName("mechanism");
        var i, mech, auth_str, hashed_auth_str;
        if (mechanisms.length > 0) {
            for (i = 0; i < mechanisms.length; i++) {
                mech = Strophe.getText(mechanisms[i]);
                if (mech == 'DIGEST-MD5') {
                    do_sasl_digest_md5 = true;
                } else if (mech == 'PLAIN') {
                    do_sasl_plain = true;
                } else if (mech == 'ANONYMOUS') {
                    do_sasl_anonymous = true;
                }
            }
        } else {
            // we didn't get stream:features yet, so we need wait for it
            // by sending a blank poll request
            var body = this._buildBody();
            this._requests.push(
                new Strophe.Request(body.tree(),
                                    this._onRequestStateChange.bind(
                                        this, this._connect_cb.bind(this)),
                                    body.tree().getAttribute("rid")));
            this._throttledRequestHandler();
            return;
        }

        if (Strophe.getNodeFromJid(this.jid) === null &&
            do_sasl_anonymous) {
            this._changeConnectStatus(Strophe.Status.AUTHENTICATING, null);
            this._sasl_success_handler = this._addSysHandler(
                this._sasl_success_cb.bind(this), null,
                "success", null, null);
            this._sasl_failure_handler = this._addSysHandler(
                this._sasl_failure_cb.bind(this), null,
                "failure", null, null);

            this.send($build("auth", {
                xmlns: Strophe.NS.SASL,
                mechanism: "ANONYMOUS"
            }).tree());
        } else if (Strophe.getNodeFromJid(this.jid) === null) {
            // we don't have a node, which is required for non-anonymous
            // client connections
            this._changeConnectStatus(Strophe.Status.CONNFAIL,
                                      'x-strophe-bad-non-anon-jid');
            this.disconnect();
        } else if (do_sasl_digest_md5) {
            this._changeConnectStatus(Strophe.Status.AUTHENTICATING, null);
            this._sasl_challenge_handler = this._addSysHandler(
                this._sasl_challenge1_cb.bind(this), null,
                "challenge", null, null);
            this._sasl_failure_handler = this._addSysHandler(
                this._sasl_failure_cb.bind(this), null,
                "failure", null, null);

            this.send($build("auth", {
                xmlns: Strophe.NS.SASL,
                mechanism: "DIGEST-MD5"
            }).tree());
        } else if (do_sasl_plain) {
            // Build the plain auth string (barejid null
            // username null password) and base 64 encoded.
            auth_str = Strophe.getBareJidFromJid(this.jid);
            auth_str = auth_str + "\u0000";
            auth_str = auth_str + Strophe.getNodeFromJid(this.jid);
            auth_str = auth_str + "\u0000";
            auth_str = auth_str + this.pass;

            this._changeConnectStatus(Strophe.Status.AUTHENTICATING, null);
            this._sasl_success_handler = this._addSysHandler(
                this._sasl_success_cb.bind(this), null,
                "success", null, null);
            this._sasl_failure_handler = this._addSysHandler(
                this._sasl_failure_cb.bind(this), null,
                "failure", null, null);

            hashed_auth_str = Base64.encode(auth_str);
            this.send($build("auth", {
                xmlns: Strophe.NS.SASL,
                mechanism: "PLAIN"
            }).t(hashed_auth_str).tree());
        } else {
            this._changeConnectStatus(Strophe.Status.AUTHENTICATING, null);
            this._addSysHandler(this._auth1_cb.bind(this), null, null,
                                null, "_auth_1");

            this.send($iq({
                type: "get",
                to: this.domain,
                id: "_auth_1"
            }).c("query", {
                xmlns: Strophe.NS.AUTH
            }).c("username", {}).t(Strophe.getNodeFromJid(this.jid)).tree());
        }
    },

    /** PrivateFunction: _sasl_challenge1_cb
     *  _Private_ handler for DIGEST-MD5 SASL authentication.
     *
     *  Parameters:
     *    (XMLElement) elem - The challenge stanza.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _sasl_challenge1_cb: function (elem)
    {
        var attribMatch = /([a-z]+)=("[^"]+"|[^,"]+)(?:,|$)/;

        var challenge = Base64.decode(Strophe.getText(elem));
        var cnonce = MD5.hexdigest("" + (Math.random() * 1234567890));
        var realm = "";
        var host = null;
        var nonce = "";
        var qop = "";
        var matches;

        // remove unneeded handlers
        this.deleteHandler(this._sasl_failure_handler);

        while (challenge.match(attribMatch)) {
            matches = challenge.match(attribMatch);
            challenge = challenge.replace(matches[0], "");
            matches[2] = matches[2].replace(/^"(.+)"$/, "$1");
            switch (matches[1]) {
            case "realm":
                realm = matches[2];
                break;
            case "nonce":
                nonce = matches[2];
                break;
            case "qop":
                qop = matches[2];
                break;
            case "host":
                host = matches[2];
                break;
            }
        }

        var digest_uri = "xmpp/" + this.domain;
        if (host !== null) {
            digest_uri = digest_uri + "/" + host;
        }

        var A1 = MD5.hash(Strophe.getNodeFromJid(this.jid) +
                          ":" + realm + ":" + this.pass) +
            ":" + nonce + ":" + cnonce;
        var A2 = 'AUTHENTICATE:' + digest_uri;

        var responseText = "";
        responseText += 'username=' +
            this._quote(Strophe.getNodeFromJid(this.jid)) + ',';
        responseText += 'realm=' + this._quote(realm) + ',';
        responseText += 'nonce=' + this._quote(nonce) + ',';
        responseText += 'cnonce=' + this._quote(cnonce) + ',';
        responseText += 'nc="00000001",';
        responseText += 'qop="auth",';
        responseText += 'digest-uri=' + this._quote(digest_uri) + ',';
        responseText += 'response=' + this._quote(
            MD5.hexdigest(MD5.hexdigest(A1) + ":" +
                          nonce + ":00000001:" +
                          cnonce + ":auth:" +
                          MD5.hexdigest(A2))) + ',';
        responseText += 'charset="utf-8"';

        this._sasl_challenge_handler = this._addSysHandler(
            this._sasl_challenge2_cb.bind(this), null,
            "challenge", null, null);
        this._sasl_success_handler = this._addSysHandler(
            this._sasl_success_cb.bind(this), null,
            "success", null, null);
        this._sasl_failure_handler = this._addSysHandler(
            this._sasl_failure_cb.bind(this), null,
            "failure", null, null);

        this.send($build('response', {
            xmlns: Strophe.NS.SASL
        }).t(Base64.encode(responseText)).tree());

        return false;
    },

    /** PrivateFunction: _quote
     *  _Private_ utility function to backslash escape and quote strings.
     *
     *  Parameters:
     *    (String) str - The string to be quoted.
     *
     *  Returns:
     *    quoted string
     */
    _quote: function (str)
    {
        return '"' + str.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
        //" end string workaround for emacs
    },


    /** PrivateFunction: _sasl_challenge2_cb
     *  _Private_ handler for second step of DIGEST-MD5 SASL authentication.
     *
     *  Parameters:
     *    (XMLElement) elem - The challenge stanza.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _sasl_challenge2_cb: function (elem)
    {
        // remove unneeded handlers
        this.deleteHandler(this._sasl_success_handler);
        this.deleteHandler(this._sasl_failure_handler);

        this._sasl_success_handler = this._addSysHandler(
            this._sasl_success_cb.bind(this), null,
            "success", null, null);
        this._sasl_failure_handler = this._addSysHandler(
            this._sasl_failure_cb.bind(this), null,
            "failure", null, null);
        this.send($build('response', {xmlns: Strophe.NS.SASL}).tree());
        return false;
    },

    /** PrivateFunction: _auth1_cb
     *  _Private_ handler for legacy authentication.
     *
     *  This handler is called in response to the initial <iq type='get'/>
     *  for legacy authentication.  It builds an authentication <iq/> and
     *  sends it, creating a handler (calling back to _auth2_cb()) to
     *  handle the result
     *
     *  Parameters:
     *    (XMLElement) elem - The stanza that triggered the callback.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _auth1_cb: function (elem)
    {
        // build plaintext auth iq
        var iq = $iq({type: "set", id: "_auth_2"})
            .c('query', {xmlns: Strophe.NS.AUTH})
            .c('username', {}).t(Strophe.getNodeFromJid(this.jid))
            .up()
            .c('password').t(this.pass);

        if (!Strophe.getResourceFromJid(this.jid)) {
            // since the user has not supplied a resource, we pick
            // a default one here.  unlike other auth methods, the server
            // cannot do this for us.
            this.jid = Strophe.getBareJidFromJid(this.jid) + '/strophe';
        }
        iq.up().c('resource', {}).t(Strophe.getResourceFromJid(this.jid));

        this._addSysHandler(this._auth2_cb.bind(this), null,
                            null, null, "_auth_2");

        this.send(iq.tree());

        return false;
    },

    /** PrivateFunction: _sasl_success_cb
     *  _Private_ handler for succesful SASL authentication.
     *
     *  Parameters:
     *    (XMLElement) elem - The matching stanza.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _sasl_success_cb: function (elem)
    {
        Strophe.info("SASL authentication succeeded.");

        // remove old handlers
        this.deleteHandler(this._sasl_failure_handler);
        this._sasl_failure_handler = null;
        if (this._sasl_challenge_handler) {
            this.deleteHandler(this._sasl_challenge_handler);
            this._sasl_challenge_handler = null;
        }

        this._addSysHandler(this._sasl_auth1_cb.bind(this), null,
                            "stream:features", null, null);

        // we must send an xmpp:restart now
        this._sendRestart();

        return false;
    },

    /** PrivateFunction: _sasl_auth1_cb
     *  _Private_ handler to start stream binding.
     *
     *  Parameters:
     *    (XMLElement) elem - The matching stanza.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _sasl_auth1_cb: function (elem)
    {
        // save stream:features for future usage
        this.features = elem;

        var i, child;

        for (i = 0; i < elem.childNodes.length; i++) {
            child = elem.childNodes[i];
            if (child.nodeName == 'bind') {
                this.do_bind = true;
            }

            if (child.nodeName == 'session') {
                this.do_session = true;
            }
        }

        if (!this.do_bind) {
            this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
            return false;
        } else {
            this._addSysHandler(this._sasl_bind_cb.bind(this), null, null,
                                null, "_bind_auth_2");

            var resource = Strophe.getResourceFromJid(this.jid);
            if (resource) {
                this.send($iq({type: "set", id: "_bind_auth_2"})
                          .c('bind', {xmlns: Strophe.NS.BIND})
                          .c('resource', {}).t(resource).tree());
            } else {
                this.send($iq({type: "set", id: "_bind_auth_2"})
                          .c('bind', {xmlns: Strophe.NS.BIND})
                          .tree());
            }
        }

        return false;
    },

    /** PrivateFunction: _sasl_bind_cb
     *  _Private_ handler for binding result and session start.
     *
     *  Parameters:
     *    (XMLElement) elem - The matching stanza.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _sasl_bind_cb: function (elem)
    {
        if (elem.getAttribute("type") == "error") {
            Strophe.info("SASL binding failed.");
            this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
            return false;
        }

        // TODO - need to grab errors
        var bind = elem.getElementsByTagName("bind");
        var jidNode;
        if (bind.length > 0) {
            // Grab jid
            jidNode = bind[0].getElementsByTagName("jid");
            if (jidNode.length > 0) {
                this.jid = Strophe.getText(jidNode[0]);

                if (this.do_session) {
                    this._addSysHandler(this._sasl_session_cb.bind(this),
                                        null, null, null, "_session_auth_2");

                    this.send($iq({type: "set", id: "_session_auth_2"})
                                  .c('session', {xmlns: Strophe.NS.SESSION})
                                  .tree());
                } else {
                    this.authenticated = true;
                    this._changeConnectStatus(Strophe.Status.CONNECTED, null);
                }
            }
        } else {
            Strophe.info("SASL binding failed.");
            this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
            return false;
        }
    },

    /** PrivateFunction: _sasl_session_cb
     *  _Private_ handler to finish successful SASL connection.
     *
     *  This sets Connection.authenticated to true on success, which
     *  starts the processing of user handlers.
     *
     *  Parameters:
     *    (XMLElement) elem - The matching stanza.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _sasl_session_cb: function (elem)
    {
        if (elem.getAttribute("type") == "result") {
            this.authenticated = true;
            this._changeConnectStatus(Strophe.Status.CONNECTED, null);
        } else if (elem.getAttribute("type") == "error") {
            Strophe.info("Session creation failed.");
            this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
            return false;
        }

        return false;
    },

    /** PrivateFunction: _sasl_failure_cb
     *  _Private_ handler for SASL authentication failure.
     *
     *  Parameters:
     *    (XMLElement) elem - The matching stanza.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _sasl_failure_cb: function (elem)
    {
        // delete unneeded handlers
        if (this._sasl_success_handler) {
            this.deleteHandler(this._sasl_success_handler);
            this._sasl_success_handler = null;
        }
        if (this._sasl_challenge_handler) {
            this.deleteHandler(this._sasl_challenge_handler);
            this._sasl_challenge_handler = null;
        }

        this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
        return false;
    },

    /** PrivateFunction: _auth2_cb
     *  _Private_ handler to finish legacy authentication.
     *
     *  This handler is called when the result from the jabber:iq:auth
     *  <iq/> stanza is returned.
     *
     *  Parameters:
     *    (XMLElement) elem - The stanza that triggered the callback.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _auth2_cb: function (elem)
    {
        if (elem.getAttribute("type") == "result") {
            this.authenticated = true;
            this._changeConnectStatus(Strophe.Status.CONNECTED, null);
        } else if (elem.getAttribute("type") == "error") {
            this._changeConnectStatus(Strophe.Status.AUTHFAIL, null);
            this.disconnect();
        }

        return false;
    },

    /** PrivateFunction: _addSysTimedHandler
     *  _Private_ function to add a system level timed handler.
     *
     *  This function is used to add a Strophe.TimedHandler for the
     *  library code.  System timed handlers are allowed to run before
     *  authentication is complete.
     *
     *  Parameters:
     *    (Integer) period - The period of the handler.
     *    (Function) handler - The callback function.
     */
    _addSysTimedHandler: function (period, handler)
    {
        var thand = new Strophe.TimedHandler(period, handler);
        thand.user = false;
        this.addTimeds.push(thand);
        return thand;
    },

    /** PrivateFunction: _addSysHandler
     *  _Private_ function to add a system level stanza handler.
     *
     *  This function is used to add a Strophe.Handler for the
     *  library code.  System stanza handlers are allowed to run before
     *  authentication is complete.
     *
     *  Parameters:
     *    (Function) handler - The callback function.
     *    (String) ns - The namespace to match.
     *    (String) name - The stanza name to match.
     *    (String) type - The stanza type attribute to match.
     *    (String) id - The stanza id attribute to match.
     */
    _addSysHandler: function (handler, ns, name, type, id)
    {
        var hand = new Strophe.Handler(handler, ns, name, type, id);
        hand.user = false;
        this.addHandlers.push(hand);
        return hand;
    },

    /** PrivateFunction: _onDisconnectTimeout
     *  _Private_ timeout handler for handling non-graceful disconnection.
     *
     *  If the graceful disconnect process does not complete within the
     *  time allotted, this handler finishes the disconnect anyway.
     *
     *  Returns:
     *    false to remove the handler.
     */
    _onDisconnectTimeout: function ()
    {
        Strophe.info("_onDisconnectTimeout was called");

        // cancel all remaining requests and clear the queue
        var req;
        while (this._requests.length > 0) {
            req = this._requests.pop();
            req.abort = true;
            req.xhr.abort();
            // jslint complains, but this is fine. setting to empty func
            // is necessary for IE6
            req.xhr.onreadystatechange = function () {};
        }

        // actually disconnect
        this._doDisconnect();

        return false;
    },

    /** PrivateFunction: _onIdle
     *  _Private_ handler to process events during idle cycle.
     *
     *  This handler is called every 100ms to fire timed handlers that
     *  are ready and keep poll requests going.
     */
    _onIdle: function ()
    {
        var i, thand, since, newList;

        // add timed handlers scheduled for addition
        // NOTE: we add before remove in the case a timed handler is
        // added and then deleted before the next _onIdle() call.
        while (this.addTimeds.length > 0) {
            this.timedHandlers.push(this.addTimeds.pop());
        }

        // remove timed handlers that have been scheduled for deletion
        while (this.removeTimeds.length > 0) {
            thand = this.removeTimeds.pop();
            i = this.timedHandlers.indexOf(thand);
            if (i >= 0) {
                this.timedHandlers.splice(i, 1);
            }
        }

        // call ready timed handlers
        var now = new Date().getTime();
        newList = [];
        for (i = 0; i < this.timedHandlers.length; i++) {
            thand = this.timedHandlers[i];
            if (this.authenticated || !thand.user) {
                since = thand.lastCalled + thand.period;
                if (since - now <= 0) {
                    if (thand.run()) {
                        newList.push(thand);
                    }
                } else {
                    newList.push(thand);
                }
            }
        }
        this.timedHandlers = newList;

        var body, time_elapsed;
        var callbacks = [];

        // if no requests are in progress, poll
        if (this.authenticated && this._requests.length === 0 &&
            this._data.length === 0 && !this.disconnecting) {
            Strophe.info("no requests during idle cycle, sending " +
                         "blank request");
            this._data.push(null);
        }

        if (this._requests.length < 2 && this._data.length > 0 &&
            !this.paused) {
            body = this._buildBody();
            for (i = 0; i < this._data.length; i++) {
                if (this._data[i] !== null) {
                    if (this._data[i] === "restart") {
                        body.attrs({
                            to: this.domain,
                            "xml:lang": "en",
                            "xmpp:restart": "true",
                            "xmlns:xmpp": Strophe.NS.BOSH
                        });
                    } else {
                        body.cnode(this._data[i]).up();
                        callbacks.push(this._data[i].callbacks);
                        delete this._data[i].callbacks;/* wishful memory leak thinking?*/
                    }
                }
            }
            delete this._data;
            
            this._data = [];

            this._callbackStack = callbacks;

            this._requests.push(new Strophe.Request(body.tree(),
                                    this._onRequestStateChange.bind(this, this._dataRecv.bind(this)),
                                    body.tree().getAttribute("rid")));

            this._processRequest(this._requests.length - 1);
        }

        if (this._requests.length > 0) {
            time_elapsed = this._requests[0].age();
            if (this._requests[0].dead !== null) {
                if (this._requests[0].timeDead() >
                    Math.floor(Strophe.SECONDARY_TIMEOUT * this.wait)) {
                    this._throttledRequestHandler();
                }
            }

            if (time_elapsed > Math.floor(Strophe.TIMEOUT * this.wait)) {
                Strophe.warn("Request " +
                             this._requests[0].id +
                             " timed out, over " + Math.floor(Strophe.TIMEOUT * this.wait) +
                             " seconds since last activity");
                this._throttledRequestHandler();
            }
        }

        clearTimeout(this._idleTimeout);

        // reactivate the timer only if connected
        if (this.connected) {
            this._idleTimeout = setTimeout(this._onIdle.bind(this), 100);
        }
    }
};

if (callback) {
    callback(Strophe, $build, $msg, $iq, $pres);
}

})(function () {
    window.Strophe = arguments[0];
    window.$build = arguments[1];
    window.$msg = arguments[2];
    window.$iq = arguments[3];
    window.$pres = arguments[4];
});

Fireside = {};


Fireside.util = (function($){
  var Self = {

    throttle: function( ms, freq, fn ) {

      var hits = 0;
      var _timer = new Self.timer(ms,function(){ if (hits == freq) { this.start() }; hits = 0; });
      var _returnable =  function() { 
        if ((hits < freq) && (_timer.status > -1)) { hits++; fn.apply(this,arguments); return _timer }
        else {
          //  _timer.debounce();
          return _timer
        }
      };
      _returnable.cancel = function() { _timer.cancel(); return this; }
      _returnable.start =  function() { _timer.start(); return this; }

      return _returnable;
    }, 

timer: function(ms) {

  var self = this;
  var _ms = ms;
  self._qu = self._qu || [];

  if (arguments.length == 2) {
    if (typeof arguments[1] == "function") {
      self._callback = arguments[1];
    }
    else {
      self._callback = false;
    }

  }
  //self.end = 0;

  self.status = -1;

  var _cancel = false;
  var _timeout;


  var _final = function(){

    self.status = 1;

    if ((_cancel == false) && (self._callback)) {
      self._callback(self);
    }


    if (self._qu.length > 0) {
      self._qu.reverse();
      var newtimer =  self._qu.pop();
      self._qu.reverse();

      _timeout = newtimer['ms'];
      self._callback = newtimer['cb'];
      self.status = -1;
      self.start();

    }
  };



  self.jump = function() { _final() };

  self.reset = function() {
    //if (typeof arguments[0] == "function") { self._callback = arguments[0]}
    clearTimeout(_timeout);
    self.status = -1;
    return self;
  },
    self.debounce = function() {
      if (self.status !== 0) { return self; }

      if (typeof arguments[0] == "function") { self._callback = arguments[0]}
      clearTimeout(_timeout);
      self.status = -1;
      self.start();
      return self;
    }

  self.queue = function(ms,cb) {

    if (self.status === 1) {
      _ms = ms;
      self._callback = cb;
      //              console.log(_timeout);
      self.status = -1;
      self.start();
      return self;

    }
    else {
      var obj =  { ms: ms , cb: cb};
      self._qu.push(obj);
      return self;
    }
  },


    self.start = function() {
      if (self.status === 0) { return self; }
      clearTimeout(_timeout);
      _timeout = setTimeout(_final,_ms);
      self.status = 0;
      return self;
    }

  self.cancel = function(){
    self.status = -1;
    clearTimeout(_timeout);
    return self;
  }

  return self;

},

  Jar: {
    set: function(key,data) {
      var _cookie = document.cookie;
      try {
        _cookie = JSON.parse(_cookie);
      } catch(e) {
        _cookie = {};
      }
      finally {
        _cookie[key] = data;
        if (data.length == 0) { delete(_cookie[key]); }
        document.cookie = JSON.stringify(_cookie);
      }
    },

    get: function(key) {
      try {
        _cookie = JSON.parse(document.cookie);
        return _cookie[key];
      } catch(e) {
        return null;
      }
    }


  },
  assertKeys: function(obj,keys) {
    var re = [];
    for (var i in keys) {
      var propname = keys[i];
      if (typeof obj[propname] === "undefined") {
        re.push("<Key>:" + propname);
      }
    }
    //throw "Assertion Failed: " + re;
    if (re.length > 0) { return false}
    else return true;
  }






}

return Self;
})(window.jQuery);


Fireside.logic = (function($){

  var DEBUG = !true;
  var RAW = false;
  var LOG = false;

  Self = {};

  Self.misc = {

    supportName: function(from) {
      var rost = Self.socket.roster['support'];
      var name = (rost[from]['pageAlias']) ? rost[from]['pageAlias'] : rost[from]["name"];
      return name;
    },

supportStatus: function(name,type){ 
  Self.misc.log('LOG',name + ' changed status to...' + type);
  Self.hooks["statusChange"](name,type);
},

  trim: function(str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }
    return str;
  },

  addHook: function(name,fn) {
    var oldHook = Self.hooks[name];
    var newHook = function() { oldHook.apply(this,arguments); fn.apply(this,arguments); };
    Self.hooks[name] = newHook; 
  },
  random: function() { 
    var s4 = function() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
    return s4() + s4() + '-' + s4() +  s4();
  },


  log: function(type,msg) {
    if ((type === "DEBUG") && (DEBUG === true)) {
      console.log(msg);
    }
    if ((type === "LOG") && (LOG === true)) {
      console.log(msg);
    }
  },

  store: {

    set: store.set,
    get: store.get

  }


}

Self.control = {

  init: function(options) {
    this.socket = new Strophe.Connection(options.domain + options.bind);
    if (RAW === true) {
      Self.socket.rawInput = function(data){ console.log('>>>',data) };
      Self.socket.rawOutput = function(data){ console.log('<<<',data) };
    }

    if (Self.control.restoreUser()) {
      ; //Do nothing
    }
    else {
      //Nickname screen state
      //  var profile = Self.control.createProfile();
      //  Self.control.registerConnect(profile);
      Self.control.registerConnect(Self.control.createProfile);
    }


  },


  registerConnect: function(profile) {
    Self.control.register(profile)
      .success(function(){ Self.events.registerSuccess(profile) });
  },

  restoreUser: function() {
    if (this.restoreProfile()) {
      var profile = this.restoreProfile();
      Self.control.connect(profile,Self.events.stropheStatus);
      return true;
    }
    else { return false; }
  },

  storeProfile: function(profile) {
    Self.misc.store.set('profile',profile);
  },

  restoreProfile: function() {
    if (typeof Self.misc.store.get('profile') === "undefined") {
      return false;
    }
    else {
      return Self.misc.store.get('profile');
    }
  },

  createProfile: function() {
    var profile = {
      'username': Self.misc.random(),
      'password': Self.misc.random(),
      'host': (typeof options.host !== "undefined") ? options.host : window.location.hostname
    };
    profile['jid'] = profile['username'] + '@' + profile['host'];
    Self.misc.log('DEBUG','Created profile: ' + JSON.stringify(profile));
    return profile;
  },

  register: function(profile) {
    var req_obj = $.post(options.domain + '/register',JSON.stringify({'username':profile['username'],'password':profile['password'],'host':profile['host']}))
      return req_obj;
  },

  nickname: function(name) {

    var newHook = function() {
      for (var support_contact in Self.socket.roster['support']) break;
      Self.socket.send($pres({'from':Self.socket.jid,'to':support_contact}).c('nick',{'xmlns':'http://jabber.org/protocol/nick'}).t(name));
    }

    if (!Self.socket.connected) {
      var savedHook = Self.hooks['connected'];
      Self.hooks['connected'] = function() { savedHook(); newHook(); }
    }

    else {
      newHook();
    }


  },

  connect: function(profile,callback) {
    if (Self.socket.connected) {
      Self.misc.log('DEBUG','Already Connected, Aborting...');
    }
    Self.misc.log('DEBUG',"Connecting with:" + JSON.stringify(profile));
    Self.socket.connect(profile['jid'],profile['password'],callback);
  },


  sendMsg: function(msg) {


    try {
      if (!Self.socket.connected) { 
        //Self.misc.log("DEBUG","Not connected ");
        throw 'Not connected '; 
      }
      if (typeof Self.socket.roster['support'] === "undefined") {
        // Self.misc.log("DEBUG","Support contact not found");
        throw 'Support contact not found'; 
      }

    } catch(e) {
      Self.misc.log("DEBUG",e);
      var error_fn = function(fn) {
        if (fn) fn();
        return this;
      };
      var success_fn = function() {
        //Do nothing nope sorry
      };
      return { error: error_fn , success: success_fn };
    }


    for (var support_contact in Self.socket.roster['support']) break;
    var me = Strophe.getBareJidFromJid(Self.socket.jid);
    var msgObj = $build('message',{
      to: support_contact,
        from: me,
        type: 'chat'
    }).c('body').t(msg).tree();
    var _tmp = Self.socket.send(msgObj);
    Self.misc.log("DEBUG",msgObj);
    return _tmp;
  }

};

Self.events = {

  init: function() {
    //Do nothing !?
  },

  stropheStatus: function(state) {
    if (state == Strophe.Status.CONNECTING) {
      Self.misc.log('DEBUG','Connecting to server...');
      Self.hooks.connecting();
    } 
    else if (state == Strophe.Status.CONNFAIL) {
      //TODO: reconnect
      Self.misc.log('DEBUG','Connection failed');
      //  Self.events.disconnected = function() { Self.control.restoreUser(); }
    } 
    else if (state == Strophe.Status.DISCONNECTING) {
      Self.misc.log('DEBUG','Disconnecting...');
    } 
    else if (state == Strophe.Status.ATTACHED) {
      Self.misc.log('DEBUG','Attached Session');
    } 
    else if (state == Strophe.Status.AUTHFAIL) {
      Self.misc.log('DEBUG','Auth failed');
      Self.events.authFailed();
    } 
    else if (state == Strophe.Status.DISCONNECTED) {
      Self.misc.log('DEBUG','Disconnected from server');
      Self.hooks.disconnected();
      Self.events.disconnected();
    } 
    else if (state == Strophe.Status.CONNECTED) { 
      Self.misc.log('DEBUG','Connected to server');
      Self.events.connected();
      Self.hooks.connected();
    }

  },

  authFailed: function() {
    Self.socket.disconnect();
    this.disconnected = function() {
      Self.control.registerConnect(Self.control.createProfile());
      //TODO: add re-connection Self.control
      this.disconnected = function() { };
    }
  },

  _onMsg: function(_data_) {
    if ($(_data_).find('forwarded').length > 0) {
      var _data = $(_data_).find('forwarded').last().children().get()[0];
    }
    else {
      var _data = _data_;
    }
    msgObj = {
      'to' : _data.getAttribute('to'),
      //'from' : _data.getAttribute('from'),
      'from': Strophe.getBareJidFromJid(_data.getAttribute('from')),
      'type' : _data.getAttribute('type'),
      'elems' : _data.getElementsByTagName('body')
    }
    if (msgObj['elems'].length > 0) {
      msgObj['body'] = Strophe.getText(msgObj['elems'][0]);
      Self.events.messaged(msgObj);
    }
    else {
      msgObj['body'] = '<undefined>';
      //typing notifications are not supported 
    }

    return true;
  },



  presence: function(xml) {
    var $xml = $(xml);
    var from = Strophe.getBareJidFromJid($xml.attr('from'));
    var rost = Self.socket.roster['support'];

    if ((rost.hasOwnProperty(from)) && (rost[from]).hasOwnProperty("name")) {

      var name = (rost[from]['pageAlias']) ? rost[from]['pageAlias'] : rost[from]["name"];
      if ($xml.attr('type') === 'unavailable') {
        Self.misc.supportStatus(name,'unavailable');
      }
      else {
        var type = $xml.find('show').text();
        if (type.length == 0) { type = 'chat' };
        Self.misc.supportStatus(name,type);
      }
    }
    return true;
  },

  messaged: function(msgObj) {
    var from = msgObj["from"]
      try { 
        var name = Self.misc.supportName(from);
      } catch(e) {
        var name = from;
        Self.misc.log("DEBUG",name + " :error determining support name " + msgObj["body"]);
      }
    Self.misc.log("DEBUG",name + " : " + msgObj["body"]);
    try {
      Self.hooks["message"](name,msgObj["body"]);
    } catch (e) {;}
    return true;
  },

  roster: function(data) {
    Self.misc.log("DEBUG",data);
    var roster = {};
    $(data).find('item').each(function(){
      var $el = $(this);
      var group = $el.find('group').text() || 'Unknown';
      roster[group] = {};
      roster[group][$el.attr('jid')] = {
        'jid': $el.attr('jid'),
      'name': $el.attr('name'),
      'pageAlias': (typeof options.supportAlias !== "undefined") ? options.supportAlias : null,
      'subscription': $el.attr('subscription'),
      };     
    });
    Self.socket.roster = roster;

  },

  connected: function() {
    Self.socket.addHandler(Self.events._onMsg, null, 'message', null, null,  null);
    Self.socket.addHandler(Self.events.presence,null,'presence',null, null, null);
    Self.socket.sendIQ($iq({type: 'get'}).c('query', {xmlns: 'jabber:iq:roster'}),function(data){
      Self.events.roster(data);
    });

    Self.socket.send($iq({type:'set',id:'enablecarbons'}).c('enable', {xmlns: 'urn:xmpp:carbons:2'}).tree());
    Self.socket.send($pres().tree());

  },

  registerSuccess: function(profile) {
    Self.misc.log("DEBUG","Registered as " + profile["username"]);

    Self.control.storeProfile(profile);
    Self.control.connect(profile,this.stropheStatus);
  }


};


Self.hooks = { 
  message: function(){},
  statusChange: function(){},
  connected: function(){},
  disconnected: function(){},
  connecting: function(){}
};

Self.init = Self.control.init;


return Self;

})(window.jQuery);




Fireside.ui = (function($){
  var Self = {


    isScrollBottom: function() { return ((Self.DOM['log'][0].scrollHeight - Self.DOM['log'].scrollTop()) == Self.DOM['log'].outerHeight()); },

    DOM: {},


    toggle: function(state) {


      //true enabled, false disabled
      if (typeof state == "boolean") {
        Fireside.logic.misc.store.set('abled',state);
      };

      var _curr = Fireside.logic.misc.store.get('abled');
      Fireside.logic.misc.store.set('abled',!_curr);
      console.log(_curr);

      if (!_curr) { 
        if (Fireside.logic.socket.connected) Fireside.logic.socket.disconnect(); 
      }
      else if (!Fireside.logic.socket.connected) Fireside.logic.control.restoreUser(); 

    },


  init: function(options) {
    $('body').append(Fireside.template);
    $('html').append('<style>' + Fireside.css + '</style');

    this.DOM['sentence_template'] = $('[data-attr="sentence"]');
    this.DOM['info'] = $('[data-attr="info"]');
    this.DOM['log'] = $('[data-attr="log"]');
    this.DOM['titlebar'] = $('[data-attr="titlebar"]');
    this.DOM['status-icon'] = $('[data-attr="status-icon"]');
    this.DOM['textarea'] = $('[data-attr="textarea"]');
    this.DOM['nickname-box']= $('[data-attr="nickname-box"]');
    this.DOM['nickname'] = $('[data-attr="nickname"]');
    this.DOM['chatbox'] = $('[data-container="chatbox"]');
    this.DOM['chatbox-title'] = $('[data-attr="chatbox-title"]');
    this.DOM['title'] = $('title');
    this.DOM['menu-button'] = $('.cwm-menu .menu-button');
    this.DOM['menu'] = $('.cwm-menu-container');

    this.DOM['menu-action'] = $('.cwm-menu [data-action]');


    //Msg read scroll logic


/*
    var _throttler  = new Fireside.util.throttle(2000,1,function(arg){ console.log(arg) });
    this.DOM['log'].scroll(function(){
      _throttler('BLAH!').start();
    }); */


    //Menu Logic
    this.DOM['menu-button'].click(function(){ $('.cwm-menu-container').toggle();return false });
    this.DOM['menu'].click(function(){ $(this).hide(); });
    this.DOM['menu-action'].click(function(k,v){ 
      var ACTION = $(this).data('action');

      if (ACTION === "clear") { Fireside.logic.misc.store.set('offlineLog',null); Self.DOM['log'].html(''); }
      if (ACTION === "disconnect") { Fireside.logic.socket.disconnect();  }
      if (ACTION === "connect") { Fireside.logic.control.restoreUser();  }
      if (ACTION === "toggle") { Self.toggle();  }


    });


    if (options.supportAlias) { 
      this.DOM['titlebar'].append(options.supportAlias);
    }

    ////////////// Chatbox minimize maximize logic

    //Retain minimized state of chatbox after window close
    var chatboxstate = (Fireside.logic.misc.store.get('chatbox-state')) ? true : false;

    //initialize page with stored state
    if (chatboxstate) Self.DOM['chatbox'].removeClass('minimize');


    this.DOM['chatbox-title'].click(function(){ 
      //change and store state 
      chatboxstate = !chatboxstate;
      Fireside.logic.misc.store.set('chatbox-state',chatboxstate);

      if (chatboxstate) {
        Self.DOM['chatbox'].removeClass('minimize');
      }
      else {
        Self.DOM['chatbox'].addClass('minimize');
        Self.DOM['textarea'].blur();
      }

    return false;
    });
    ///////////// end


    //make textarea always focus when you click on the chat 'window'
    this.DOM['chatbox'].click(function(){
      Self.DOM['chatbox'].find('input[type="text"]:visible, textarea:visible').first().focus();
      Self.notify(false);
    })


    this.DOM['textarea'].focus(function(){
      //Self.notify(false);
    });


    $('[data-attr="sentence"]').remove();
    if ((Fireside.logic.misc.store.get('nickname') == null) || (Fireside.logic.misc.store.get('profile') == null)) { 
      this.DOM['nickname'].bind('keydown',function(e){
        if (e.keyCode === 13) {
          var _nick_ = $(this).val();
          Fireside.logic.control.nickname(_nick_);

          Fireside.logic.misc.store.set('nickname',_nick_);
          Self.DOM['nickname-box'].hide();
          Self.DOM['textarea'].focus();



          $(this).unbind('keydown');

          //Create generic profile and connect
          Fireside.logic.control.registerConnect(Fireside.logic.control.createProfile());

          //Greet user 

          var greeting = 'Hello ' + _nick_ + ' ! Welcome :) ';

      Self.DOM['log'].append($('<em>' + greeting + '</em>'));

      return false;
        }
      });
      Self.DOM['nickname-box'].show();
    }
    else {
      Self.DOM['nickname-box'].hide();
      //Open chatbox automatically this.DOM['chatbox'].children('input[type="checkbox"]').click();

    }
    $('[data-attr="textarea"]').keydown(function(e){
      if ((e.keyCode === 13) && (!e.originalEvent.shiftKey)) {
        if (!Fireside.logic.socket.connected) { return false; }
        var msg = $(this).val();
        var $sentence = Self.logMsg('Me',msg);  

        //$sentence is false if msg is blank
        if ($sentence) {
          var result = Fireside.logic.control.sendMsg(msg);
          result.error(function(){ 
            var _error = true;
            // Self.logMsg('Me',$(this).val(),_error);
            $sentence.log(_error);
            $sentence.el.addClass('error');  
          }).success(function(){
            $sentence.log(false);
          });
        }
        $(this).val('');
        return false;
      }

    });



    Fireside.logic.hooks["disconnected"] = function() { 
      Self.userStatus('offline');
      Self.DOM['info'].show().text('You are not connected');
    };


    Fireside.logic.hooks["connecting"] = function() { 
      Self.showConnecting();
    };

    Fireside.logic.hooks["message"] = function(name,msg) { 
      //accounting for carbons - or new tabs
      if (name == Strophe.getBareJidFromJid(Fireside.logic.socket.jid)) {
        name = "Me";
        Self.logMsg(name,msg);
      }
      else {
        //Message is from someone else, trigger notify
        Self.notify(true);
        Self.logMsg(name,msg);
      }
    }
    Fireside.logic.hooks["connected"] = function(name,msg) { 
      Self.offLogRestore();
    }

    Fireside.logic.hooks["statusChange"] = function(name,type) { 

      var codes = { 
        "away": 'away',
        "chat": 'online',
        "dnd": 'busy',
        "xa": 'away', 
        "unavailable": "offline"
      };
      if (type == 'unavailable') {
        Self.DOM['info'].show().text(name + ' is offline, but you may still send messages');
      } 
      else {
        if (Fireside.logic.misc.store.get('nickname') != null) { 
          Fireside.logic.control.nickname(Fireside.logic.misc.store.get('nickname'));
        }
        Self.DOM['info'].hide().text('');
      }
      Self.userStatus(codes[type]); 
    }
  },

  showConnecting: function() {
    Self.userStatus('connecting');
    Self.DOM['info'].show().text('Connecting...');

    //  Self.DOM['info'].show().text('Connecting...');
    var savedHook = Fireside.logic.hooks['connected'];
    Fireside.logic.hooks['connected'] = function() { savedHook(); Self.DOM['info'].hide().text(''); }
  },

  //true or false - is - on or off
  notify: function(state) {
    //notify on
    if ((state) && (!this.DOM['textarea'].is(':focus'))) {
      Self.titleAlert('New Message',true);

    }
    //notify off
    else {
      Self.titleAlert(null,false);
    }
  },


  //returns start() and .stop() chainable functions
  alternate: function(fn1,fn2) {

    var _alt = {};
    var _timer; 
    _alt.fn1 = fn1;
    _alt.fn2 = fn2;
    var arr = [fn1,fn2];
    var i = 0; 

    this.start = function() {
      _timer = setInterval(function() { i++ ; i = i % 2; arr[i]() ; },1000);
      return this;
    };
    this.stop = function() {
      clearInterval(_timer);
      if (typeof _alt['fn1'] === "function") { 
        _alt['fn1']();    
      } 
      return this;
    };
  },


  titleAlert: (function() {
    var _alternator = {};
    _alternator.stop =  function() {};
    return function(msg,priority) {

      _alternator.stop();
      if ((msg == null) && (!priority)) { return; }

      var oldTitle = this.DOM['title'].text();
      var newTitle = msg;
      var _that = this;

      var waxon = function(){
        if (msg) { _that.DOM['title'].text(oldTitle) }
        Self.DOM['chatbox-title'].removeClass('lightup');
      };
      var waxoff = function() {
        if (msg) { _that.DOM['title'].text(newTitle) }
        Self.DOM['chatbox-title'].addClass('lightup');
      }
      _alternator = new this.alternate(waxon,waxoff).start();
    }

  })(),


  offLogSet: function(sender,text,error) {
    var limit = 25;
    var offline = Fireside.logic.misc.store.get('offlineLog') || [];


    var textarr = [sender,text];
    if (error) { textarr.push(error); }


    offline.unshift(textarr);
    if (offline.length>0) offline = offline.slice(0,limit);
    Fireside.logic.misc.store.set('offlineLog',offline);
  },
  offLogRestore: function() {
    var offline = Fireside.logic.misc.store.get('offlineLog');
    offline.reverse();
    for (var i in offline) {
      var msgArr = offline[i];
      var from = msgArr[0] || ' ';
      var msg = msgArr[1] || ' ';
      var $el = Self.logMsg(from,msg).el
        if (msgArr[2]) { $el.addClass('error'); }
    }
  },

  _newSentence: function() {
    return this.DOM['sentence_template'].clone();
  }, 
  userStatus: function(type) {
    this.DOM['status-icon'].attr('class','icon ' + type);
  },
  trim: function(str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
      if (/\S/.test(str.charAt(i))) {
        str = str.substring(0, i + 1);
        break;
      }
    }
    return str;
  },
  offline: function(){ return true; },
  logMsg: function(sender,text) {

    if (typeof text === "object") {
      var error  = text.error;
      var text = text.msg;
    }


    if (typeof store === "undefined") { store = true; }

    var $sentence = Self._newSentence();
    text = Self.trim(text);
    if (text.length == 0) { return false ;}



    //Just some crappy templating logic, nothing to see here
    var $words = $sentence.find('[data-attr="words"]');
    var logmsg = $words.text(text).html().replace(/\n/g,'<br/>');
    $words.html(logmsg);
    $sentence.find('[data-attr="sender"]').html(sender + ":");

    //if ((Self.DOM['log'][0].scrollHeight - Self.DOM['log'].scrollTop()) == Self.DOM['log'].outerHeight()) 
    var scrollPosit = this.isScrollBottom();
    this.DOM['log'].append($sentence);
    if (scrollPosit) {  Self.DOM['log'][0].scrollTop = Self.DOM['log'][0].scrollHeight; }


    var returnable = {
      'el': $sentence,
      'log': function(error) {
        var _err = !!(error);
        Self.offLogSet(sender,text,_err); 
      }


    }; 
    return returnable;

  }

}
return Self;

})(jQuery);
//Firebox.ui.init



Fireside.init = function(options){
  Fireside.ui.init(options);
  Fireside.logic.init(options);
};
;;Fireside.css = ".chat-box-title div.icon{background-image:url(\"data:image/png;base64,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\")}.menu-button:hover{color:#FFF;cursor:pointer}.menu-button{font-weight:700;color:#24F;position:absolute;top:0;right:10px;float:left}.cwm-menu-container button{width:90%;line-height:20px;margin:10px}.cwm-menu-container ul{margin:0;padding:0;list-style:none}.cwm-menu-container{display:none;position:absolute;background:#FFF;font-size:14px;text-align:center;line-height:24px;width:100%;height:100%;opacity:.8}.nickname .container{margin-top:50px}.nickname label{display:block;width:100%;padding-bottom:5px;text-align:center}.chat-box .nickname{text-align:center;position:absolute;background:#FFF;width:100%;height:100%}div.chat-box.minimize{height:20px}.chat-box-title.lightup{background-color:#8EF}.chat-box-title{width:100%;cursor:pointer;line-height:20px;background:#4AD;vertical-align:middle}.chat-box-title:hover{background:#6CF}.chat-box-title .icon{margin:2px;margin-top:1px;float:left}.chat-box-title .caption{margin-left:20px;font-weight:700;color:#fff}.chat-box{border-top-left-radius:5px;border-top-right-radius:5px;font:400 normal 11px/1.4 Tahoma,Verdana,Sans-Serif;color:#333;width:100px;border:1px solid #344150;border-bottom:0;background-color:#fff;position:fixed;right:10px;bottom:0;z-index:9999;-webkit-box-shadow:1px 1px 5px rgba(0,0,0,.2);-moz-box-shadow:1px 1px 5px rgba(0,0,0,.2);box-shadow:1px 1px 5px rgba(0,0,0,.2)}.chat-box .sender{font-weight:700;padding-right:5px}.sentence span{display:inline}.sentence{word-wrap:break-word}div.convo{height:150px;padding:0 10px 5px;overflow-y:scroll}.chat-box{width:200px;border:1px solid #CCC;font:400 normal 11px/1.4 Tahoma,Verdana,Sans-Serif}div.convo .sentence.error{color:#AAA;font-style:italic}.chat-box textarea{width:178px;padding:5px;margin-left:5px;height:50px;margin-bottom:5px;resize:none}.chat-box-content .info{border-top:1px dashed #CCC;color:#AAA;padding:5px}div.chat-box.full-window{height:auto;width:auto;top:0;left:0}.full-window div.chat-box-content{height:100%}.full-window div.keyboard{height:90%;width:100%}.full-window textarea{height:100px;width:100%;padding:0;margin:0;bottom:0}.full-window div.convo{padding:0;height:50%}.chat-box.fullscreen .chat-box-content{-webkit-box-shadow:1px 1px 5px rgba(0,0,0,.2);-moz-box-shadow:1px 1px 5px rgba(0,0,0,.2);box-shadow:1px 1px 5px rgba(0,0,0,.2)}.chat-box.fullscreen{width:490px;position:relative;margin:auto}.chat-box.fullscreen textarea{padding:5px;width:468px}.chat-box.fullscreen .cwm-menu-container,.chat-box.fullscreen .nickname{height:250px}.icon.away{background-image:url(icon.png);background-position:0 -13px;width:16px;height:16px}.icon.busy{background-image:url(icon.png);background-position:0 -29px;width:16px;height:16px}.icon.connecting{background-image:url(icon.png);background-position:0 -45px;width:16px;height:16px}.icon.error{background-image:url(icon.png);background-position:0 0;width:16px;height:13px}.icon.loading{background-image:url(icon.png);background-position:0 -61px;width:16px;height:16px}.icon.offline{background-image:url(icon.png);background-position:0 -77px;width:16px;height:16px}.icon.online{background-image:url(icon.png);background-position:0 -93px;width:16px;height:16px}.icon.spritesheet{background-image:url(icon.png);background-position:0 -109px;width:1px;height:16px}";Fireside.template = "<div class=\"chat-box minimize\"  data-container=\"chatbox\">  <div class=\"chat-box-title\" data-attr=\"chatbox-title\">\n    <div data-attr=\"status-icon\" class=\"status-icon icon offline\"></div>\n    <div class=\"caption\" data-attr=\"titlebar\">Chat With&nbsp;</div>  </div>  <div class=\"chat-box-content\">\n    <div class=\"cwm-menu\" data-attr=\"cwm-menu\">\n      <div class=\"menu-button\">[+]</div>\n      <div class=\"cwm-menu-container\" data-attr=\"cwm-menu\">\n\n        <ul>\n\n          <li><button data-action=\"clear\">Clear Log</button></li>\n\n          <li><button data-action=\"disconnect\">Disconnect</button></li>\n\n          <li><button data-action=\"disable\">Disable</button></li> <li><button data-action=\"none\">Cancel</button></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"nickname\" data-attr=\"nickname-box\">\n      <div class=\"container\">\n\n        <div>\n\n          <label for=\"nickname\">Hello! What is your name?</label>\n\n          <input data-attr=\"nickname\" type=\"text\" name=\"nickname\"></input>\n\n        </div>\n      </div>\n    </div>\n    <div data-attr=\"log\" class=\"convo\">\n      <div class=\"sentence\" data-attr=\"sentence\">\n\n        <span class=\"icon\" data-attr=\"icon\"></span><span data-attr=\"sender\" class=\"sender\">SENDER:</span>\n\n        <span data-attr=\"words\" class=\"words\">MSG</span>\n      </div>\n    </div>\n    <div class=\"keyboard\">\n      <div data-attr=\"info\" class=\"info\" style=\"display:none\">Info...</div>\n      <textarea data-attr=\"textarea\"></textarea>  </div></div>\n  <div>\n";