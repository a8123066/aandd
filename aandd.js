function createOrderedRandomNumbers(numbers, n) {
    var count = 0;
    for (var i = 1; ; i++) {
        if (Math.floor(Math.random() * 3) == 0) {
            numbers.push(i);
            count++;
            if (count >= n) {
                break;
            }
        }
    }
}

function show(obj) {
    if (Array.isArray(obj)) {
        var html = '';
        html = html + '<table border="1">';
        html = html + '<tr>';
        for (var i = 0; i < obj.length; i++) {
            html = html + '<td>' + obj[i] + '</td>';
        }
        html = html + '</tr>';
        html = html + '</table>';
        //html = html + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', html);
    } else {
        var string = JSON.stringify(obj);
        string = string + '<br>';
        document.getElementById('res').insertAdjacentHTML('beforeend', string);
    }
}


function createSequentialNumbers(array, n){
    for (var i=0;i<n;i++){
        array.push(i+1);
    }
}

function createRandomNumbers(array, n){
    var ran_n;
    for (var i=0;i<n;i++){
        ran_n=Math.floor(Math.random()*10+1);
        array.push(ran_n);
    }
}