
export default function EditTest (){ 

  return (
    <div>
      <p>Edit TEST</p>
      <form action="/api/edit" method="POST">
        <input 
          name="_id"
          defaultValue="6614d2bc52a43e15c0f050bb"
          type="text" />
        {/* test _id - ☝️ _id.toString() */}
        <input 
          name="email"
          placeholder="email" />
        <input 
          name="password"
          placeholder="password" />
        <button type="submit">입력</button>
      </form>
    </div>
  )
}