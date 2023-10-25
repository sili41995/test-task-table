export interface IItem {
  id?: string;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}

export interface IUpdateItemData {
  itemInfo: IItem;
  id: string;
}

export interface ICredentials {
  username: string;
  password: string;
}

export interface IFetchItemsSettings {
  itemOffset: number;
  itemsPerPage: number;
}

export interface IFetchItemsResponse {
  results: IItem[];
  count: number;
}

export interface ITableInitialState {
  items: IItem[];
  isLoading: boolean;
  isLoaded: boolean;
  error: string | null;
  count: number;
}

export interface IAuthInitialState {
  isLoggedIn: boolean;
  isLoading: boolean;
}

export interface IInitialState {
  table: ITableInitialState;
  auth: IAuthInitialState;
}
