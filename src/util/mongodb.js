import { MongoClient } from 'mongodb'
const url = process.env.NEXT_PUBLIC_API_URL
let myConnectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  myConnectDB = global._mongo
} else {
  myConnectDB = new MongoClient(url).connect()
}
export { myConnectDB }

