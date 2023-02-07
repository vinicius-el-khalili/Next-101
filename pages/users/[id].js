export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    const paths = data.map(user=>{
        return {params:{id:user.id.toString()}}
    })
    return {
        paths:paths,
        fallback:false
    }
}

export const getStaticProps = async (context)=>{
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    const data = await res.json()
    return{
        props:{user:data}
    }
}
const Details = ({user}) => {
    return ( 
        <div>
            User: {user.name}<br/>
            Username: {user.username}<br/>
            E-mail: {user.email}<br/>
        </div>
     );
}
 
export default Details;