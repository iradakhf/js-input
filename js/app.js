let confirmation=confirm('do you want to continue?');
if(confirmation!=true){
    document.getElementById('body').remove();
}





let promptMessage= prompt('Please enter your age');
var selection = parseInt(promptMessage);


  if(promptMessage<18){
    alert('not recommended to see the content');
  }
  else{
    alert('welcome');

  }

  function Show(){
      var input = document.getElementById('inp').value;
      var text = document.getElementById('groupName');
      text.innerHTML=input;
      var x= input.slice(1,2);
      if(x==1){
        document.body.style.backgroundColor="yellow";
      }
      else if(x==2){
       
            document.body.style.backgroundColor="red";
          
      }
      else if(x==3){
       
        document.body.style.backgroundColor="black";
      
  }
  }