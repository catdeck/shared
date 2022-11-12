import { DocumentReference, FirestoreDataConverter, Firestore } from "firebase/firestore";
/**
 * Collection names + type mapping
 */
export declare enum CollectionNames {
    Profile = "profile",
    Organization = "organization",
    Cat = "cat"
}
export declare type CollectionTypes = {
    [CollectionNames.Profile]: Profile;
    [CollectionNames.Organization]: Organization;
    [CollectionNames.Cat]: Cat;
};
/**
 * Types
 */
export declare type CatFurPattern = "tabby" | "solid" | "tortoise" | "colourpoint" | "tricolour" | "bicolour";
export declare type CatFurColor = "white" | "red" | "blue" | "black" | "cream" | "cinnamon" | "fawn" | "brown";
export declare type CatFurLength = "none" | "short" | "long";
export declare type CatSex = "f" | "m";
/**
 * Collection Models
 */
export declare type Cat = {
    name: string;
    nickname: string;
    sex: CatSex;
    furLength: CatFurLength;
    furPattern: CatFurPattern;
    furColors: CatFurColor[];
    organization: DocumentReference<Organization>;
};
export declare type Organization = {
    name: string;
    members: DocumentReference<Profile>[];
    cats?: DocumentReference<Cat>[];
};
export declare type Profile = {
    name?: string;
    organizations?: DocumentReference<Organization>[];
};
/**
 * Utils
 */
export declare const converter: <T>() => FirestoreDataConverter<T>;
export declare const getCollection: <CollectionName extends CollectionNames>(firestore: Firestore, collectionName: CollectionName) => import("@firebase/firestore").CollectionReference<CollectionTypes[CollectionName]>;
export declare const useGetCollection: <CollectionName extends CollectionNames>(firestore: Firestore, collectionName: CollectionName) => import("@firebase/firestore").CollectionReference<CollectionTypes[CollectionName]>;
export declare type ExtractDocumentReferenceType<D> = D extends DocumentReference<infer T> ? T : never;
//# sourceMappingURL=index.d.ts.map