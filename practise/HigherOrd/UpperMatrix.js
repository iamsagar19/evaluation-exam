var data = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9],
]

var sum = 0;

for (var i=0;i<data.length;i++) {
    for(var j=i;j<data[i].length;j++) {
        sum += data[i][j];
    }
}
console.log(sum);