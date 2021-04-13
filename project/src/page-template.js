const generateTeam = (team) => {


  const generateManager = (manager) => {
    return `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title">Name: ${}</h4>
      <h5 class="job-title">${}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${}</li>
      <li class="list-group-item">Email:<a href="mailto: ${}"></a></li>
      <li class="list-group-item">Office Number: ${}</li>
    </ul>
  </div>`;
  };

  const generateEngineer = (engineer) => {
    return `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title">Name: ${}</h4>
      <h5 class="job-title">${}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${}</li>
      <li class="list-group-item">Email:<a href="mailto: ${}"></a></li>
      <li class="list-group-item">GitHub: <href="${}"></li>
    </ul>
  </div>`;
  };

  const generateIntern = (intern) => {
    return `<div class="card" style="width: 18rem">
    <div class="card-body">
      <h4 class="card-title">Name: ${}</h4>
      <h5 class="job-title">${}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${}</li>
      <li class="list-group-item">Email:<a href="mailto: ${}"></a></li>
      <li class="list-group-item">School: ${}</li>
    </ul>
  </div>`;
  };

 
};

module.exports = generateTeam;
