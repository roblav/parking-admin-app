export class CarOwner {
  public id: number;
  public name: string;
  public carReg: string;
  public email: string;
  public skypeId: string;

  constructor(values: Object = {}){
    Object.assign(this, values)
  }

}
