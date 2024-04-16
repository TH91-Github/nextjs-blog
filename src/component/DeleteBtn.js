'use client'

export default function DeleteBtn(){
  function deleteClick(){
    fetch('/api/delete',{
      method: 'DELETE',
      body : '660e3e1716104bcbaf6291ac'
    })
  }
  return (
    <button onClick={()=>deleteClick()} >삭제 테스트</button>
  )
}