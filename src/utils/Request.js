import server from '../configs/server';

class Request {
    api(method, url, action) {
        const params = {
            method: method,
            headers: { 'Accept': 'application/json' },
            mode: 'cors',
            cache: 'default'
        };
    
        fetch(`${server.url}${url}`, params)
            .then(raw => raw.json().then(data => (
                {
                    status: raw.status,
                    data: data 
                })))
            .then(response => {
                action(response);
            });
    }

    get(url, action) {
        this.api('GET', url, action);
    }

    post(url, action) {
        this.api('POST', url, action);
    }

    put(url, action) {
        this.api('PUT', url, action);
    }

    remove(url, action) {
        this.api('DELETE', url, action);
    }
}

export default new Request();