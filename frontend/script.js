const { document } = require("postcss");

function press(value){
    document.getElementById?(`display`).value+=value;
}
function calculate(){
    try{
        const result = eval(document.getElementById(`display`).value);
        document.getElementById(`display`).value=result;
    }catch{
        document.getElementById('display').value="Error"
    }
}
function clerDisplay(){
    document.getElementById('display').value="";
}