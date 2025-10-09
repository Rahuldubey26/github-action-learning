import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className="py-4 shadow-md bg-gray-100">
    <Container>
      <nav className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <Logo width="70px" className="cursor-pointer" />
          </Link>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            item.active && (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 bg-gray-200 rounded-full hover:bg-blue-100"
                >
                  {item.name}
                </button>
              </li>
            )
          ))}

          {/* Logout Button */}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
  </header>
  )
}

export default Header