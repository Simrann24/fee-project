let weather = {
    apiKey: "39f33ce38c01b7d3080cc537f9bc7c7b",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Denver");
  
const facebookBtn=document.querySelector(".facebook-btn");
const twitterBtn=document.querySelector(".twitter-btn");
const pinterestBtn=document.querySelector(".pinterest-btn");
const linkedinBtn=document.querySelector(".linkedin-btn");
const whatsappBtn=document.querySelector(".whatsapp-btn");

function init() {
    

    let postUrl=encodeURI(document.location.href);
    let postTitle=encodeURI("Hi everyone pls check this out:");
    
    facebookBtn.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    twitterBtn.setAttribute(
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
    
    linkedinBtn.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&
        title=${postTitle}`
    );
    whatsappBtn.setAttribute(
        "href",
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
    );


}
init(); 
