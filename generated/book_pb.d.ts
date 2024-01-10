// package: book
// file: book.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Book extends jspb.Message { 
    getId(): string;
    setId(value: string): Book;
    getTitle(): string;
    setTitle(value: string): Book;
    getAuthor(): string;
    setAuthor(value: string): Book;
    getIsbn(): string;
    setIsbn(value: string): Book;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Book.AsObject;
    static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Book;
    static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
    export type AsObject = {
        id: string,
        title: string,
        author: string,
        isbn: string,
    }
}

export class BookId extends jspb.Message { 
    getId(): string;
    setId(value: string): BookId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BookId.AsObject;
    static toObject(includeInstance: boolean, msg: BookId): BookId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BookId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BookId;
    static deserializeBinaryFromReader(message: BookId, reader: jspb.BinaryReader): BookId;
}

export namespace BookId {
    export type AsObject = {
        id: string,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class BookList extends jspb.Message { 
    clearBooksList(): void;
    getBooksList(): Array<Book>;
    setBooksList(value: Array<Book>): BookList;
    addBooks(value?: Book, index?: number): Book;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BookList.AsObject;
    static toObject(includeInstance: boolean, msg: BookList): BookList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BookList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BookList;
    static deserializeBinaryFromReader(message: BookList, reader: jspb.BinaryReader): BookList;
}

export namespace BookList {
    export type AsObject = {
        booksList: Array<Book.AsObject>,
    }
}
