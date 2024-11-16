import * as servicesService from "../services/servicesL/servicesL.service.js";

window.addEventListener("load", (event) => {
    const spanResponseS = document.getElementById('json_responseS');

    //GET
    servicesService.getAll()
    .then(res => res.json())
    .then(principal => {
        spanResponseS.innerHTML = JSON.stringify(principal, null, 2);
    })
    .catch(error => {
        console.error('Error durante el fetch:', error);
        spanResponseS.innerHTML = 'Error durante el fetch.';
    });


    //UPDATE
    const updateFormServiceL = document.getElementById('frmUpdateServiceL');
    updateFormServiceL.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        try {
            const formData = new FormData(updateFormServiceL);       
            const formProps = Object.fromEntries(formData);
            const servicesLId = formProps.id;
            delete formProps.id;

            const response = await servicesService.update(servicesLId, formProps);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const text = await response.text();
            const servicesLPrincipal = text ? JSON.parse(text) : {};
            console.log('Actualizado:', servicesLPrincipal);

            //Refrescar Página
            location.reload(); 

            // Limpiar los campos del formulario después de la actualización
            updateFormServiceL.reset();
        } catch (error) {
            console.error('Error al actualizar:', error);
            alert('Error al actualizar');
        }
    });
    //FIN UPDATE

});
