const Employee = require('../library/Employee')
const Intern = require('../library/Intern')

describe("Intern", () =>{
    describe("Intialization", () => {
        it("should instantiate an intern instance", ()=>{
            const intern = new Intern ();
            expect(typeof intern).toBe("object")
        });
    });

    describe("Getter methods", ()=> {
        it("should get name via getName()", ()=>{
            const name = "Max"
            const intern = new Intern (name);
            const internName = intern.getName();
            expect(internName).toBe(name);
        });
        it("should get id via getId()", ()=>{
            const id = 100
            const intern = new Intern ("Max", id)
            const internId = intern.getId();
            expect(internId).toBe(id);
        });
        it("should get email via getEmail()", ()=>{
            const email = "test@test.com";
            const intern = new Intern ("Max", 100, email);
            const internEmail = intern.getEmail();
            expect(internEmail).toBe(email);
        });
        it("should get school via getSchool()", ()=>{
            const school = "Georgia Tech"
            const intern = new Intern ("Max", 100, "test@test.com", school);
            const internSchool = intern.getSchool();
            expect(internSchool).toBe(school);
        })
    });
});