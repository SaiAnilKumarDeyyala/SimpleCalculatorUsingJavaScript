function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    return document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    document.getElementById("output-value").innerText=num;
}


let operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id == 'clear'){
			printHistory("");
			printOutput("");
		}
		else if(this.id == 'backspace') {
			let output = getOutput();
			if(output){
				output=output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else {
			let output =getOutput();
			let history = getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history = history.substr(0,history.length-1);
				}
			}
			if(output!="" || history !=""){
				output= output==""?output:output;
				history=history+output;
				if(this.id=="="){
					let result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}		
	});
}

let number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		let output = getOutput();
		if(output!=NaN){
			output = output + this.id;
			printOutput(output);
		}
	});
}