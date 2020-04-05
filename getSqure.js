function getSqure(n){
    if(n <= 1){
        console.log("请输入大于1的整数！")
    }
    var min = 1,
        max = n;
    for(var i=0; i<100; i++){
        var middle = (min + max) / 2,
            square = middle * middle,
            delta = Math.abs((square / n) - 1);
        if(delta <= 0.00001){
            var num= Math.round(middle*Math.pow(10,5));
  			return num/Math.pow(10,5);
        }else{
            if(square > n){
                max = middle;
            }else{
                min = middle;
            }
        }
    }
}
