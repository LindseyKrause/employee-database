let data = require('./index');

viewAllDept = function () {
    if(data.chooseAction === 'View All Departments') {
        console.log('View All Departments function starting');
    };
//     else{
// console.log('something else');
//     };
};

module.exports = viewAllDept;