import { useMemo } from "react";
import { Firestore } from "firebase/firestore";
import { CollectionNames, getCollection } from "./index";

export const useGetCollection = <CollectionName extends CollectionNames>(
  firestore: Firestore,
  collectionName: CollectionName
) =>
  useMemo(
    () => getCollection(firestore, collectionName),
    [collectionName, firestore]
  );
