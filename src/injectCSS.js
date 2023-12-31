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
    link.href = "https://cdn.jsdelivr.net/gh/casemax/alpine-widget@f0ba17b57d906c861d436d50ebc4db9172aee1c8/src/widget-styles.css";
    // link.href = "https://cdn.jsdelivr.net/gh/casemax/alpine-widget@025aaba8f2b1fb506216961be9e100b41e46b990/src/widget-styles.css";
    // link.href = "./src/widget-styles.css";
    // link.href = "./../dist/styles.css";
  }

  // Append the stylesheet to the <head> of the DOM
  var head = document.head;
  head.appendChild(link);
}
  
export default injectCSS;