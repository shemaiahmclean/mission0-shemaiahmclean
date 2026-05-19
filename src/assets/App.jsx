
import './App.css'
import banner from "./assets/banner-img.png"
import logo from "./assets/digital-news-logo.png"

function App() {
  

  return (
    <>

    <header>
      <nav>
        <div className="brand-identity">
            <img
              width="60"
              height="45"
              src={logo}
              alt="Company logo"
             className="img company-logo"
            />
            <p className="company-name">My Company</p>
        </div>
        <ul>
          <li><a href=""></a></li>
          <li><a className="about-page" href="about.html"></a>About</li>
          <li><a className="contact-page" href="contact.html"></a>Contact</li>
          <li className="login-page"><a href="login.html"></a>Login</li>
        </ul>
      </nav>
    </header>

    <main>
      
        
        <section className="container">
            <img className="banner-img" src="https://img.magnific.com/free-vector/digital-earth-banner-with-glowing-lights-technology-background_1017-34374.jpg?semt=ais_hybrid&w=740&q=80" alt="banner image" />
            
            <h1 className="overlay-heading-one">Lorem ipsum<br/> dolor sit amet.</h1>
            
            <form action="" className="overlay-input">
            <input type="text" className="input-search"/>
            <button className="btn-search">SEARCH</button>
            </form>
        </section>
        

        <div className="card-container">
          <section className="card first">
            <img className="card-image" src="https://www.shutterstock.com/image-vector/vector-illustration-breaking-news-background-600nw-2568552233.jpg" alt="breaking news"/>

            <div className="card-box">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem, ipsum.</p>
            </div>
          </section>

          <section className="card second">
            <img className="card-image"  src="https://img.magnific.com/premium-psd/weekly-news-title_678818-346.jpg" alt="weekly news"/>

            <div className="card-box">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem, ipsum.</p>
            </div>
          </section>

          <section className="card third">
            <img className="card-image" src="https://static.vecteezy.com/system/resources/thumbnails/052/266/769/small/daily-news-logo-with-a-man-carrying-a-newspaper-vector.jpg" alt="daily news"/>
            <div className="card-box">
              <h2>Lorem, ipsum.</h2>
              <p>Lorem, ipsum.</p>
            </div>
          </section>
        </div>
      
    </main>
  
    </>
  )
}

export default App
