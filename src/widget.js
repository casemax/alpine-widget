// const widget = () => {
export default () => {

    return {
        open: true,
        dragElement(evt) {
            var el = document.getElementById("widget-div");
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            pos3 = evt.clientX;
            pos4 = evt.clientY;
            document.onmousemove = elementDrag;
            document.onmouseup = closeDragElement;

            function elementDrag(evt) {
                evt.preventDefault();

                pos1 = pos3 - evt.clientX;
                pos2 = pos4 - evt.clientY;
                pos3 = evt.clientX;
                pos4 = evt.clientY;

                el.style.top = (el.offsetTop - pos2) + "px";
                el.style.left = (el.offsetLeft - pos1) + "px";
            }

            function closeDragElement(evt) {
                document.onmouseup = null;
                document.onmousemove = null;
            }

            evt.stopPropagation();      // Prevents call of both child and parent events

        }
    }
}