module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      employee_code: {
        type: Sequelize.STRING
      },
      employee_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.INTEGER
      },
      contract_status: {
        type: Sequelize.INTEGER
      },
  
    
      
      updated_by: {
        type: Sequelize.STRING
      }
    });
  
    return Employee;
  };    