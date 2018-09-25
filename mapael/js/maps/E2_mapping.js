var array = [];
var map_1 = {};

var map_2 = {};

for(i=0;i<array.length;i++){
	var temps = array[i];
	map_1[temps[0]] = temps[2];
	map_1[temps[1]] = temps[2];
	map_2[temps[2]] = temps[0] + "," + temps[1];
}