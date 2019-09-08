'use strict';

let startBtn = document.getElementById("start"),
        budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
        monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
        yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
        countBtn = document.getElementsByTagName('button')[2],
        optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
        percentValue = document.querySelector('.choose-percent'),
        yearValue = document.querySelector('.year-value'),
        monthValue = document.querySelector('.month-value'),
        dayValue = document.querySelector('.day-value'),
        buttons = document.getElementsByTagName('button');

let money, time;

startBtn.addEventListener("click", function (){
        time = prompt('Enter the date YYYY-MM-DD', '');
        let reg = /^[1-2]\d{3}-[0-2]?\d-[0-3]?\d$/;
        if(reg.test(time)){
        money = +prompt("What is your monthly budjet?", '');
        while((isNaN(money)) || money == null || money == ""){
                money = +prompt("What is your monthly budjet?", '');     
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth()+1;
        dayValue.value = new Date(Date.parse(time)).getDate();
        for(let i=0; i<buttons.length; i++){
                buttons[i].removeAttribute("disabled");
        }
} else{alert("Enter please correct date YYYY-MM-DD");
}
});

expensesBtn.addEventListener("click", function(){
        let sum=0;
        for (let i = 0; i<expensesItem.length; i++){
                let a = expensesItem[i].value,
                    b = expensesItem[++i].value; 
                if((typeof(a)) === "string" && (typeof(a)) != null && typeof(b) != null
                        && a != "" && b !="" && a.length < 50){ 
                appData.expenses[a] = b;
                sum += +b;
                } else{
                        i--;
                }
                }  
        expensesValue.textContent = sum;  
});

optionalExpensesBtn.addEventListener("click", function(){
        for (let i = 0; i<optionalExpensesItem.length; i++){
                let ops = optionalExpensesItem[i].value;
                   if((typeof(ops)) === "string" && (typeof(ops)) != null 
                        && ops != "" && ops.length < 50){ 
        
                    appData.optionalExpenses[i] = ops;
                    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " "; 
                   } else{
                           i--;
                   }
                   } 
});

countBtn.addEventListener("click", function(){
        var exp=0;
                for (let i in appData.expenses){
                        exp += +appData.expenses[i];
                }

        if(appData.budget != undefined){
        appData.moneyPerDay = ((appData.budget-exp) / 30).toFixed(); 
        dayBudgetValue.textContent = appData.moneyPerDay;
        
                if(appData.moneyPerDay < 100){
                        levelValue.textContent = "It's not so much!!!";
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500){
                        levelValue.textContent = "It's good, enough money, medium position";
                } else if(appData.moneyPerDay > 500){
                        levelValue.textContent = "Very good!";
                } else  {levelValue.textContent = "Something wrong!";}
        } else{
                dayBudgetValue.textContent = "Something wrong!";
        }
});

incomeItem.addEventListener("input", function(){
        let items = incomeItem.value;
                
         if (typeof(items) != "string" || items == "" || typeof(items) == null) {
        console.log("You enter wrong data!!!");
        } else {appData.income = items.split(", ");
                incomeValue.textContent = appData.income;
}
});

checkSavings.addEventListener("click", function(){
        if(appData.sevings == true){
                appData.sevings = false;
        } else{appData.sevings = true;}
});

sumValue.addEventListener("input", function(){
        if(appData.sevings == true){
        let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed();
            yearSavingsValue.textContent = appData.yearIncome.toFixed();
        }
});

percentValue.addEventListener("input", function(){
        if(appData.sevings == true){
        let sum = +sumValue.value,
                percent = +percentValue.value;
                appData.monthIncome = sum/100/12*percent;
                appData.yearIncome = sum/100*percent;
    
                monthSavingsValue.textContent = appData.monthIncome.toFixed();
                yearSavingsValue.textContent = appData.yearIncome.toFixed();               
        }
});


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
        savings: false           
        };
