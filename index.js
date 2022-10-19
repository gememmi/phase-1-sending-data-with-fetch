
// write a function, submitData, that takes two strings as arguments, one representing a user's name and the other representing a user's email.

const newData = {
    name :"Steve",
    email :"steve@steve.com",
};


const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(newData),
  };
  

function createNewData(userData){
  // userData.forEach(user => {
    const h2 = document.createElement('h2')
    h2.textContent = userData.id
    document.body.appendChild(h2)


  // })

}

// function toAppend(error){
//   const h2 = document.createElement('h2')
//   h2.textContent = error
//  document.body.appendChild(h2)
// }

function submitData(){
    return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(userData => createNewData(userData))
    .catch(error => {
     const h2 = document.createElement('h2')
     h2.textContent = error
    document.body.appendChild(h2)
    })

}


// function createDimSums(fetchedDimSums){
//     fetchedDimSums.forEach( dimSum => { 
//     const h2 = document.createElement('h2')
//         h2.textContent = dimSum.name
//         dimSumContainer.appendChild(h2)
//     })
// }
submitData();