function merge(arr1, arr2) {
    var result = [];
    var arr = arr1.concat(arr2);
    var len = arr.length;
    var a = {};

    while(len--) {
        var item = arr[len];

        if(!a[item]) 
        { 
            result.unshift(item);
            a[item] = true;
        }
    }

    return result;
}



var arr1 = [1,4];

var arr2 = [1,2,4,5,6];

console.log(merge(arr1, arr2));

