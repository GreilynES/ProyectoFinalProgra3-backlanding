const baseUrl = 'http://localhost:3000/servicesL';

export const getAll = () => {
    return fetch(`${baseUrl}`);
}

export const create = (servicesL) => {
    return fetch(`${baseUrl}`, {
        method: 'POST',
        body: JSON.stringify(servicesL),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}

export const update = (id, servicesL) => {
    return fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(servicesL),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
}

