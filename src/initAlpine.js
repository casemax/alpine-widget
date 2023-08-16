import Alpine from 'alpinejs'
import widgetHTML from '../widget.html';
import widget from './widget.js'

const initAlpine = () => {
    /**
     *  If you're abstracting your component logic into a JS file (imported above), 
     * you would register your component with Alpine like this:
     *  Alpine.data('widget', widget); 
     */

    

    
    // widget();
    window.Alpine = Alpine
    

    document.getElementById("widget-div").innerHTML = widgetHTML;
    Alpine.data('widget', widget)
    Alpine.start();
}

export default initAlpine;