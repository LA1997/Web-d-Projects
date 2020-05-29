function add(){
    var sum=0;
    for(var i=0;i<arguments.length;i++)
    {
    	sum+=(isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
    }
    return sum;
}
alert(add(10,20,30));