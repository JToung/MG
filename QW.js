function QW(n) {
    if(n<=0){
		return 0;
}
	else if(n==1){
		return 1;
}
else if(n==2){
		return 2;
}
	else{
		return QW(n-1)+QW(n-2);
}
}
console.log(QW(5))