name_of_the_food_array=[];

function submit(){
    var name1=document.getElementById("food-1").value;
    var name2=document.getElementById("food-2").value;
    var name3=document.getElementById("food-3").value;
    var name4=document.getElementById("food-4").value;
    name_of_the_food_array.push(name1);
    name_of_the_food_array.push(name2);
    name_of_the_food_array.push(name3);
    name_of_the_food_array.push(name4);
    console.log(name_of_the_food_array);
    document.getElementById("display").innerHTML=name_of_the_food_array;
    document.getElementById("submit-button").style.display="none";
    document.getElementById("sort-button").style.display="inline-block";

}
function sort(){
    name_of_the_food_array.sort();
    console.log(name_of_the_food_array);
    document.getElementById("display").innerHTML=name_of_the_food_array;
}