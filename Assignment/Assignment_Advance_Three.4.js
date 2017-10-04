var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.displayName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Finance") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department opens on wed in morning hours");
    };
    AccountingDepartment.displayMOM = function () {
        console.log("Displaying MOM(Minutes of Meeting) for Account meeting");
    };
    return AccountingDepartment;
}(Department));
var department; // created a reference to an abstract type
department = new AccountingDepartment(); // Create and assign a non-abstract subclass
department.displayName();
department.printMeeting();
AccountingDepartment.displayMOM();
