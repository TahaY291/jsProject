let arr = [];
  
function submit() {
    

    let input = document.querySelectorAll(".input")
    input.forEach((e,index) => {
        if(e.value == ""){
            document.getElementById(`demo${index}`).innerHTML = `<p style='color: red; font-size: xx-small;'> ${e.getAttribute('name')} field is required. </p>`
        }else{
            document.getElementById(`demo${index}`).innerHTML = "";
            e.value="";
        }
    })
    


 
    arr.push(data)
    console.log(arr);
    showData()
}
function showData(){
    let output="";
    for (items in arr) {
        // console.log('from here');
        output +="\
                    <tr>\
                    <td>"+arr[items].fname+"</td>\
                    <td>"+arr[items].lname+"</td>\
                    <td>"+arr[items].email+"</td>\
                    <td>"+arr[items].phone+"</td>\
                    <td>"+arr[items].address+"</td>\
                    <td><button onclick=_dele(" + items + ")>delete</button></td>\
                    <td><button onclick=_ed(" + items + ")>edit</button></td>\
                    </tr>\
                  ";
    }
    document.getElementById('result').innerHTML=output;
}
function  _dele(i) {
    console.log('from here', i);
    arr.splice(i, 1);
    showData()
}
function _ed(i) {
    var myjson = JSON.stringify(data);
    console.log(myjson); 
    showData();
}