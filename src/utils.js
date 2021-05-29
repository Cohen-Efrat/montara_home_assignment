const sendEmails = (employees) =>{

    employees.forEach(element => {
        console.log(element.email);
    });

}

module.exports = {sendEmails}