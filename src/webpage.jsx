import React from 'react'

function webpage() {
  return (
    <>
  <nav>
    <div
      style={{
        position: "relative",
        fontSize: "1cm",
        paddingLeft: "1cm",
        marginTop: "1cm"
      }}
    >
      Medium
    </div>
    <a href="#home">Contact</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Home</a>
  </nav>
  <div style={{ fontSize: "3cm", paddingTop: "2cm", paddingLeft: "1cm" }}>
    Human{" "}
  </div>
  <div style={{ fontSize: "3cm", paddingLeft: "1cm" }}>Stories &amp; Ideas</div>
  <div style={{ fontSize: ".7cm", paddingTop: "1cm", paddingLeft: "1cm" }}>
    {" "}
    A place to read
  </div>
  <button
    className="but"
    style={{
      borderRadius: "1cm",
      padding: ".4cm",
      width: "5cm",
      marginTop: "2cm",
      marginLeft: "1cm"
    }}
  >
    Start reading
  </button>
</>
  )
}

export default webpage