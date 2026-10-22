function Hero(){
    return(
//   <!-- ======hero-section====== -->
<section className="Hero_area">
  <div className="container">
    
     {/* <!-- =======hero-content======== --> */}
 
<div className="hero-content row align-items-center">

  {/* <!-- Left Side: Mobile-এ নিচে --> */}
  <div className="hero-left col-md-6 order-2 order-md-1">
    <p className="left">
      From launch to scale, we bring experience-led
      strategy, lean tech, and just the right structure
      to get it live.
    </p>

    <div className="btn2">
      <button className="call-btn2" type="button">
        <i className="fa-solid fa-phone-volume"></i>
        <span>Call Now</span>
      </button>
    </div>
  </div>

  {/* <!-- Right Side: Mobile-এ উপরে --> */}
  <div className="hero-right col-md-6 order-1 order-md-2">
    <h1>Welcome to Biswas-IT</h1>

    <p className="pera">
      We build website, apps and platform
      <span className="spn">user-first, outcome-driven.</span>
    </p>
  </div>

</div>

  </div>
</section>
    );

   
}
export default Hero; 