import {
  ICredentials,
  IFetchItemsSettings,
  IUpdateItemData,
} from 'types/types';

class TableServiceApi {
  private BASE_URL = 'https://technical-task-api.icapgroupgmbh.com/api';

  loginUser(data: ICredentials, signal: AbortSignal) {
    const options = {
      signal,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/login/`, options).then((response) =>
      response.json()
    );
  }

  fetchItems(
    { itemOffset, itemsPerPage }: IFetchItemsSettings,
    signal: AbortSignal
  ) {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    return fetch(
      `${this.BASE_URL}/table?limit=${itemsPerPage}&offset=${itemOffset}`,
      options
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Loading table failed');
      }
      return response.json();
    });
  }

  fetchItemById(id: string, signal: AbortSignal) {
    const options = {
      signal,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    return fetch(`${this.BASE_URL}/table/${id}`, options).then((response) => {
      if (!response.ok) {
        throw new Error('Loading table failed');
      }
      return response.json();
    });
  }

  updateItem({ id, itemInfo }: IUpdateItemData) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(itemInfo),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/table/${id}/`, options).then((response) =>
      response.json()
    );
  }
}

const tableServiceApi = new TableServiceApi();

export default tableServiceApi;
