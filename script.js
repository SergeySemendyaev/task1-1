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

function getInput() {
    var result = [];
    var length = input.value.length;
    var lastSymbol = input.value[length - 1];
    if (!Number.isInteger(+lastSymbol) || lastSymbol == " ")
        input.value = input.value.substring(0, length - 1);
    for (var i = 0; i < input.value.length; i++)
        result.push(input.value[i]);
    return result;
}

function Sorter(array) {
    this.array = array;
    var stack = [];
    stack.i = [];
    stack.j = [];
    var i = 0;
    var j = 1;
    var length = array.length;
    this.next = function() {
        if (length > 1) {
            while (array[j] >= array[j - 1] && i < length) {
                j++;
                if (j == length && i < length - 1) {
                    j = 1;
                    i++;
                }
            }
            if (array[j] < array[j - 1]) {
                stack.push(array.slice());
                stack.i.push(i);
                stack.j.push(j);
                var temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
                return j;
            }
        }
    }
    this.prev = function() {
        if (stack.length != 0) {
            this.array = array = stack.pop();
            i = stack.i.pop();
            j = stack.j.pop();
            return j;
        }
    }
}

function Visualizer() {
    var div = document.getElementsByClassName('list')[0];
    var positionsList = [];
    var index = 0;
    this.createNodes = function(array) {
        var children = document.getElementsByClassName('array');
        if (array.length == 0 || array.length == 1 && array.length + 1 < children.length) {
            while (div.hasChildNodes()) {
                div.removeChild(children[0]);
            }
            index = 0;
            positionsList = [];
        } else if (array.length > children.length) {
            positionsList.push(index * 17 + 10);
            var span = document.createElement('span');
            span.className = 'array';
            span.style.backgroundColor = 'rgb(255, 0, 0, 0.9)';
            span.id = index;
            span.style.left = positionsList[index] + 'px';
            span.style.height = (array[index] + 1) * 2 + 23 + 'px';
            span.innerHTML = array[index];
            div.appendChild(span);
            setTimeout(function() {
                span.style.backgroundColor = 'rgb(0, 0, 255, 0.2)'
            }, 10);
            index++;
        } else if (array.length < children.length) {
            div.removeChild(children[--index]);
            positionsList.pop();
        }
    }
    this.swap = function(i) {
        var spans = document.getElementsByClassName('array');
        var span1 = document.getElementById(i);
        var span2 = document.getElementById(i - 1);
        span1.style.backgroundColor = span2.style.backgroundColor = 'rgb(255, 0, 0, 0.9)';
        setTimeout(function() {
            span1.style.backgroundColor = span2.style.backgroundColor = 'rgb(0, 0, 255, 0.2)'
        }, 700);
        span1.style.left = positionsList[i - 1];
        span2.style.left = positionsList[i];
        var tempId = span1.id;
        span1.id = span2.id;
        span2.id = tempId;
    }
}
