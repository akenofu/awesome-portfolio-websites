AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Security Consultant",
    cardImage: "https://www.mdsec.co.uk/wp-content/uploads/2020/08/MDSec-Logo-Blue.png",
    place: "MDSec",
    time: "(September, 2022 - present)",
  },
  {
    title: "Security Consultant",
    cardImage: "https://www.security-meter.com/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=256&q=75",
    place: "Security Meter",
    time: "(April, 2021  - Jun,2022)",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
      
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


document.addEventListener("DOMContentLoaded", showCards3);
