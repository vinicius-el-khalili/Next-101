import style from "../styles/Home.module.css"
export const getStaticProps = async ()=>{
  const res = await fetch ("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return {
    props:{users:data}
  }
}

export default function Home({users}) {
  return (
    <>
    <div>
      {users.map(user=>(
        <div key={user.id} className={style.single}>
          {user.name}
          </div>
      ))}
    </div>

    </>
  )
}
