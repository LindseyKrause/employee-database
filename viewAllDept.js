let data = require('./index');
const db = require('./server');

viewAllDept = function (data) {
    // console.log(data);
    if(data.chooseAction === 'View All Departments') {
        console.log('View All Departments function starting');
        db.query(`SELECT * FROM department`, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log("hello");
            });
        };
        
    
//     else{
// console.log('something else');
//     };
};

module.exports = viewAllDept;