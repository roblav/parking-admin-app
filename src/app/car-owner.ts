export class CarOwner {

  public name: string;
  public carReg: string;
  public email: string;
  public skypeId: string;

  constructor(values: Object = {}){
    Object.assign(this, values)
  }

}
