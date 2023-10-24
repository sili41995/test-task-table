class TableServiceApi {
  #BASE_URL = 'https://technical-task-api.icapgroupgmbh.com/api';

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

  fetchItems({ itemOffset, itemsPerPage }, signal) {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    return fetch(
      `${this.#BASE_URL}/table?limit=${itemsPerPage}&offset=${itemOffset}`,
      options
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Loading table failed');
      }
      return response.json();
    });
  }

  fetchItemById(id, signal) {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    return fetch(`${this.#BASE_URL}/table/${id}`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Loading table failed');
      }
      return response.json();
    });
  }

  updateItem({ id, itemInfo }) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(itemInfo),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.#BASE_URL}/table/${id}/`, options).then((response) =>
      response.json()
    );
  }
}

const tableServiceApi = new TableServiceApi();

export default tableServiceApi;
