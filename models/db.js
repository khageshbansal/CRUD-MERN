const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0.y0nou.mongodb.net/EmployeeDB", { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');