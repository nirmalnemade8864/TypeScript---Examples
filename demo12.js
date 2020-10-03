var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function taggedObject(obj, tag) {
    return __assign(__assign({}, obj), { tag: tag }); // T & { tag: U }
}
var x = taggedObject({ x: 10, y: 20 }, "point"); // { x: number, y: number } & { tag: "point" }
