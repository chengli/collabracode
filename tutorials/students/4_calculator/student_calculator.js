var currentValue = 0.0;
var currentInput = "";
var inputValue = "";
var tmpValue = "";
var currentOperation = null;
// need to add a previous state and display function
// need to add cases when user press number after '='


function buttonEvents(){
	var elem = document.getElementsByClassName("button");
	for(var i=0;i<elem.length;i++){
		//console.log(elem[i].innerHTML);
		//console.log(inputValue);
		addEvent(elem[i], "click", validation);	// Why couldn't I use calculate() ??
	}
}



function validation(){
		inputValue = this.innerHTML;
		//console.log(inputValue);
		// reset everything if user click on '0'

		// if the input is a number or ".", display it on screen
		if(parseFloat(inputValue) || inputValue == "."){
			/*
			if(currentOperation){
				display(inputValue);
				//currentValue = calculate(parseFloat(currentValue), parseFloat(inputValue), currentOperation);
			}
			*/
			
			if(inputValue == "." && currentInput.indexOf(".") != -1){
				inputValue = "";	
			}
			currentInput = currentInput + inputValue; 
			//console.log(currentInput)	

			display(currentInput);	
		}
		// go to calculate mode if input is not number or '.'
		else{	
			if(currentOperation){		
				currentValue = calculate(parseFloat(currentValue), parseFloat(currentInput), currentOperation);
				display(currentValue);
			}
			else{
				currentValue = parseFloat(currentInput);
			}
			currentInput = "";
			currentOperation = inputValue;
		}
		
		/*
		else 
		
		else if(inputValue == "="){
			currentOperation = null;
		}
		
		else if(inputValue == "."){
			
		}
		
		else{
			currentOperation = inputValue;
		}
		
		//display(currentValue);
		//if(inputValue == 
		/*
		default:
			if(currentValue){
				currentValue = currentValue + stringValue;
				display(currentValue);			
			}
			else{
				currentValue = stringValue;
			}
		*/			
}

function calculate(currentValue, inputValue, operand){
	var result = null;
	//console.log(operand);
	switch(operand){
		case "+":
			result = currentValue + inputValue;
			break;
		case "-":
			result = currentValue - inputValue;
			break;
		case "*":
			result = currentValue * inputValue;
			break;
		case "/":
			result = currentValue / inputValue;

	}
	return result;
}

function reset(){
	currentValue = 0.0;
	currentOperation = null;
	currentInput = "";
	display(currentValue);	
}

function display(value){
	var display = document.getElementById("numeric-display");
	display.innerHTML = value;
}

addEvent(window,"load",buttonEvents);

