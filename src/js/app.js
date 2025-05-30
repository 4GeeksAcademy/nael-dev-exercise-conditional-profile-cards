import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
  ${cover}
<img src="${variables.avatarURL}" class="photo" />
<h1>  
    ${variables.name === null ? "Your name" : variables.name} 
    ${variables.lastName === null ? "Last name" : variables.lastName}
</h1>
<h3>
    ${variables.city === null ? "City" : variables.city},
    ${variables.country === null ? "Country" : variables.country}
 </h3>
<h3>
    ${variables.role === null ? "Role" : variables.role}
</h3>
<ul class="${variables.socialMediaPosition}">
  <li>
    <a href=
    ${
      variables.twitter === null
        ? "https://x.com/4geeksacademyES?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        : variables.twitter
    }
    <i class="fab fa-twitter"></i></a></li>
  <li><a href=${
    variables.github === null
      ? "https://github.com/4geeksacademy"
      : variables.github
  } ><i class="fab fa-github"></i></a></li>  <li><a href=${
    variables.linkedin === null
      ? "https://www.linkedin.com/school/4geeksacademyes/"
      : variables.linkedin
  }><i class="fab fa-linkedin"></i></a></li>
  <li><a href=${
    variables.instagram === null
      ? "https://www.instagram.com/4geeksacademyes/?hl=es"
      : variables.instagram
  }><i class="fab fa-instagram"></i></a></li>
</ul>
</div>
`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://static.bandainamcoent.eu/high/seven-deadly-sins/seven-deadly-sins/00-page-setup/sds_game-thumbnail.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://i.pinimg.com/736x/08/07/6d/08076d079cadeed0736df2f57c92af93.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
