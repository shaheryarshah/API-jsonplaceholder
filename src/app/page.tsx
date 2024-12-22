import Link from "next/link"
export default async function Home (){
  const url = await  fetch('https://jsonplaceholder.typicode.com/users/')
  const res = await url.json()
  console.log(res)
  return(
    <div>
      {res.map((placeholder:any)=>(
        <div key={placeholder.id}>
          <Link href={`${placeholder.id}`}>
          <h1>{placeholder.name}</h1>
          </Link>
        </div>
      ))}
    {JSON.stringify(res)}
    </div>
    

    
  )
}
