const injectFonts = () => {
    
  const head = document.head;

  const preConnectList = [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com"
  ];

  preConnectList.forEach( pcl => {
    let link = document.createElement("link");
    link.rel = "preconnect";
    link.href = pcl;
    head.appendChild(link);
  })

  const fontList = [
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0",
    "https://fonts.googleapis.com/css2?family=Arvo&family=Barlow:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Cairo:wght@300;400;500;600;700&family=Edu+VIC+WA+NT+Beginner:wght@700&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&family=Libre+Baskerville:wght@400;700&family=Merriweather:wght@300;400;700&family=Oxygen:wght@300;400&family=Source+Code+Pro:wght@300;400;500;600&display=swap"
  ];

  fontList.forEach( flink => {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = flink;
    head.appendChild(link);
  })

// {/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
// {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}


}
  
export default injectFonts;