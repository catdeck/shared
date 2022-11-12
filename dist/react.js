"use strict";
exports.__esModule = true;
exports.useGetCollection = void 0;
var react_1 = require("react");
var index_1 = require("./index");
var useGetCollection = function (firestore, collectionName) {
    return (0, react_1.useMemo)(function () { return (0, index_1.getCollection)(firestore, collectionName); }, [collectionName, firestore]);
};
exports.useGetCollection = useGetCollection;
