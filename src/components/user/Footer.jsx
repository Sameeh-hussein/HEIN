import React from 'react'

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>HEIN &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
