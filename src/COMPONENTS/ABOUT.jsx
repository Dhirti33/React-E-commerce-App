import "../STYLES/ABOUT.css";

const About = () => {
  return (
    <section className="aboutPage">
      <div className="aboutUs">
        <p className="aboutUsTop">Why Shop with Us</p>
        <p className="aboutUsInfo">
          Shopping online has gotten easier over the years with Clean Cooking
          Market. Our platform makes shopping easy and interesting with amazing
          deals, jaw-dropping reduction in the prices of the items as well as
          special discount offers which occurs from time to time. Irrespective
          of your class, we provide you with products that align with your
          budget. Explore your favorite cookstove, lightning solutions and more
          in our catalog of top stove collections.
        </p>
        <p className="quote">"A quality cook stove is not just a tool for preparing meals; it's a catalyst for healthier families, cleaner environments, and sustainable communities."</p>
      </div>
      <div className="location">
        <div className="contact">
            <h2>Contact Us</h2>
            <form action="" className="Form">
                <input type="text" name="" id="Name" placeholder="Name"/>
                <input type="email" name="" id="Email" placeholder="Email"/>
                <input type="text" name="" id="Subject" placeholder="Subject"/>
                <textarea name="" id="Message" cols="30" rows="10" placeholder="Your message"></textarea>
                <input type="submit" value="Send" id="Send"/>
            </form>
        </div>
        
      </div>
    </section>
  );
};

export default About;
