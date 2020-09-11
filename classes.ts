interface UserInterface {
	name: string;
	email: string;
	age: number;
	register();
	payInvoice();
}

//class User implements UserInterface {

class User {
	private name: string;
	private email: string;
	public age: number;

	constructor(name: string, email: string, age: number) {
		this.name = name;
		this.email = email;
		this.age = age;

		console.log("User Created: " + this.name + " " + this.email);
	}
}

let john = new User("John Doe", "john@gmail.com", 34);

//console.log(john.name)

console.log(john.age);

class User2 {
	private name: string;
	private email: string;
	public age: number;

	constructor(name: string, email: string, age: number) {
		this.name = name;
		this.email = email;
		this.age = age;

		console.log("User Created: " + this.name + " " + this.email);
	}

	register() {
		console.log(this.name + " is now registered");
	}
	payInvoice() {
		console.log(this.name + " paid invoice");
	}
}

let john2 = new User2("John Doe", "john@gmail.com", 34);

john2.register();

class Member extends User2 {
	id: number;

	constructor(id: number, name: string, email: string, age: number) {
		super(name, email, age);
		this.id = id;
	}

	payIvoice() {
		super.payInvoice();
	}
}

let mike: User2 = new Member(1, "Mike Smith", "mike@gmail.com", 33);
mike.payInvoice();
