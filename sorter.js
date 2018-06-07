function Sorter(array) {
    this.array = array;
    var stack = [];
    stack.i = [];
    stack.j = [];
    var i = 0;
    var j = 1;
    this.next = function() {
        var length = array.length;
        if (length - i >= 0) {
            while (array[j] >= array[j - 1] && i < length) {
                j++;
                if (j == length && i < length) {
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

module.exports = Sorter;