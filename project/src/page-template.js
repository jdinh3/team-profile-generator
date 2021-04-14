const generateTeam = (team) => {
  const generateManager = (manager) => {
    return `
    <div class="card-body">
      <h4 class="card-title">Name: ${manager.getName()}</h4>
      <h5 class="job-title">${manager.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email:<a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
    </ul>
  `;
  };

  const generateEngineer = (engineer) => {
    return `
    <div class="card-body">
      <h4 class="card-title">Name: ${engineer.getName()}</h4>
      <h5 class="job-title">${engineer.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email:<a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <href="${engineer.getGithub()}">${engineer.getGithub()}</li>
    </ul>
  `;
  };

  const generateIntern = (intern) => {
    return `
    <div class="card-body">
      <h4 class="card-title">Name: ${intern.getName()}</h4>
      <h5 class="job-title">${intern.getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email:<a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return html.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../style.css"/>
  </head>
  <body>
    <h1>My Team</h1>
    <div class="card d-flex justify-content-center" style="width: 18rem">
    ${generateTeam(team)}
    </div>
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
      integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
      crossorigin="anonymous"
    ></script>
  </body>
</html>
  `;
};
