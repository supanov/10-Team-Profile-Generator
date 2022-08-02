const Employee = require("../library/Employee");
const Engineer = require("../library/Engineer");
const Intern = require("../library/Intern");
const Manager = require("../library/Manager");

const generateManagerCard = (teamArr) => {
  const managerArr = teamArr.filter(
    (element) => element.getRole() === "Manager"
  );
  // there's only one manager so we know it's in position 0
  let managerMarkup = `
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${managerArr[0].name} </h4>
    <h4 class="card-title">${managerArr[0].getRole()}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${managerArr[0].id}</li>
    <li class="list-group-item">Email: <a href="mailto:${
      managerArr[0].email
    }" class="card-link">${managerArr[0].email}</a></li>
    <li class="list-group-item">Office Number: ${
      managerArr[0].officeNumber
    }</li>
  </ul>
</div>
  `;
  return managerMarkup;
};

const generateEmployeeCards = (teamArr) => {
  const empArr = teamArr.filter((element) => element.getRole() === "Employee");
  let employeeMarkup = empArr
    .map((emp) => {
      return `
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${emp.name} </h4>
    <h4 class="card-title">${emp.getRole()}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${emp.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${
      emp.email
    }" class="card-link">${emp.email}</a></li>
  </ul>
</div>
  `;
    })
    .join(``);

  return employeeMarkup;
};

const generateEngineerCards = (teamArr) => {
  const engArr = teamArr.filter((element) => element.getRole() === "Engineer");
  let engineerMarkup = engArr
    .map((eng) => {
      return `
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${eng.getName()} </h4>
    <h4 class="card-title">${eng.getRole()}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${eng.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${
      eng.email
    }" class="card-link">${eng.email}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${
      eng.github
    }" class="card-link">${eng.github}</a></li>
  </ul>
</div>
  `;
    })
    .join(``);

  return engineerMarkup;
};

const generateInternCards = (teamArr) => {
  const internArr = teamArr.filter((element) => element.getRole() === "Intern");
  let employeeMarkup = internArr
    .map((intern) => {
      return `
  <div class="card md-col-3">
  <div class="card-header">
    <h4 class="card-title">${intern.getName()} </h4>
    <h4 class="card-title">${intern.getRole()}</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${
      intern.email
    }" class="card-link">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
  `;
    })
    .join(``);

  return employeeMarkup;
};

const generateHTML = (teamArray) => {
  let siteMarkup = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="./style.css" />
  <title>Team Builder</title>
</head>
<body>
  <header class="jumbotron">
    <h1>My Team Manager </h1>
  </header>
  <main class="container">
    <div id="card-section" class = "row ">
    <!------------------Generated cards row ------------------------->
    ${generateManagerCard(teamArray)}
    ${generateEngineerCards(teamArray)}
    ${generateEmployeeCards(teamArray)}
    ${generateInternCards(teamArray)}
    <!------------------Generated cards row ------------------------->
    </div>
  </main>
</body>
</html>
`;
  return siteMarkup;
};

module.exports = generateHTML;