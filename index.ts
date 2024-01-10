import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { connectToDB, getDB } from './db';
import { ObjectId } from 'mongodb';

// Import the types from the generated code
import { Book, BookId, Empty, BookList } from './generated/book_pb';
import { BookManagerService, BookManagerClient } from './generated/book_grpc_pb';

const PROTO_PATH = './protos/book.proto';

// Load the protobuf
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// Assuming book_proto is the namespace in your generated .proto file
const bookProto = grpc.loadPackageDefinition(packageDefinition).book as any;

// Implement the gRPC service methods
const addBook:  grpc.handleUnaryCall<typeof Book, typeof BookId> = async (call: any, callback: any) => {
  try {
    const collection = getDB().collection('books');
    const result = await collection.insertOne(call.request);
    callback(null, { id: result.insertedId.toString() });
  } catch (err) {
    callback(err as grpc.ServiceError);
  }
};

const getBook:  grpc.handleUnaryCall<typeof Book, typeof BookId> = async (call: any, callback: any) => {
  try {
    const collection = getDB().collection('books');
    const book = await collection.findOne({ _id: new ObjectId(call.request.id) });
    if (!book) {
      return callback({
        code: grpc.status.NOT_FOUND,
        details: "Book not found",
      } as grpc.ServiceError);
    }
    callback(null, book);
  } catch (err) {
    callback(err as grpc.ServiceError);
  }
};

const deleteBook:  grpc.handleUnaryCall<typeof Book, typeof BookId> = async (call: any, callback: any) => {
  try {
    const collection = getDB().collection('books');
    await collection.deleteOne({ _id: new ObjectId(call.request.id) });
    callback(null, {});
  } catch (err) {
    callback(err as grpc.ServiceError);
  }
};

// Main function to start the gRPC server
async function main() {
  await connectToDB();

  const server = new grpc.Server();
  server.addService(bookProto.BookManager.service, { addBook, getBook, deleteBook });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    server.start();
    console.log(`gRPC server running on port: ${port}`);
  });
}

main();
