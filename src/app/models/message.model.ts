export class Message {
  constructor(
    //public keyword is optional since it's put as default by TS
    public idm: number, //message id
    public idt: string, //train id
    public idu: string, //user id
    public text: string, //message text
    public idr?: string, //optional id of receiver
  ) {}
}
