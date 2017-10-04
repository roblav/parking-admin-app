export class CarOwner {
  public _id?: string;
  public name: string;
  public carReg: string;
  public email: string;
  public skypeId: string;
  public createdAt?: string;
  public updateAt?: string;
  public __v?: number;

  constructor(values: Object = {}){
    Object.assign(this, values)
  }

}
