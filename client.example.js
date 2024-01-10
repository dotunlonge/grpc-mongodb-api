import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = './protos/book.proto'; // Adjust the path as necessary

// Load the protobuf
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true}
);
const bookProto = grpc.loadPackageDefinition(packageDefinition).book;

// Create a client instance
const client = new bookProto.BookManager(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

// Add a book
const newBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  isbn: "1234567890"
};

client.addBook(newBook, (error, response) => {
  if (error) console.error('Error adding book:', error);
  else console.log('Book added with ID:', response.id);
});

// Get a book
const bookId = { id: "659e81c01b306c224f746ff6" }; // Replace with actual book ID
client.getBook(bookId, (error, book) => {
  if (error) console.error('Error fetching book:', error);
  else console.log('Fetched book:', book);
});

// Get books
// client.getAllBooks({}, (error, books) => {
//   if (error) console.error('Error fetching books:', error);
//   else console.log('Fetched books:', books);
// });

// // Delete a book
// const bookIdToDelete = { id: "book-id-to-delete" }; // Replace with book ID to delete
// client.deleteBook(bookIdToDelete, (error, _) => {
//   if (error) console.error('Error deleting book:', error);
//   else console.log('Book deleted successfully');
// });
