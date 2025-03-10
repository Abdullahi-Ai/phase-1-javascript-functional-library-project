function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let item of collection) {
            callback(item);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let newArr = [];
    if (Array.isArray(collection)) {
        for (let item of collection) {
            newArr.push(callback(item));
        }
    } else {
        for (let key in collection) {
            newArr.push(callback(collection[key]));
        }
    }
    return newArr;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let index = 0;
    if (acc === undefined) {
        acc = values[0];
        index = 1;
    }
    for (; index < values.length; index++) {
        acc = callback(acc, values[index]);
    }
    return acc;
}
function myFind(collection, predicate) {
    for (let item of collection) {
        if (predicate(item)) return item;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let item of collection) {
            if (predicate(item)) {
                result.push(item);
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key])) {
                result.push(collection[key]);
            }
        }
    }
    return result;
}


function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(obj) {
    return Object.keys(obj);
}

function myValues(obj) {
    return Object.values(obj);
}

module.exports = { myEach, myMap, myReduce, myFind, myFilter, mySize, myFirst, myLast, myKeys, myValues };
