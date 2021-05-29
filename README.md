
## Home Assignment - Efrat Cohen

###Prerequisites

- node js version 12+ https://nodejs.org/en/download/  
1. npm i && npm start 

or

- docker version 18.06.0+  
    for mac & windows: 
    https://docs.docker.com/desktop/  
    ubuntu:
    https://docs.docker.com/engine/install/ubuntu/


1. run docker build -t {image_name} .
2. docker run -p 5000:5000 {image_name}

###API options:  
**POST** /employees/entry  
    body:{employeeId: string}  
    response : (201) log object 

**PATCH** /employees/exit/:logId  
    params:{logId: string}  
    response : (200)  

**GET** /notify/:employeeId
    params:{employeeId: string}  
    response : (200) array of employees

###exemple:  
GET http://localhost:5000/employees/notify/{employeeId}

###notes:
- the env is uploaded for test purposes only
- you may need to changethe data file entry & exit time of the logs depnding on the time you will test the the assignment 










