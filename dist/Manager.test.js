const Employee = require('../library/Manager');
const Manager = require('../library/Manager');


describe("Manager", () => {
    describe("Intialization", () => {
        it("should instantiate an manager instance", () => {
            const manager =new Manager();
            expect(typeof manager).toBe("object");
        });
    });


    describe("Getter methods", () => {
        it("should get a name via getName()", () => {
            const name = "Max";
            const manager = new Manager(name);
            const managerName = manager.getName();
            expect(managerName).toBe(name);
        });
    });
    it("should get id via getId()", () => {
        const id = 100;
        const manager = new Manager("Max", id, "test@test.com");
        const managerid = manager.getId();
        expect(managerid).toBe(id);
    });
    it("should get email via getEmail()", () => {
        const email = "test@test.com"
        const manager = new Manager("Max", 100, email)
        const manageremail = manager.getEmail();
        expect(manageremail).toBe(email);
    });
    it("should get role via getRole()", () => {
        const role = "Manager";
        const manager = new Manager ("Max", 100, "test@test.com", role);
        const managerrole = manager.getRole ();
        expect(managerrole).toBe(role);

    });
    it("should get officeNumber via getOfficeNumber()", () => {
        const officeNumber = 102
        const manager = new Manager("Max", 100, "test@test.com", officeNumber)
        const managerofficeNumber = manager.getOfficeNumber();
        expect(managerofficeNumber).toBe(officeNumber);
    });

});    