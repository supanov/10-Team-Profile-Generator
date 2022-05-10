const Employee = require('../library/Employee')
const Engineer = require('../library/Engineer')

describe ("Engineer", () => {
    describe("Initialization", () => {
        it("should instantiate an engineer instance", ()=> {
            const engineer = new Engineer ();
            expect(typeof engineer).toBe("object");
        });

    });

    describe("Getter methods", () => {
        it("should get name via getName()", ()=>{
            const name = "Max";
            const engineer = new Engineer (name);
            const engineerName = engineer.getName ();
            expect(engineerName).toBe(name);
        });
        it("should get id via getId()", () => {
            const id =100
            const engineer = new Engineer ("Max", id);
            const engineerid = engineer.getId ();
            expect(engineerid).toBe(id);
        });
        it("should get email via getEmail()", ()=>{
            const email = "test@test.com";
            const engineer = new Engineer ("Max", 100, email);
            const engineerEmail = engineer.getEmail();
            expect(engineerEmail).toBe(email);
        });
     
        it ("should get github via getGithub()", ()=>{
            const github = "Github username"
            const engineer = new Engineer ("Max", 100, "test@test.com", github);
            const engineergithub = engineer.getGitHub();
            expect(engineergithub).toBe(github)
        }) ;
    });
});