'use strict';

var money = +prompt ("How much do you earn monthly?"),
    time = prompt ("Enter date in format  YYYY-MM-DD");

let appData = {
        budget: money,
        timeData: time,
        expenses: {
                n1: prompt ("Enter the name of most thing which you need to spend money: "),
                n2: +prompt ("How much will you spend?"),
                n3: prompt ("Enter the name of most thing which you need to spend money: "),
                n4: +prompt ("How much will you spend?")} ,
        optionalExpenses: {},
        income: [],
        savings: false
};


alert("Budget for 1 day will be :" + 
                (appData.budget - appData.expenses.n2 - appData.expenses.n4)/30);

/*             prompt ("Enter the name of most thing which you need to spend money:"):
               +prompt ("How much will you spend?"),
               prompt ("Enter the name of most thing which you need to spend money:"):
               +prompt ("How much will you spend?")
               */