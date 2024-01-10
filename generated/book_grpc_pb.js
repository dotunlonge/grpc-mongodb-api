// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var book_pb = require('./book_pb.js');

function serialize_book_Book(arg) {
  if (!(arg instanceof book_pb.Book)) {
    throw new Error('Expected argument of type book.Book');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_Book(buffer_arg) {
  return book_pb.Book.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_BookId(arg) {
  if (!(arg instanceof book_pb.BookId)) {
    throw new Error('Expected argument of type book.BookId');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_BookId(buffer_arg) {
  return book_pb.BookId.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_BookList(arg) {
  if (!(arg instanceof book_pb.BookList)) {
    throw new Error('Expected argument of type book.BookList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_BookList(buffer_arg) {
  return book_pb.BookList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_book_Empty(arg) {
  if (!(arg instanceof book_pb.Empty)) {
    throw new Error('Expected argument of type book.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_book_Empty(buffer_arg) {
  return book_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// The book service definition.
var BookManagerService = exports.BookManagerService = {
  // Add a new book
addBook: {
    path: '/book.BookManager/AddBook',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.Book,
    responseType: book_pb.BookId,
    requestSerialize: serialize_book_Book,
    requestDeserialize: deserialize_book_Book,
    responseSerialize: serialize_book_BookId,
    responseDeserialize: deserialize_book_BookId,
  },
  // Get a book by ID
getBook: {
    path: '/book.BookManager/GetBook',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.BookId,
    responseType: book_pb.Book,
    requestSerialize: serialize_book_BookId,
    requestDeserialize: deserialize_book_BookId,
    responseSerialize: serialize_book_Book,
    responseDeserialize: deserialize_book_Book,
  },
  // Delete a book by ID
deleteBook: {
    path: '/book.BookManager/DeleteBook',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.BookId,
    responseType: book_pb.Empty,
    requestSerialize: serialize_book_BookId,
    requestDeserialize: deserialize_book_BookId,
    responseSerialize: serialize_book_Empty,
    responseDeserialize: deserialize_book_Empty,
  },
  // Get books
getAllBooks: {
    path: '/book.BookManager/GetAllBooks',
    requestStream: false,
    responseStream: false,
    requestType: book_pb.Empty,
    responseType: book_pb.BookList,
    requestSerialize: serialize_book_Empty,
    requestDeserialize: deserialize_book_Empty,
    responseSerialize: serialize_book_BookList,
    responseDeserialize: deserialize_book_BookList,
  },
};

exports.BookManagerClient = grpc.makeGenericClientConstructor(BookManagerService);
