export const getStaticPaths = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    const paths = data.map(user=>{
        params:{id:user.id.toString()}
    })
    return {
        paths:paths,
        fallback:false
    }
}

const Details = () => {
    return ( 
        <div>
            Hey!
        </div>
     );
}
 
export default Details;