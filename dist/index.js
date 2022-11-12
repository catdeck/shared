"use strict";
exports.__esModule = true;
exports.getCollection = exports.converter = exports.CollectionNames = void 0;
var firestore_1 = require("firebase/firestore");
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
var getCollection = function (firestore, collectionName) {
    return (0, firestore_1.collection)(firestore, collectionName).withConverter((0, exports.converter)());
};
exports.getCollection = getCollection;
