
export default function PostTest (){ 
  return (
    <div>
      <p>POST TEST - insert</p>
      <form action="/api/insert" method="POST">
        <input 
          name="email"
          type="text"
          placeholder="email" />
        <input 
          name="password"
          type="text"
          placeholder="password" />
        <button type="submit">입력</button>
      </form>
    </div>
  )
}