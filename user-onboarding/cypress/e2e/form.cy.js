describe("Users App", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const usernameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const tosInput = () => cy.get("input[name=tos]");
    const submitInput = () => cy.get(`input[id="subBtn"]`);

    

    it("checking if proper elements are showing", () => {

        usernameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        tosInput().should("exist");
        submitInput().should("exist")
    })

    it("filling in text boxes, checking tos & submitng ", () => {
        usernameInput()

            .type("dp999")
            .should("have.value", "dp999");

        emailInput()

            .type("dp@999.org")
            .should("have.value", "dp@999.org");

        passwordInput()

            .type("password1")
            .should("have.value", "password1")

        tosInput()
            .click()

        submitInput()
            .click()


    })

      
            const divError = () => cy.get(`div[id="errorsCy"]`) 

    it("form validation if an input is left empty", () => {
        usernameInput()
            .type("dp")
            .should("have.value", "dp");

       divError().should("exist")
    })


})