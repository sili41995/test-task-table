class TableServiceApi {
  #BASE_URL = 'http://146.190.118.121/api';

  loginUser(data, signal) {
    const options = {
      signal,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.#BASE_URL}/login/`, options).then((response) =>
      response.json()
    );
  }

  fetchItems(signal) {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.#BASE_URL}/table/`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Loading table failed');
      }
      return response.json();
    });
  }

  addContact(data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.#BASE_URL}/contacts`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Adding a contact failed');
      }
      return response.json();
    });
  }

  deleteContact(id) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.#BASE_URL}/contacts/${id}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Deleting a contact failed');
        }
        return response.json();
      }
    );
  }

  updateContact({ id, data }) {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.#BASE_URL}/contacts/${id}`, options).then(
      (response) => {
        if (!response.ok) {
          throw new Error('Contact update failed');
        }
        return response.json();
      }
    );
  }
}

const tableServiceApi = new TableServiceApi();

export default tableServiceApi;
