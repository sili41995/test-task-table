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
