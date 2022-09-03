import server from '../configs/server';

function api(method, url, action) {
    const params = {
        method: method,
        headers: { 'Accept': 'application/json' },
        mode: 'cors',
        cache: 'default'
    };

    fetch(`${server.url}${url}`, params).then(function (response) {
        const state = {
            status: 'load',
            type: 200,
            data: response.body,
        }

        console.log(response);

        action(state);
    })
}


function get(url, action) {
    api('GET', url, action);
}

function post(url, action) {
    api('POST', url, action);
}

function put(url, action) {
    api('PUT', url, action);
}

function remove(url, action) {
    api('DELETE', url, action);
}

const request =  {
    get,
    post,
    put,
    delete: remove,
};

export default request;