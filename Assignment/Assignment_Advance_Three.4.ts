abstract class Department {

    constructor(public name: string) {
    }

    displayName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Finance"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department opens on wed in morning hours");
    }

    static displayMOM(): void {
        console.log("Displaying MOM(Minutes of Meeting) for Account meeting");
    }
}

let department: Department; // created a reference to an abstract type
department = new AccountingDepartment(); // Create and assign a non-abstract subclass
department.displayName();
department.printMeeting();
AccountingDepartment.displayMOM();