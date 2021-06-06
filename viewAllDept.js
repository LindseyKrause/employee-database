let data = require('./index');

viewAllDept = function (data) {
    console.log('view all department')
    if(data.chooseAction === 'View All Departments') {
        console.log('View All Departments function starting');
        db.query(`SELECT * FROM departments`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
            });
        };
        
    
//     else{
// console.log('something else');
//     };
};

module.exports = viewAllDept;