"use strict";
exports.__esModule = true;
exports.useGetCollection = exports.converter = exports.CollectionNames = void 0;
var firestore_1 = require("firebase/firestore");
var react_1 = require("react");
/**
 * Collection names + type mapping
 */
var CollectionNames;
(function (CollectionNames) {
    CollectionNames["Profile"] = "profile";
    CollectionNames["Organization"] = "organization";
    CollectionNames["Cat"] = "cat";
})(CollectionNames = exports.CollectionNames || (exports.CollectionNames = {}));
/**
 * Utils
 */
var converter = function () { return ({
    toFirestore: function (data) { return data; },
    fromFirestore: function (snap, options) {
        return snap.data(options);
    }
}); };
exports.converter = converter;
var useGetCollection = function (firestore, collectionName) {
    return (0, react_1.useMemo)(function () {
        return (0, firestore_1.collection)(firestore, collectionName).withConverter((0, exports.converter)());
    }, [collectionName, firestore]);
};
exports.useGetCollection = useGetCollection;
