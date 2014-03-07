var source = {
    "col1": "col1_value",
    "col2": {
        "col2a": "col2a_value",
        "col2b": {
            "col2bx": "col2bx_value"
        }
    }
};

var sourcemap = {
    "col1": "mapcol1",
    "col2": {
        "col2a": "mapcol2a",
        "col2b": {
            "col2bx": "mapcol2bx"
        }
    }
};


function flattenJson(src, srcmap, tgt) {
    for (var item in src) {
        if ('object' === typeof(src[item])) {
            flattenJson(src[item], srcmap[item], tgt);
        } else {
            tgt[srcmap[item]] = src[item];
        }
    }
}

var target = {};
flattenJson(source, sourcemap, target);
console.log(target);
