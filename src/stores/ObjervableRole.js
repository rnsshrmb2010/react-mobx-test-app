import { observable } from 'mobx';

export default class {
  id = null;
  @observable name = null;
  static jsonToArray(json) {
    let tables = {};
    return json.map(item => {
      return tables[item.id] = this.constructFromJSON(item);
    });
  }

  static constructFromJSON(json) {
    return new this(
      json.id,
      json.name
    );
  }    

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  update(entries) {
    for (let key in entries) {
      this[key] = entries[key];
    }
  }
}