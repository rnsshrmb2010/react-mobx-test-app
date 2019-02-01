import { observable } from 'mobx';

export default class {
  id = null;
  @observable first_name = null;
  @observable last_name = null;
  @observable email = null;
  @observable phone_no = null;
  @observable role = null;
  @observable user_id = null;
  @observable user_role_id = null;
  @observable username = null;
  @observable role_description = null;
  @observable status = null;
  
  static jsonToArray(json) {
    let dataObject = {};
    json.map(item => {
        dataObject[item.id] = this.constructFromJSON(item);
    });
    return dataObject;
  }

  static constructFromJSON(json) {
    return new this(
      json.id,
      json.first_name,
      json.last_name,
      json.email,
      json.phone_no,
      json.role,
      json.user_id,
      json.user_role_id,
      json.username,
      json.role_description,
      json.status,
    );
  }    

  constructor(id, first_name, last_name, email, phone_no, role, user_id, user_role_id, username, role_description, status) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_no = phone_no;
    this.role = role;
    this.user_id = user_id;
    this.user_role_id = user_role_id;
    this.username = username;
    this.role_description = role_description;
    this.status = status;
  }

  update(entries) {
    for (let key in entries) {
      this[key] = entries[key];
    }
  }
}