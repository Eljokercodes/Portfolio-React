import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import './services.css'
function Services() {
  return (
    <section className="services" id="services">
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="container container-services">
        <article className='card'>
          <MdDesignServices className="icon"/>
          <h3>Web Design</h3>
          <p className="text-light">Lorem ipsum dolor sit amet consectetur </p>
        </article>
        <article className='card'>
          <IoIosRocket className="icon"/>
          <h3>Fast Performance</h3>
          <p className="text-light">Lorem ipsum dolor sit amet consectetur </p>
        </article>
        <article className='card'>
          <FaCode className="icon"/>
          <h3>Clean Code</h3>
          <p className="text-light">Lorem ipsum dolor sit amet consectetur </p>
        </article>
      </div>
    </section>
  )
}

export default Services