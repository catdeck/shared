import {
  DocumentReference,
  Timestamp,
  FirestoreDataConverter,
  WithFieldValue,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  Firestore,
} from "firebase/firestore";
import { useMemo } from "react";

/**
 * Collection names + type mapping
 */
export enum CollectionNames {
  Profile = "profile",
  Organization = "organization",
  Cat = "cat",
}

export type CollectionTypes = {
  [CollectionNames.Profile]: Profile;
  [CollectionNames.Organization]: Organization;
  [CollectionNames.Cat]: Cat;
};

/**
 * Types
 */

// https://www.animalfriends.co.uk/cat/cat-advice/cat-maintenance-and-safety/guide-to-different-cat-coats/
export type CatFurPattern =
  | "tabby"
  | "solid"
  | "tortoise"
  | "colourpoint"
  | "tricolour"
  | "bicolour";

export type CatFurColor =
  | "white"
  | "red"
  | "blue"
  | "black"
  | "cream"
  | "cinnamon"
  | "fawn"
  | "brown";

export type CatFurLength = "none" | "short" | "long";

export type CatSex = "f" | "m";

/**
 * Collection Models
 */

// cat
export type Cat = {
  name: string;
  nickname: string;
  // description: string;
  // dob: Timestamp;
  sex: CatSex;
  furLength: CatFurLength;
  furPattern: CatFurPattern;
  furColors: CatFurColor[];
  organization: DocumentReference<Organization>;
};

// organization
export type Organization = {
  name: string;
  members: DocumentReference<Profile>[];
  cats?: DocumentReference<Cat>[];
};

// profile
export type Profile = {
  name?: string;
  organizations?: DocumentReference<Organization>[];
};

/**
 * Utils
 */

export const converter = <T>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: WithFieldValue<T>): DocumentData => data as DocumentData,
  fromFirestore: (snap: QueryDocumentSnapshot, options: SnapshotOptions) =>
    snap.data(options) as T,
});

export const useGetCollection = <CollectionName extends CollectionNames>(
  firestore: Firestore,
  collectionName: CollectionName
) =>
  useMemo(
    () =>
      collection(firestore, collectionName).withConverter(
        converter<CollectionTypes[CollectionName]>()
      ),
    [collectionName, firestore]
  );

export type ExtractDocumentReferenceType<D> = D extends DocumentReference<
  infer T
>
  ? T
  : never;
