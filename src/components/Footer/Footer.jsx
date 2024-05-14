import onlyPay from "../../assets/images/online-payment.png";
import support from "../../assets/images/support.png";
import discount from "../../assets/images/discount.png";
import calculator from "../../assets/images/calculator.png";
export function Footer() {
  return (
    <>
      <section className='home-section-3'>
        <div className='ecommerce-icons'>
          <div className='ecommerce-icon'>
            <img src={calculator} alt='calculator' />
            <span>Comparer les prix</span>
          </div>
          <div className='ecommerce-icon'>
            <img src={discount} alt='discount' />
            <span>Obtenez les meilleures offres</span>
          </div>
          <div className='ecommerce-icon'>
            <img src={support} alt='support' />
            <span>Support 7/7</span>
          </div>
          <div className='ecommerce-icon'>
            <img src={onlyPay} alt='online-payment' />
            <span>Paiement en ligne sécurisé</span>
          </div>
        </div>
      </section>
      <footer>
        <section>
          <h3>Links</h3>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/destination'>Destinations</a>
            </li>
            <li>
              <a href='/paris'>Deals</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/terms'>Terms & Conditions</a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Address</h3>
          <p>
            15 rue de la paix 75010,
            <br /> Paris France <br />
            <a href='/'>Other addresses</a>
          </p>
        </section>
        <section className='footer__call'>
          <h3>Call Us</h3>
          <span>+1 0805-540-801</span>
        </section>
      </footer>
    </>
  );
}
