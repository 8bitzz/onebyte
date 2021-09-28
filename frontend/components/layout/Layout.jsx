
import NavBar from '../navbar/NavBar'

export default function Layout({ children }) {
  return (
    <div className="">
      <NavBar/>
      <main className="mt-32">{children}</main>
    </div>
  )
}