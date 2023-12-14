import Link from "next/link"

const Home = () => <>
  <h1>Home</h1>
  <Link href="/nice-public-path">Access with rewrite</Link>
</>

export default Home