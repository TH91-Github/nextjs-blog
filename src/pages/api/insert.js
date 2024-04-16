import { myConnectDB } from "@/util/mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    const db = (await myConnectDB).db('velog');
    const testDB = await db.collection('test').insertOne(req.body)

    res.status(200).redirect('/post-test')
  }
}

/*

db.products.insert(
   [
     { _id: 11, item: "pencil", qty: 50, type: "no.2" },
     { item: "pen", qty: 20 },
     { item: "eraser", qty: 25 }
   ]
)
*/
//   const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
// 응답 반환
// res.status(200).json(users);
