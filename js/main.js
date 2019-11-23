function getNumber(num){
    var input_var = document.getElementById('input');
    switch(num){
        case 1:
            input_var.value += '1';
            break;
            case 2:
            input_var.value += '2';
            break;
            case 3:
            input_var.value += '3';
            break;
            case 4:
            input_var.value += '4';
            break;
            case 5:
            input_var.value += '5';
            break;
            case 6:
            input_var.value += '6';
            break;
            case 7:
            input_var.value += '7';
            break;
            case 8:
            input_var.value += '8';
            break;
            case 9:
            input_var.value += '9';
            break;
            case 0:
            input_var.value += '0';
            break;

    }
}
//clearScreen//
function clearScreen(){
    document.getElementById('input').value="";
    document.getElementById('answer').value = "";
}

//math operands//
function getOpreand(opreand){
    var input_var = document.getElementById('input');
    switch(opreand){
        case '+':
        input_var.value += '+';
        break;
        case '-':
        input_var.value += '-';
        break;
        case '*':
        input_var.value += '*';
        break;
        case '/':
        input_var.value += '/';
        break;
        
    }
}

function compute(){
    var input_var = document.getElementById('input');
    ans = Math.floor(+eval(input_var.value));
    document.getElementById('answer').value= '=' + ans;
    //document.getElementById('histo').value= '=' + ans;//
}

//Page color
function myFunction() {
    var x = document.getElementById("myColor").value;
    var y= document.getElementById("myColor2").value;
    document.getElementById('1').style.backgroundImage="linear-gradient(" + x + "," + y + ")";
  }

  //button color
  function myFunction2(){
    var x = document.getElementById("myColor3").value;
    var y= document.getElementById("myColor4").value;
    //document.getElementById('1').style.backgroundImage="linear-gradient(" + x + "," + y + ")";
    // document.querySelector(".btn-color").style.backgroundColo="red"
    let a= document.querySelectorAll(".btn-color")
        for(var i =0;i< a.length;i++){
            a[i].style.backgroundImage="linear-gradient(" + x + "," + y + ")";

        }
  }
