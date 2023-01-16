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

~~~javascript
import Component from "../components/Component"
~~~

## 4. Linking between pages

- Client-side navigation is done throught the ```Link``` component and it runs on the browser. Different pages are loaded via JavaScript, instead of HTTP requests, resulting in a much quicker loading time.

~~~javascript
import Link from "next/link"
<Link href="/about">
    <h1>About</h1>
</Link>
~~~

- ```href``` values in a ```Link``` component correspond to its route, which follow the routing rules as seen in [2].

- **Code-splitting & pre-fetching**: By default, Next code-splits the application, so that only the JavaScript needed for the current page is served from the server. You can see it in action at ```Inspect > Network```. At production, Next also will pre-fetch any code needed for the current page in the background, decreasing its loading time. See more at https://web.dev/route-prefetching-in-nextjs/.

## 5. The ```App``` component

- In ```_app.js```, the ```App``` component takes as an argument the corresponding component of the current page (located at the ```pages``` folder, as seen in [2]).

- **Tip: Adding a Layout to all pages**

~~~javascript
// @ Layout.js
export default function Layout({ children }) {
  return (<>
    <Navbar/>
    {children}
    <Footer/>
  </>)
}
~~~

~~~javascript
// @ _app.js
export default function App({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}
~~~

~~~javascript
// @ index.js || someotherpage.js
export default function HomeOrSomeOtherName() {
  return (<Stuff/>)
}
~~~