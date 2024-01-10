// package: book
// file: book.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as book_pb from "./book_pb";

interface IBookManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    addBook: IBookManagerService_IAddBook;
    getBook: IBookManagerService_IGetBook;
    deleteBook: IBookManagerService_IDeleteBook;
    getAllBooks: IBookManagerService_IGetAllBooks;
}

interface IBookManagerService_IAddBook extends grpc.MethodDefinition<book_pb.Book, book_pb.BookId> {
    path: "/book.BookManager/AddBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<book_pb.Book>;
    requestDeserialize: grpc.deserialize<book_pb.Book>;
    responseSerialize: grpc.serialize<book_pb.BookId>;
    responseDeserialize: grpc.deserialize<book_pb.BookId>;
}
interface IBookManagerService_IGetBook extends grpc.MethodDefinition<book_pb.BookId, book_pb.Book> {
    path: "/book.BookManager/GetBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<book_pb.BookId>;
    requestDeserialize: grpc.deserialize<book_pb.BookId>;
    responseSerialize: grpc.serialize<book_pb.Book>;
    responseDeserialize: grpc.deserialize<book_pb.Book>;
}
interface IBookManagerService_IDeleteBook extends grpc.MethodDefinition<book_pb.BookId, book_pb.Empty> {
    path: "/book.BookManager/DeleteBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<book_pb.BookId>;
    requestDeserialize: grpc.deserialize<book_pb.BookId>;
    responseSerialize: grpc.serialize<book_pb.Empty>;
    responseDeserialize: grpc.deserialize<book_pb.Empty>;
}
interface IBookManagerService_IGetAllBooks extends grpc.MethodDefinition<book_pb.Empty, book_pb.BookList> {
    path: "/book.BookManager/GetAllBooks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<book_pb.Empty>;
    requestDeserialize: grpc.deserialize<book_pb.Empty>;
    responseSerialize: grpc.serialize<book_pb.BookList>;
    responseDeserialize: grpc.deserialize<book_pb.BookList>;
}

export const BookManagerService: IBookManagerService;

export interface IBookManagerServer {
    addBook: grpc.handleUnaryCall<book_pb.Book, book_pb.BookId>;
    getBook: grpc.handleUnaryCall<book_pb.BookId, book_pb.Book>;
    deleteBook: grpc.handleUnaryCall<book_pb.BookId, book_pb.Empty>;
    getAllBooks: grpc.handleUnaryCall<book_pb.Empty, book_pb.BookList>;
}

export interface IBookManagerClient {
    addBook(request: book_pb.Book, callback: (error: grpc.ServiceError | null, response: book_pb.BookId) => void): grpc.ClientUnaryCall;
    addBook(request: book_pb.Book, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.BookId) => void): grpc.ClientUnaryCall;
    addBook(request: book_pb.Book, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.BookId) => void): grpc.ClientUnaryCall;
    getBook(request: book_pb.BookId, callback: (error: grpc.ServiceError | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
    getBook(request: book_pb.BookId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
    getBook(request: book_pb.BookId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
    deleteBook(request: book_pb.BookId, callback: (error: grpc.ServiceError | null, response: book_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteBook(request: book_pb.BookId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteBook(request: book_pb.BookId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.Empty) => void): grpc.ClientUnaryCall;
    getAllBooks(request: book_pb.Empty, callback: (error: grpc.ServiceError | null, response: book_pb.BookList) => void): grpc.ClientUnaryCall;
    getAllBooks(request: book_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.BookList) => void): grpc.ClientUnaryCall;
    getAllBooks(request: book_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.BookList) => void): grpc.ClientUnaryCall;
}

export class BookManagerClient extends grpc.Client implements IBookManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public addBook(request: book_pb.Book, callback: (error: grpc.ServiceError | null, response: book_pb.BookId) => void): grpc.ClientUnaryCall;
    public addBook(request: book_pb.Book, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.BookId) => void): grpc.ClientUnaryCall;
    public addBook(request: book_pb.Book, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.BookId) => void): grpc.ClientUnaryCall;
    public getBook(request: book_pb.BookId, callback: (error: grpc.ServiceError | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
    public getBook(request: book_pb.BookId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
    public getBook(request: book_pb.BookId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.Book) => void): grpc.ClientUnaryCall;
    public deleteBook(request: book_pb.BookId, callback: (error: grpc.ServiceError | null, response: book_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteBook(request: book_pb.BookId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteBook(request: book_pb.BookId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.Empty) => void): grpc.ClientUnaryCall;
    public getAllBooks(request: book_pb.Empty, callback: (error: grpc.ServiceError | null, response: book_pb.BookList) => void): grpc.ClientUnaryCall;
    public getAllBooks(request: book_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: book_pb.BookList) => void): grpc.ClientUnaryCall;
    public getAllBooks(request: book_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: book_pb.BookList) => void): grpc.ClientUnaryCall;
}
