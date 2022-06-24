/// <reference types="cypress" />

describe("Sherpany Login", () => {
	before(() => {
		cy.intercept({
			url: "https://dc.services.visualstudio.com/v2/track",
		}).as("pageload");

		// cy.wait("@pageload");
	});
	beforeEach(() => {
		cy.visit("https://app.sherpany.com/");
		cy.viewport("macbook-16");
	});

	it("user enters no username or password", () => {
		cy.get("#email").should("be.empty");
		cy.get("#password").should("be.empty");
		cy.get(".ant-btn-primary").should("be.enabled");
		cy.get(".ant-btn-primary").click();
		cy.get(".ErrorMessage_message__GdM4G").should(
			"have.text",
			"Please enter a valid email address.",
		);
	});

	it("user enters incorrect username and password", () => {
		cy.intercept({
			url: "https://app.sherpany.com/api/authenticate/primary/password/prove/",
		}).as("auth");

		let responseBody = {
			status: "fail",
			code: "authentication:password:wrong-password",
			message:
				"Please enter a correct email address and password. Note that the password is case-sensitive.",
			description: "Unknown email and/or password.",
		};

		cy.get(".help").should("not.exist");
		cy.get("#email").type("user@email.com");
		cy.get("#password").type("pass");
		cy.get(".ant-btn-primary").click();
		cy.get(".ErrorMessage_container__osLtK").should(
			"have.text",
			"We couldn't log you in. Please check your email address and password and try again.",
		);

		cy.wait("@auth").then((interception) => {
			assert.isNumber(interception.response.statusCode, 400);
			assert.isObject(interception.response.body, responseBody);
		});

		cy.location("pathname").should("equal", "/");
	});
});
