import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Footer from "../../components/footer/footer.component";

import "./contact.styles.scss";
const Contact = () => {
  const [state, handleSubmit] = useForm("xvgorvev");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      {/* Inner Header */}
      <header class="inner-header">
        <div class="container-sm">
          <h1>Contact Us</h1>
        </div>
      </header>

      <section class="contact-form section">
        <div class="container-sm">
          <p>
            We love to create dependable business are solutions for small and
            medium sized word companies. Email our office using
            contact@website.com or call us using +123-456-7890
          </p>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              placeholder="Message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" class="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Location */}
      <section class="location section">
        <div class="container-sm">
          <h2>Office Location</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            velit aliquid quis, assumenda incidunt quam excepturi porro
            perferendis officia consequatur?
          </p>
          <div class="map">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.5303553091994!2d-0.14076024298621118!3d51.51210217963597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d502268421%3A0x6a7d62889992f993!2sRegent+St%2C+Soho%2C+London+W1B+5TH%2C+UK!5e0!3m2!1sen!2sro!4v1476174541049"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social */}
      <section class="social section">
        <div class="container">
          <p>
            Follow us on social media for updates and news about our courses.
          </p>
          <div class="social-icons">
            <a
              rel="noreferrer"
              href="https://facebook.com"
              target="_blank"
              aria-label="Follow Us On Facebook"
            >
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com"
              target="_blank"
              aria-label="Follow Us On Twitter"
            >
              <i class="fa-brands fa-twitter fa-2x"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://instagram.com"
              target="_blank"
              aria-label="Follow Us On Instagram"
            >
              <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://linkdin.com"
              target="_blank"
              aria-label="Follow Us On Linkdin"
            >
              <i class="fa-brands fa-linkedin fa-2x"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://youtube.com"
              target="_blank"
              aria-label="Follow Us On Youtube"
            >
              <i class="fa-brands fa-youtube fa-2x"></i>
            </a>
            <a
              rel="noreferrer"
              href="https://pinterest.com"
              target="_blank"
              aria-label="Follow Us On Pinterest"
            >
              <i class="fa-brands fa-pinterest fa-2x"></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <script src="js/script.js"></script>
    </>
  );
};

export default Contact;
