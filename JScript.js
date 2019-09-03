'use strict';
let money = prompt("What is your monthly budjet?", ''),
	time = prompt('Enter the date YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i<2; i++){
        let a = prompt("Enter the name of most thing which you need to spend money", ''),
            b = prompt("How much will you spend?", ''); 
           if((typeof(a)) === "string" && (typeof(a)) != null && typeof(b) != null
                && a != "" && b !="" && a.length < 50){ 
            console.log("done");
            appData.expenses[a] = b;
           } else{
                   i--;
           }
}

appData.moneyPerDay = appData.budget / 30;

alert("Every day budget : " +appData.moneyPerDay);

        if(appData.moneyPerDay < 100){
                console.log("It's not so much!!!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500){
                console.log("It's good, enough money, medium position");
        } else if(appData.moneyPerDay > 500){
                console.log("Very good!");
        } else {console.log("Somthing wrong!");}


