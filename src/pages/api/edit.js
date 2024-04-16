import { myConnectDB } from "@/util/mongodb";
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const db = (await myConnectDB).db('velog');
    const result = await db.collection('test').updateOne(
      {_id : new ObjectId(req.body._id) }, // 수정 필드
      {$set : {
        email : req.body.email,
        password: req.body.password
      }}
    )
    res.status(200).redirect('/edit-test')
  }
}