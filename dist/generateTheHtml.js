const generateMembers = (data) => {
    const teamMembers = [];

    const generateManager = (manager) => {
        console.log(manager)
        let managerHtml = `
    <div class="col p-3">
    <div class="card h-100">
    <h3>Manager</h3>
    <h5>${manager.name}</h5>
    <p style="font-size: 50px"> &#128100;</p>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID#: ${manager.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office#: ${manager.officeNumber}</li>
      </ul>
    </div>
  </div>
</div>
</div>
    `
    teamMembers.push(managerHtml);
    };


    const generateEngineer = (engineer) => {
        console.log(engineer)

        let engineerHtml = `
    <div class="col  p-3">
  <div class="card h-100">
  <h3>Engineer</h3>
  <h5>${engineer.name}</h5>
  <p style="font-size: 50px"> &#129302; </p>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID#:${engineer.id} </li>
        <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email} </a></li>
        <li class="list-group-item">Github:<a href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
        `
        teamMembers.push(engineerHtml);
    }

    const generateIntern = (intern) => {
        let internHtml = `
<div class="col  p-3">
<div class="card h-100">
  <h3>Intern</h3>
  <h5>${intern.name}</h5>
  <p style="font-size: 50px"> &#128522; </p>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID#:${intern.id} </li>
        <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email} </a></li>
        <li class="list-group-item">School:${intern.school} </li>
      </ul>
    </div>
  </div>
</div>
</div>
`
        teamMembers.push(internHtml);
    }


    const generateEmployee = (employee) => {
        console.log(employee)
        let employeeHtml = `
    <div class="col p-3">
    <div class="card h-100">
    <h3>Employee</h3>
    <h5>${employee.name}</h5>
    <p style="font-size: 50px"> &#128100;</p>
  <div class="card-body">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID#: ${employee.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${employee.email}">${employee.email}</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
    `
        teamMembers.push(employeeHtml)
    }
    
    for (let i=0; i <data.length; i++) {
      if (data[i].getRole() === "Manager") {
        generateManager(data[i])
      }
      if (data[i].getRole() === "Intern") {
        generateIntern(data[i])
      }
      if (data[i].getRole() === "Engineer") {
        generateEngineer(data[i])
      }
      if (data[i].getRole() === "Employee") {
        generateEmployee(data[i])
      }
    }

    return teamMembers.join('')

}


module.exports = team => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link rel="stylesheet" href="./index.css">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <nav>
        <h1 class="title">TEAM PROFILE</h1>
    </nav>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      
    
    ${generateMembers(team)}



    </div>

    <!--------------------------------------------------------->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
    `
}


  







// {
//   /* <div class="col p-3">
// <div class="card h-100">
//   <h3>Manager</h3>
//   <h5>${}</h5>
//   <p style="font-size: 50px"> &#128100;</p>
//   <div class="card-body">
//     <div class="card" style="width: 18rem;">
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID#:${} </li>
//         <li class="list-group-item">Email:<a href="mailto:${}">${} </a></li>
//         <li class="list-group-item">Office#:${}</li>
//       </ul>
//     </div>
//   </div>
// </div>
// </div> */
// }

// {
//   /* <div class="col  p-3">
// <div class="card h-100">
//   <h3>Engineer</h3>
//   <h5>${}</h5>
//   <p style="font-size: 50px"> &#129302; </p>
//   <div class="card-body">
//     <div class="card" style="width: 18rem;">
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID#:${} </li>
//         <li class="list-group-item">Email:<a href="mailto:${}"> </a></li>
//         <li class="list-group-item">Github:<a href="https://github.com/${}"></a></li>
//       </ul>
//     </div>
//   </div>
// </div>
// </div> */
// }

// // <div class="col  p-3">
// // <div class="card h-100">
// //   <h3>Inter</h3>
// //   <h5>${}</h5>
// //   <p style="font-size: 50px"> &#128522; </p>
// //   <div class="card-body">
// //     <div class="card" style="width: 18rem;">
// //       <ul class="list-group list-group-flush">
// //         <li class="list-group-item">ID#:${} </li>
// //         <li class="list-group-item">Email:<a href="mailto:${}">${} </a></li>
// //         <li class="list-group-item">School:${} </li>
// //       </ul>
// //     </div>
// //   </div>
// // </div>
// // </div>
