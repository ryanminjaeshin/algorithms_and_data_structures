var _ = {};


/*********IDENTITY**********/
_.identity = function(val) {
    return val;
};

/*********FIRST**********/
_.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
};

/*********LAST**********/
_.last = function(array, n) {
    if (n > array.length) {
        return array;
    } else
        return n === undefined ? array[array.length - 1] : array.slice(array.length - n, array.length);
};

/*********EACH**********/
_.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++)
            iterator(collection[i], i, collection);
    } else if (collection instanceof Object) {
        for (var key in collection)
            iterator(collection[key], key, collection);
    } else if (collection === null) {
        return collection;
    }
};

/*********INDEXOF**********/
_.indexOf = function(array, target) {
    var result = -1;
    _.each(array, function(el, index) {
        if (el === target && result === -1) {
            result = index;
        }
    });
    return result;
};

/*********FILTER**********/
_.filter = function(collection, test) {
    var arr = [];
    _.each(collection, function(el, index) {
        if (test(el, index)) {
            arr.push(el);
        }
    });
    return arr;
};

/*********REJECT**********/
_.reject = function(collection, test) {
    return _.filter(collection, function(item) {
        return !test(item);
    });

};

/*********UNIQ**********/
_.uniq = function(array) {
    return _.filter(array, function(item, index) {
        if (_.indexOf(array, item) === index) return item;
    });
};


/*********MAP**********/
_.map = function(collection, iterator) {
    var arr = [];
    _.each(collection, function(el, index) {
        arr.push(iterator(el, index));
    });
    return arr;
};

/*********PLUCK**********/
_.pluck = function(collection, key) {
    return _.map(collection, function(obj) {
        return obj[key];
    });
};

/*********INVOKE*********/
_.invoke = function(collection, func, args) {
    return _.map(collection, function(el) {
        return (func instanceof Function) ? func.apply(el, args) : el[func].apply(el, args);
    });
};

/*********REDUCE**********/
_.reduce = function(collection, iterator, accum) {
    accum = accum === undefined ? _.first(collection) : accum;
    return _.last(_.map(collection, function(el) {
        return accum = iterator(accum, el);
    }));
};

/*********CONTAINS*********/
_.contains = function(collection, target) {
    return _.reduce(collection, function(wasFound, item) {
        return wasFound ? true : item === target;
    }, false);
};

/*********EVERY**********/
_.every = function(collection, iterator) {
    if (collection.length === 0) return true;
    return _.reduce(collection, function(isTrue, el) {
        return iterator ? ((!isTrue) ? false : iterator(el) ? true : false) : el;
    }, true);
};

/********SOME**********/
_.some = function(collection, iterator) {
    iterator = iterator || _.identity;
    return !_.every(collection, function(el) {
        return !iterator(el);
    });
};

/*********EXTEND**********/
_.extend = function(obj) {
    _.each(arguments, function(extendObj) {
        for (var key in extendObj)
            obj[key] = extendObj[key];
    });
    return obj;
};

/*********DEFAULTS**********/
 _.defaults = function(obj) {
    _.each(arguments, function(extend) {
        for (var key in extend) {
            if (!(key in obj)) obj[key] = extend[key];
        }
    });
    return obj;
};

/*********ONCE**********/
_.once = function(func) {
    var alreadyCalled = false;
    var result;
    return function() {
        if (!alreadyCalled) {
            result = func.apply(this, arguments);
            alreadyCalled = true;
        }
        return result;
    };
};

/*********MEMOIZE*************/
_.memoize = function(func) {
    var cache = {};
    return function() {
        var args = [].slice.call(arguments);
        return cache[args] = (args in cache) ? cache[args] : func.apply(this, args);
    };
};

/*********DELAY*********/
_.delay = function(func, wait) {
    var args = [].slice.call(arguments, 2);
    setTimeout(function() {
        func.apply(null, args);
    }, wait);
};


/*********SHUFFLE**********/
 _.shuffle = function(array) {
    var clone = array.slice(0),
        pos, temp;
    for (var i = 0; i < clone.length; i++) {
        pos = Math.floor(Math.random() * clone.length);
        temp = clone[i];
        clone[i] = clone[pos];
        clone[pos] = temp;
    }
    return clone;
};

/*********SORTBY**********/
_.sortBy = function(collection, iterator) {
    var isString = typeof iterator === 'string';
    return collection.sort(function(x, y) {
        return isString ? x[iterator] - y[iterator] : iterator(x) - iterator(y);
    });
};

/*********ALTERNATE SORTBY USING SELECTION SORT WRITTEN OUT**********/
 _.sortBy = function(col, iterator) {

    var isString = typeof iterator === 'string',
        len = col.length,
        temp, lowest;

    _.each(col, function(_, index) {
        lowest = index;
        if (isString) {
            for (var i = index + 1; i < len; i++) {
                if (col[i][iterator] < col[lowest][iterator])
                    lowest = i;
            }
        } else {
            for (var i = index + 1; i < len; i++) {
                if (iterator(col[i]) < iterator(col[lowest]) || col[lowest] === undefined)
                    lowest = i;
            }
        }
        if (index != lowest) {
            temp = col[index];
            col[index] = col[lowest];
            col[lowest] = temp;
        }
    });

    return col;
};

/*********ZIP**********/
 _.zip = function() {
    var longest = [].sort.call(arguments, function(x, y) {
            return y.length - x.length;
        })[0].length,
        zipped = [];
    for (var i = 0; i < longest; i++)
        zipped[i] = _.pluck(arguments, i);
    return zipped;
};

/*********FLATTEN**********/
_.flatten = function(nestedArray, result) {
    _.each(nestedArray, function(el) {
        if (Array.isArray(el))
            nestedArray = _.flatten([].concat.apply([], nestedArray));
    });
    return nestedArray;
};

/*********UNION**********/
_.union = function() { return _.uniq(_.flatten(arguments)); };


/*********INTERSECTION**********/
_.intersection = function() {
    var args = [].slice.call(arguments),
        checkAgainst = _.first(_.sortBy(args, 'length'), args.length - 1),
        mainVals = _.uniq(_.last(_.sortBy(args, 'length')));
    return _.filter(mainVals, function(val) {
        for (var i = 0; i < checkAgainst.length; i++)
            if (!_.contains(checkAgainst[i], val)) return false;
        return true;
    });
};

/*********DIFFERENCE**********/
_.difference = function(array) {
    var otherArgs = _.flatten([].slice.call(arguments, 1));
    return _.filter(array, function(el) {
        return _.contains(otherArgs, el) ? false : true;
    });
};