# Next js tutorial - Net Ninja

## 1. Intro & Setup

- ```npx create-next-app app-name```

## 2. Pages & Routes

- Routing is done automatically by Next, mirroring the file structure in the project.
- Each page is a react component inside the ```pages``` folder.
- Subfolders also are mirrored as routes in the application.
- ```index.js``` files are the default page for any given route/subfolder.

## 3. Importing components

- Import syntax is the same as React:

~~~jsx
import Component from "../components/Component"
~~~

## 4. Linking between pages

- Client-side navigation is done throught the ```Link``` component and it runs on the browser. Different pages are loaded via JavaScript, instead of HTTP requests, resulting in a much quicker loading time.

~~~jsx
import Link from "next/link"
<Link href="/about">
    <h1>About</h1>
</Link>
~~~

- ```href``` values in a ```Link``` component correspond to its route, which follow the routing rules as seen in [2].

- **Code-splitting & pre-fetching**: By default, Next code-splits the application, so that only the JavaScript needed for the current page is served from the server. You can see it in action at ```Inspect > Network```. At production, Next also will pre-fetch any code needed for the current page in the background, decreasing its loading time. See more at https://web.dev/route-prefetching-in-nextjs/.

## 5. The ```App``` component

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

## 6. CSS Modules

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

Once the component is rendered, the corresponding HTML element's name mirrors the file structure, followed by a random suffix:

~~~html
<div class="Component_Style1_1Ecsu"/>
~~~