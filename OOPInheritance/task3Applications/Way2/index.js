/*
Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars
2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React
3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is
Android
4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative
Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars
*/

class Applications {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }
  isCCLicence() {
    if (this.licence === "CC") {
      return "This licence is " + this.licence;
    } else {
      return "This licence is not CC ";
    }
  }
  like() {
    return this.stars++;
  }
  showStars() {
    return this.stars;
  }
}

class WebApp extends Applications {
  constructor(name, url, technologies, licence, stars) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  }
  getData() {
    return (
      this.name +
      " " +
      this.url +
      " " +
      this.technologies +
      " " +
      this.licence +
      " " +
      this.stars
    );
  }
  reactBased() {
    if (this.technologies === "React" || this.technologies === "react") {
      return "Technology  which used  is " + this.technologies;
    } else {
      return "Technology  which used  is not React";
    }
  }
}

class MobileApp extends Applications {
  constructor(name, platforms, licence, stars) {
    super(name, licence, stars);
    this.platforms = platforms;
  }
  getData() {
    return (
      this.name + " " + this.platforms + " " + this.licence + " " + this.stars
    );
  }
  forAndroid() {
    if (this.platforms === "Android" || this.platforms === "android") {
      return "Technology  which used  is Android";
    } else {
      return "Technology  which used  is not Android";
    }
  }
}

var web = new WebApp("Soccer", "www.soccer.rs", "React", "CC", 4);
var mobile = new MobileApp("Note", "android", "CCC", 5);

console.log(web);
console.log(web.getData());
console.log(web.reactBased());
console.log(web.isCCLicence());
console.log(web.like());
console.log(web.showStars());

console.log(mobile);
console.log(mobile.getData());
console.log(mobile.forAndroid());
console.log(mobile.isCCLicence());
console.log(mobile.like());
console.log(mobile.showStars());
