import { Firestore } from "firebase/firestore";
import { CollectionNames } from "./index";
export declare const useGetCollection: <CollectionName extends CollectionNames>(firestore: Firestore, collectionName: CollectionName) => import("@firebase/firestore").CollectionReference<import("./index").CollectionTypes[CollectionName]>;
//# sourceMappingURL=react.d.ts.map