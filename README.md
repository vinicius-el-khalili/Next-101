# Next js tutorial - Net Ninja
<details>
<summary>1. Intro & Setup</summary>

- ```npx create-next-app app-name```
</details>

<details>
<summary>2. Pages & Routes</summary>

- Routing is done automatically by Next, mirroring the file structure in the project.
- Each page is a react component inside the ```pages``` folder.
- Subfolders also are mirrored as routes in the application.
- ```index.js``` files are the default page for any given route/subfolder.

</details>

<details>
<summary>3. Import components</summary>
  
- Import syntax is the same as React:

~~~jsx
import Component from "../components/Component"
~~~
</details>

<details>
<summary>4. Linking between pages</summary>

- Client-side navigation is done throught the ```Link``` component and it runs on the browser. Different pages are loaded via JavaScript, instead of HTTP requests, resulting in a much quicker loading time.

~~~jsx
import Link from "next/link"
<Link href="/about">
    <h1>About</h1>
</Link>
~~~

- ```href``` values in a ```Link``` component correspond to its route, which follow the routing rules as seen in [2].

- **Code-splitting & pre-fetching**: By default, Next code-splits the application, so that only the JavaScript needed for the current page is served from the server. You can see it in action at ```Inspect > Network```. At production, Next also will pre-fetch any code needed for the current page in the background, decreasing its loading time. See more at https://web.dev/route-prefetching-in-nextjs/.

</details>

<details>
<summary>5. The App component</summary>

- In ```_app.js```, the ```App``` component takes as an argument the corresponding component of the current page (located at the ```pages``` folder, as seen in [2]).

~~~jsx
// @ _app.js
export default function App({ Component, pageProps }) {
  return (<Component {...pageProps} />)
}
~~~

- **Tip: Adding a Layout to all pages**

~~~jsx
// @ Layout.js
export default function Layout({ children }) {
  return (<>
    <Navbar/>
    {children}
    <Footer/>
  </>)
}
~~~

~~~jsx
// @ _app.js
export default function App({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}
~~~

~~~jsx
// @ index.js || someotherpage.js
export default function HomeOrSomeOtherName() {
  return (<Stuff/>)
}
~~~
</details>

<details>
<summary>6. Styling</summary>

- ***Global style sheet:***

~~~jsx
// @ _app.js
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
~~~

- ***Regular imports***

~~~javascript
import 'folder/file.css'

export default function _() {
  return </>
}
~~~

- ***CSS modules***

A CSS Module is a CSS file in which all class names are scoped locally by default.
See more at https://github.com/css-modules/css-modules.

~~~css
/* @ folder1/Component.module.css */
Style1{...}
Style2{...}
Style3{...}
~~~

~~~jsx
// @ folder2/Component.js
import styles from "folder1/Component.module.css"
export default function Component (){
    return(<>
        <div ClassName={styles.Style1}>Style 1</div>
        <div ClassName={styles.Style2}>Style 2</div>
        <div ClassName={styles.Style3}>Style 3</div>
        </>)
}
~~~

Once the component is rendered, the corresponding HTML element's name mirrors the file structure, followed by a random suffix. This way, you can safely repeat naming conventions without generating conflict in the final CSS file.

~~~html
<!-- Rendered HTML -->
<div class="Component_Style1_1Ecsu"/>
<div class="Component_Style2_4kYos"/>
<div class="Component_Style3_8i0mq"/>
~~~

~~~css
/* Rendered CSS */
Component_Style1_1Ecsu{...}
Component_Style2_4kYos{...}
Component_Style3_8i0mq{...}
~~~

*(!) Pure elements cannot be targeted in module-based CSS. To target pure elements, you will need to use a global stylesheet or a regular import.*
</details>

<details>

<summary>7. 404 page</summary>

- At the ```/pages``` folder, add a file called ```404.js```. Next will handle it automatically.
</details>

<details>

<summary>8. Automatic redirection</summary>

~~~jsx
// @ 404.js
const NotFound = () => {
  const router = useRouter()
  useEffect(()=>{
    setTimeOut(() => {
      router.go(-1)
    },3000)
  },[])
  return(<>404</>)
}
export default NotFound
~~~
</details>

<details>
<summary>9. Images and Metadata</summary>

- Next's ```Image``` component is as a replacement for the ```img``` element. ```Image``` comes with automatic responsiveness and lazy loading 
(See more at https://dev.to/dephraiim/lazy-loading-images-in-nextjs-3am8).
- See more at
  - https://nextjs.org/docs/api-reference/next/image
  - https://dev.to/dephraiim/lazy-loading-images-in-nextjs-3am8
  - https://www.youtube.com/watch?v=8viWcH5bUE4

~~~jsx
import Image from 'next/image'
export default function Page(){
  return(
    <Image src="/image.png" width={10} height={10}/>
  )
}
~~~


- Metadata can be placed inside the ```Head``` component.

~~~jsx
import Head from 'next/head'
export default function Page(){
  return(<>
    <Head>
      <title>Page's title</title>
      <meta name="keywords" content="something"/>
    </Head>
  </>)
}
~~~

</details>

<details>
<summary>10. Fetching data (getStaticProps)</summary>

- JSON Placeholder: https://jsonplaceholder.typicode.com (free fake API for tests)

- ```useEffect``` could be used to fetch data into a component. However, it's prefered that the content be pre-rendered in the server, so that the template has data in it.

- If you export a function called ```getStaticProps``` (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps (https://nextjs.org/docs/basic-features/data-fetching/get-static-props).

~~~jsx
export const getStaticProps = async ()=>{
  const res = await fetch ("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return {
    props:{users:data}
  }
}

export default function Home({users}) {
  return (<>
    <div>
      {users.map(user=>(
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  </>)
}
~~~

</details>