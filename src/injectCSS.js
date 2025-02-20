const injectCSS = () => {
    
  var link = document.createElement("link");

  // Set the link type to and rel attributes
  link.type = "text/css";
  link.rel = "stylesheet";
  
  if (process.env.NODE_ENV  == 'production') {
    // A CDN link to your production CSS
    link.href = "https://cdn.jsdelivr.net/gh/joseph-farruggio/js-widget@1.0/dist/styles.css";
  } else {
    // Your local CSS for local development
    link.href = "https://cdn.jsdelivr.net/gh/casemax/alpine-widget@65e0dd023d42861e9a6415bafda5ef919cfc9a92/src/widget-styles.css";
    // link.href = "https://cdn.jsdelivr.net/gh/casemax/alpine-widget@025aaba8f2b1fb506216961be9e100b41e46b990/src/widget-styles.css";
    // link.href = "./src/widget-styles.css";
    // link.href = "./../dist/styles.css";
  }

  // Append the stylesheet to the <head> of the DOM
  var head = document.head;
  head.appendChild(link);
}
  
export default injectCSS;