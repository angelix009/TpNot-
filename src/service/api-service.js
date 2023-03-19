class ApiService {
    async get(url) {
        const headers = {
            method: 'GET'
        };

        return fetch(url, headers)
            .then(response => {
                if (!response.ok)
                    throw new Error('Une erreur est survenue durant l\'appel HTTP.');

                return response.json();
            });
    }

    async post(url, data) {
        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(url, headers)
            .then(response => {
                if (!response.ok)
                    throw new Error('Une erreur est survenue durant l\'appel HTTP.');

                return response.json();
            });
    }
}