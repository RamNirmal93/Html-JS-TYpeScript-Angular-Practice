var product = function(...nums){
    var result =1;

    for( var i =0 ; i<nums.length; i++){
        console.log(nums[i]);
        result*=nums[i];
    }
    return result
}

console.log(product(1,2,3,4,5,6));

//type of rest params
//var product = function(x:number,y:number,...nums){} //restparemeter i.e., ...nums always should be in last position
//var product = function(x:number,y:number,...nums:number[]){} // rest parameter is an array type we can fix as a specific array type