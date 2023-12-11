function myFunction() {
    const element = document.getElementById("myDIV");
    if (element.className == "unorderlist") {
      element.className = "togglelist";
    } else {
      element.className = "unorderlist";
    }
  }