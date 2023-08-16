const injectFonts = () => {
    
  fontList = [
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"
  ];

  fontList.forEach( flink => {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    let head = document.head;
    head.appendChild(link);
  })

}
  
export default injectFonts;