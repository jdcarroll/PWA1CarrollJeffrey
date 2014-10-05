/**
 * Created by jeffreycarroll on 9/30/14.


console.log(lowest([4,5,2,6,5,4]));

function lowest(n){
    var lowNum = n[0];

    for (var i = 0 ; i < n.length; i ++){
        if (n[i]<lowNum){
            lowNum = n[i];
        }
    }

    return lowNum;
}

*/

