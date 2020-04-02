import React from "react"
import { Link } from "gatsby"
import Title from "../global/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Incididunt amet et dolore in nulla deserunt tempor. Tempor
              proident anim est Lorem dolore duis. Voluptate aliquip amet
              adipisicing consequat aliquip ipsum fugiat minim ullamco ipsum
              reprehenderit duis. Consequat id proident Lorem dolor adipisicing
              sit labore anim sunt fugiat. Cupidatat ex culpa adipisicing ex
              proident in tempor. Est tempor reprehenderit excepteur laborum
              exercitation velit nulla.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
