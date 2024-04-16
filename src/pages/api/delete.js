import { myConnectDB } from "@/util/mongodb";
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const db = (await myConnectDB).db('velog');
    const result = await db.collection('test').deleteOne(
      {_id:new ObjectId(req.body)
    })
    res.status(200).redirect('/')
  }
}