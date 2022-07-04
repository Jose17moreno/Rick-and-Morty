import React from 'react'

export const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark ">
        <div className="container mb-2 justify-content-center">
            <a className="navbar-brand text-uppercase" href="/"> Rick and Morty App</a>
        </div>
    </nav>
  )
}
