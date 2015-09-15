
function Write99dan (_start, _end)
{
var start = _start;
var end = _end;
for (var i = start; i < end + 1; i++)
{
document.writeln();
document.writeln(i + "단");
for ( var j = 1; j < 10; j++)
{
document.writeln(i + "*" + j + " = " + i*j);
}
}
}

Write99dan(2,14);

var arrayInt = new Array();
arrayInt.push(3);
arrayInt.push(36);
arrayInt.push(369);
document.writeln();
for (i = 0; i<arrayInt.length; i++)
{
document.writeln(i+"번 인덱스의 원소값 : "+arrayInt[i]);
}
document.writeln("arrayInt 배열의 원소 수 : "+arrayInt.length);

function Animal(name)
{
this.name = name;
}
Animal.prototype.Talk = function()
{
document.writeln("내 이름은 " + this.name + "야~");
}
var monkey = new Animal("원숭이");
var bird = new Animal("새");
monkey.Talk();
bird.Talk();