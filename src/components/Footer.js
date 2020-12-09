import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      </h2>
      <div className="">
      <a href="https://instagram.com/buttlesonthebus/"><i class="fab fa-instagram fa-4x"></i></a>
      <a href="https://facebook.com/buttlesonthebus/"><i class="fab fa-facebook fa-4x"></i></a>
      <a href="https://open.spotify.com/show/2wNH6OtcXWCra8NRdSLWTk?si=d2S1ey2ORfCIEnfwFFPFMQ"><i class="fab fa-spotify fa-4x"></i></a>

      </div>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://wanderdevelopment.com">Wander</a>.
        </span>
      </div>
    </footer>
  </div>
)
