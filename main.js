
var getInput = require('./inputFormer');
var Sorter = require('./sorter');
var Visualizer = require('./visualizer');

var sorter;
visualizer = new Visualizer();

input.oninput = function() {
    var array = getInput();
    sorter = new Sorter(array)
    visualizer.createNodes(array);
}

next.onclick = function() {
    if (sorter) {
        var i = sorter.next();
        if (i != undefined)
            visualizer.swap(i);
    }
}

prev.onclick = function() {
    if (sorter) {
        var i = sorter.prev();
        if (i != undefined)
            visualizer.swap(i);
    }
}