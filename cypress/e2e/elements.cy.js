/// <reference types="cypress" />

describe("Test default state of the app", () => {
	before(() => {
		cy.visit("https://app.sherpany.com/");

		cy.intercept({
			url: "https://dc.services.visualstudio.com/v2/track",
		}).as("pageload");

		cy.wait("@pageload");
	});
	beforeEach(() => {
		cy.viewport("macbook-16");
	});
	it("should show the language selector", () => {
		cy.get(".ant-select-selector").should("be.exist");
	});
	it("should show 4 options on clicking lang selector", () => {
		let arr = ["English", "Deutsch", "Français", "Italiano"];

		// cy.get('[label="Deutsch"]')
		cy.get(".ant-select-selector").click();

		cy.wait(100);

		arr.forEach((lang) => {
			cy.get(`[label="${lang}"]`).should("be.exist");
		});
	});

	it("should show logo at first", () => {
		cy.wait(100);

		cy.get(".SherpanyTopLogo_logo__76RxV > img").should("be.exist");
	});
	it("form elements should exist", () => {
		// cy.wait(1000);

		cy.get(".ContentBox_container__15nrF").should("be.exist");

		cy.get(".ContentBox_container__15nrF")
			.find("h1")
			.should("have.text", "Log in");

		cy.get(".ContentBox_container__15nrF")
			.find("input")
			.should((input) => expect(input.length).equal(2));

		cy.get(".ContentBox_container__15nrF")
			.find("button")
			.should((button) => expect(button.length).equal(3));
		cy.get(".ContentBox_container__15nrF")
			.find(".AlternativeAction_content__IZaZ1")
			.should("be.exist");
	});
	it("should test the state of additional links", () => {
		cy.get(".AdditionalActions_container__n45Zu").should("be.exist");

		cy.get(".AdditionalActions_container__n45Zu")
			.find("a")
			.should((a) => expect(a.length).equal(1));

		cy.get(".AdditionalActions_container__n45Zu")
			.find("span")
			.should((span) => expect(span.length).equal(2));
	});
	it("should test footer of the app", () => {
		cy.get(".Footer_container__7J6SE").should("be.exist");

		cy.get(".FooterLinks_list__JqofQ").children().should("have.length", 4);

		cy.get(".Footer_nativeApps__bB0BC").children().should("have.length", 2);

		cy.get(".NativeAppsLinks_list__4RisE").children().should("have.length", 3);
	});
});
