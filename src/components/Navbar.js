import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            {/* <link className="navbar-brand" to="/TextForm">{props.title}</link> */}
            <a className="navbar-brand" href="/TextForm">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <link className="nav-link active" aria-current="page" to="/TextForm">Home</link> */}
                    <a className="nav-link active" aria-current="page" href="/TextForm">Home</a>
                    </li>
                    <li className="nav-item">
                    {/* <link className="nav-link" to="/about">{props.about}</link> */}
                    <a className="nav-link" href="/about">{props.about}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
        </div>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleModeGreen} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">GreenMode</label>
        </div>
        </nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    about: 'Set about here'
}