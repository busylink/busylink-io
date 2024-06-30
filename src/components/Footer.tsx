

import logo from '../../assets/logo/busylink_white.svg';

export const Footer = () => {
  return (<>
  <footer class="footer bg-base-200 text-base-content p-10">
  <aside>
    <img src={logo} alt='busylink.io logo' />
    <p>
      <a href="https://busylink.io">busylink.io</a>
      <br />
      Providing useful tech since 2024
    </p>
  </aside>
  <nav>
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 class="footer-title">Legal</h6>
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </nav>
</footer>
  </>)
}
