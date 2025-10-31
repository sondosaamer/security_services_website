import React from 'react'

function Footer() {
  return (
    <footer class="footer text-center  text-bg-dark">
      <div class="container p-4 pb-0 ">
        <section class="mb-4">
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: " #3b5998" }}
            href="https://www.facebook.com"
            role="button"
          ><i class="fab fa-facebook-f"></i></a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: " #55acee" }}
            href="https://x.com/i/flow/login?lang=en"
            role="button"
          ><i class="fab fa-twitter"></i></a>
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: " #dd4b39" }}
            href="https://www.google.com/"
            role="button"
          ><i class="fab fa-google"></i></a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: " #ac2bac" }}
            href="https://www.instagram.com/"
            role="button"
          ><i class="fab fa-instagram"></i></a>
          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: " #0082ca" }}
            href="https://www.linkedin.com/"
            role="button"
          ><i class="fab fa-linkedin-in"></i></a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating m-1"
            style={{ backgroundColor: " #333333" }}
            href="https://github.com/"
            role="button"
          ><i class="fab fa-github"></i></a>
        </section>

      </div>

      <div class="text-center p-3" style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}>
        © 2024 Copyright

      </div>

    </footer>
  )
}

export default Footer