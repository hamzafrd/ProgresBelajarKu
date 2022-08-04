class Animal {
    constructor(name = '',age = 0, isMammal){
      this.name = name
      this.age = age
      this.isMammal = isMammal
    }
  }
  
  class Rabbit extends Animal {
    constructor(item1,item2,item3,testItem4){
        super(item1,item2,testItem4)
        this.aaaaaaaa = true
        this.bbbbbbbb = "test2"
        // this.isMammal = "Ya Rabbit adalah Mammal"
    }
  }

  const a = new Rabbit("Hai",17,false,'this is properti number 4')
  console.log(a)
/** Output
Rabbit {
  name: 'Hai',
  age: 17,
  isMammal: 'this is properti number 4',
  aaaaaaaa: true,
  bbbbbbbb: 'test2' }
**/

///////////////////////////////////////////////////////////////////////////// Other Example
class Mail {
    constructor(author) {
        this.from = "from : " + author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}
class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount =isBussinessAccount;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'} Phone Number : ${this.phoneNumber}`;
    }
}
const wa1 = new WhatsApp('','', '6281111111');
console.log(wa1.from);

//output : from : 6281111111
