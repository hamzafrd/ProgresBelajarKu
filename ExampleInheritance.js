class Animal {
    constructor(name = '',age = 0, isMammal){
      this.name = name
      this.age = age
      this.isMammal = isMammal
    }
  }
  
  class Rabbit extends Animal {
    constructor(a,b,tambahPropertiBaru){
        super(a,b,tambahPropertiBaru)
        this.gaharusSama = true
        this.isMammal = "Ya Rabbit adalah Mammal"
    }
  }

  const a = new Rabbit("Hai",17)
  console.log(a)

/////////////////////////////////////////////////////////////////////////////
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
