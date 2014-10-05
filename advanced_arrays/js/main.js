/**
 * Created by jeffreycarroll on 10/3/14.
 */


    console.log("test");
    //create an element in the array
    var myArray = [];
    var twoAdd = ["baseball", "football", "basketball"];
    function ctE(a,b){
        b.forEach(function(e){
            a.push(e)
        });
    }
    ctE(myArray, twoAdd);
    console.log("myArray = " + myArray[0] + ", " + myArray[1]+ ", " + myArray[2]);
    //Delete element in the array


    //echo out elements to the page

