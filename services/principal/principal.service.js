const baseUrl = "http://localhost:3000/principal";

export const getAll = () => {
    return fetch(`${baseUrl}`);
   }
   
   export const create = (principal) => {
       return fetch(`${baseUrl}`, {
           method: 'POST',
           body: JSON.stringify(principal),
           headers: {
             'Content-type': 'application/json; charset=UTF-8',
           },
         })
   }
   
   export const update = (id, principal) => {
       return fetch(`${baseUrl}/${id}`, {
           method: 'PUT',
           body: JSON.stringify(principal),
           headers: {
               'Content-type': 'application/json; charset=UTF-8',
           },
       });
   }
   
