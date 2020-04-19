class Person {
     constructor(
         protected firstName: string,
         protected lastName: string,
         private age: number
    ) { }

    getFullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person: Person = new Person(`John`, `Doe`, 25);
console .log(person .getFullName());

class Employee extends Person {

    get employeeId(): number {
        return this.id;
    }

    set employeeId(employeeId: number) {
        this.id = employeeId;
    }

    constructor(
        private id: number,
        firstName: string,
        private middleName: string,
        lastName: string,
        age: number
    ) {
        super(firstName, lastName, age);
    }

    getFullName() : string {
        /* const nameSegments: Array<string> = super.getFullName().split(` `);
        nameSegments. splice(1, 0, this.middleName);
        const fullName = nameSegments.join(` `);
        return `${fullName}`; */
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
}

const manager: Employee = new Employee(1, `Jane`, `Patrick`, `Doe`, 30);
console.log(`${manager.getFullName()}`);
console.log(manager.employeeId);
manager.employeeId = 20;
console.log(manager.employeeId);
