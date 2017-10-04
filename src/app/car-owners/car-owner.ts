export class CarOwner {
  public id: number;
  public name: string;
  public carReg: string;
  public email: string;
  public skypeId: string;
  public createdAt?: string;
  public updateAt?: string;
  public __v?: number;
  public _id: string;

  constructor(values: Object = {}){
    Object.assign(this, values)
  }

}
