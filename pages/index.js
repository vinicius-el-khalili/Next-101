import style from "../styles/Home.module.css"
import Link from "next/link"
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
        <Link key={user.id} href={"/users/"+user.id}>
          <div className={style.single}>
            {user.name}
          </div>
          </Link>
      ))}
    </div>

    </>
  )
}
