import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
  return (
    <div className="row socialDiv">
      <div>
        <a href="https://www.instagram.com/barrancolounge/" className="social">
          <FontAwesomeIcon icon={faFacebook} size="lg" title="add us!" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/barrancolounge/" className="social">
          <FontAwesomeIcon icon={faInstagram} size="lg" title="follow us!" />
        </a>
      </div>
    </div>
  )
}
