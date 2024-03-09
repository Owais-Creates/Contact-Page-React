import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <img src="/Images/logo.png" alt="logo" />

            <ul className="link-items">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
    </nav>
    </>
  )
}

export default Navbar
