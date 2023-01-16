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

- ```href``` values in a ```Link``` component correspond to its route, which follow the same rules as seen in lesson 2.

- \_ **Code-splitting & pre-fetching** \_: By default, Next code-splits the application, so that only the JavaScript needed for the current page is served from the server. You can see it in action at ```Inspect > Network```. At production, Next also will pre-fetch any code needed for the current page in the background, decreasing its loading time. See more at https://web.dev/route-prefetching-in-nextjs/.