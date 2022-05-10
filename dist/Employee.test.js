const Employee = require('../library/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance", ()=> {
            const employee =new Employee ();
            expect(typeof employee).toBe("object");
        });
    
    });

    describe ("Getter methods", () => {
        it("should get name via getName()", () => {
            const name = "Max";
            const employee = new Employee (name);
            const employeeName = employee.getName ();
            expect(employeeName).toBe(name);

        });
        it("should get id via getId())", () => {
            const id = 100;
            const employee = new Employee ("Max", id, "test@test.com");
            const employeeid = employee.getId ();
            expect(employeeid).toBe(id);

        });
        it("should get email via getEmail()", () => {
            const email = "test@test.com";
            const employee = new Employee ("Max", 100, email);
            const employeeemail = employee.getEmail ();
            expect(employeeemail).toBe(email);

        });
        it("should get role via getRole()", () => {
            const role = "Employee";
            const employee = new Employee ("Max", 100, "test@test.com", role);
            const employeerole = employee.getRole ();
            expect(employeerole).toBe(role);

        });

    });

});