var fnJsLoad = function(url, callback) {
    console.log(111)
    callback = callback || function() {};

    var eleScript = document.createElement('script');

    eleScript.onload = function() {
        if (!eleScript.isInited) {
            eleScript.isInited = true;
            callback();
        }
    };
    // 一般而言，低版本IE走这个
    eleScript.onreadystatechange = function() {
        if (!eleScript.isInited && /^loaded|complete$/.test(eleScript.readyState)) {
            eleScript.isInited = true;
            callback();
        }
    };

    eleScript.src = url;

    document.getElementsByTagName('head')[0].appendChild(eleScript);
};