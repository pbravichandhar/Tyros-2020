var _ = require ('lodash');
let reports = [{
    date: '01/01/18',
    sales: 1200,
    expenses: 950
}, {
    date: '01/02/18',
    sales: 800,
    expenses: 650
}, {
    date: '01/03/18',
    sales: 300,
    expenses: 250
}
];

let profit =_.sumBy(reports, function (muruga) {

    return muruga.sales;

});

console.log(profit); // 450
