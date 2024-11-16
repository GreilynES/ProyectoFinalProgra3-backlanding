import * as principalService from "../services/principal/principal.service.js";

window.addEventListener("load", (event) => {
    const spanResponse = document.getElementById('json_response');

    //GET
    principalService.getAll()
        .then(res => res.json())
        .then(principal => {
            spanResponse.innerHTML = JSON.stringify(principal, null, 2);
        })
        .catch(error => {
            console.error('Error durante el fetch:', error);
            spanResponse.innerHTML = 'Error durante el fetch.';
        });

    //UPDATE
    const updateFormPrincipal = document.getElementById('frmUpdatePrincipal');
    updateFormPrincipal.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData(updateFormPrincipal);       
            const formProps = Object.fromEntries(formData);
            const principalId = formProps.id;
            delete formProps.id;

            const response = await principalService.update(principalId, formProps);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const text = await response.text();
            const updatedPrincipal = text ? JSON.parse(text) : {};
            console.log('Actualizado:', updatedPrincipal);

            //Refrescar Página
            location.reload(); 

            // Limpiar los campos del formulario después de la actualización
            updateFormPrincipal.reset();
        } catch (error) {
            console.error('Error al actualizar:', error);
            alert('Error al actualizar');
        }
    });
    //FIN UPDATE
});
