var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class User implements UserInterface {
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name + " " + this.email);
    }
    return User;
}());
var john = new User("John Doe", "john@gmail.com", 34);
//console.log(john.name)
console.log(john.age);
var User2 = /** @class */ (function () {
    function User2(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name + " " + this.email);
    }
    User2.prototype.register = function () {
        console.log(this.name + " is now registered");
    };
    User2.prototype.payInvoice = function () {
        console.log(this.name + " paid invoice");
    };
    return User2;
}());
var john2 = new User2("John Doe", "john@gmail.com", 34);
john2.register();
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payIvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User2));
var mike = new Member(1, "Mike Smith", "mike@gmail.com", 33);
mike.payInvoice();
