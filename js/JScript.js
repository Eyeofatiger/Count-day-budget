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
        dayValue = document.querySelector('.day-value');

let money, time;

function start(){
        money = +prompt("What is your monthly budjet?", '');
        time = prompt('Enter the date YYYY-MM-DD', '');
        while((isNaN(money)) || money == null || money == ""){
                money = +prompt("What is your monthly budjet?", '');     
        }
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
        savings: true,
        chooseExpenses:function (){
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
                },
        detectDayBudget:function (){
                appData.moneyPerDay = (appData.budget / 30).toFixed(2);
                alert("Every day budget : " +appData.moneyPerDay);
                },
        detectLevel:function (){
                if(appData.moneyPerDay < 100){
                        console.log("It's not so much!!!");
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 500){
                        console.log("It's good, enough money, medium position");
                } else if(appData.moneyPerDay > 500){
                        console.log("Very good!");
                } else {console.log("Something wrong!");}
                },
        checkSavings:function (){
                if (appData.savings == true){
                        let save = +prompt("How much money do you have in your saving account?"),
                        percent = +prompt("What interest do you have?");
                        appData.monthIncome = save/100/12*percent;
                        alert("Monthly you have : " + appData.monthIncome + " of interest.");
                }
                },
        chooseOptExpenses:function (){
                for (let i = 1; i<=3; i++){
                let ops = prompt("What is your not important expenses?", '');
                   if((typeof(ops)) === "string" && (typeof(ops)) != null 
                        && ops != "" && ops.length < 50){ 
        
                    appData.expenses[i] = ops;
                   } else{
                           i--;
                   }
                   }
                },
                chooseIncome: function () {
                        let items = prompt("What will generate additional income? (Enter using koma)", "");
                
                        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
                            console.log("You enter wrong data!!!");
                        } else {
                            appData.income = items.split(", ");
                            appData.income.push(prompt("Something else?"));
                            appData.income.sort();
                        }
                
                        appData.income.forEach (function (itemmassive, i) {
                            alert("Additional income: " + (i+1) + " - " + itemmassive);
                        });
                }
                            
                };
                
        for (let key in appData) {
        console.log("Our programe include data: " + key + " - " + appData[key]);
        }






