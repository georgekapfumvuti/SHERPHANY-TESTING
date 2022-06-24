/// <reference types="cypress" />

describe("Sherpany Language Selection", () => {
	before(() => {
		cy.intercept({
			url: "https://dc.services.visualstudio.com/v2/track",
		}).as("pageload");

		// cy.wait("@pageload");
	});
	beforeEach(() => {
		cy.visit("https://app.sherpany.com/");
		cy.viewport("macbook-16");

		cy.intercept({
			url: "https://dc.services.visualstudio.com/v2/track",
		}).as("pageload");

		cy.wait("@pageload");
	});

	it("user selects English Language", () => {
		cy.get(".ant-select-selector").should("contain.text", "English");

		let logInForm = [
			"Log in",
			"Email",
			"Password",
			"Forgot password?",
			"Log in",
			"or",
			"Log in with SSO",
		];

		logInForm.forEach((logInText) => {
			cy.get(".ContentBox_container__15nrF").contains(logInText);
		});

		cy.get(".RequestDemoAction_container__uqBFr > span").should(
			"contain.text",
			"No account yet?",
		);
		cy.get(".RequestDemoAction_link__GwUR1").should(
			"contain.text",
			"Request a demo",
		);
		cy.get(".GetHelpAction_container___DT7O > .ant-btn > span").should(
			"contain.text",
			"Get help",
		);

		let footerLinks = [
			"Sherpany.com",
			"Meeting resources",
			"Privacy Policy",
			"Terms of Use",
			"Download on",
		];

		footerLinks.forEach((footerLink) => {
			cy.get(".Footer_content__8Mqy8").contains(footerLink);
		});
	});

	it("user selects Deutsch Language", () => {
		cy.get(".ant-select-selector").click({ force: true });
		cy.get('[label="Deutsch"]').click({ force: true });

		cy.intercept({
			url: "https://app.sherpany.com/static/locales/de-CH/translations.json",
		}).as("translation");

		cy.wait(1000);

		cy.get(".ant-select-selector").should("contain.text", "Deutsch");

		let logInForm = [
			"Anmelden",
			"E-Mail",
			"Passwort",
			"Passwort vergessen?",
			"Anmelden",
			"oder",
			"Mit SSO anmelden",
		];

		logInForm.forEach((logInText) => {
			cy.get(".ContentBox_container__15nrF").contains(logInText);
		});

		cy.get(".RequestDemoAction_container__uqBFr > span").should(
			"contain.text",
			"Noch kein Konto?",
		);
		cy.get(".RequestDemoAction_link__GwUR1").should(
			"contain.text",
			"Demo anfordern",
		);
		cy.get(".GetHelpAction_container___DT7O > .ant-btn > span").should(
			"contain.text",
			"Brauchen Sie Hilfe?",
		);

		let footerLinks = [
			"Sherpany.com",
			"Ressourcen für die Sitzung",
			"Datenschutzbestimmungen",
			"Nutzungsbedingungen",
			"Herunterladen auf",
		];

		footerLinks.forEach((footerLink) => {
			cy.get(".Footer_content__8Mqy8").contains(footerLink);
		});
	});

	it("user selects Français Language", () => {
		cy.get(".ant-select-selector").click({ force: true });
		cy.get('[label="Français"]').click({ force: true });

		cy.intercept({
			url: "https://app.sherpany.com/static/locales/fr-FR/translations.json",
		}).as("translation");

		cy.wait(1000);

		cy.get(".ant-select-selector").should("contain.text", "Français");

		let logInForm = [
			"S'identifier",
			"E-mail",
			"Mot de passe",
			"Mot de passe oublié?",
			"S'identifier",
			"ou",
			"Se connecter avec SSO",
		];

		logInForm.forEach((logInText) => {
			cy.get(".ContentBox_container__15nrF").contains(logInText);
		});

		cy.get(".RequestDemoAction_container__uqBFr > span").should(
			"contain.text",
			"Pas encore de compte ?",
		);
		cy.get(".RequestDemoAction_link__GwUR1").should(
			"contain.text",
			"Demander une démo",
		);
		cy.get(".GetHelpAction_container___DT7O > .ant-btn > span").should(
			"contain.text",
			"Recevoir de l'aide",
		);

		let footerLinks = [
			"Sherpany.com",
			"Ressources pour la réunion",
			"Déclaration de protection de données",
			"Conditions d'utilisation",
			"Téléchargement sur",
		];

		footerLinks.forEach((footerLink) => {
			cy.get(".Footer_content__8Mqy8").contains(footerLink);
		});
	});

	it("user selects Italiano Language", () => {
		cy.get(".ant-select-selector").click({ force: true });
		cy.get('[label="Italiano"]').click({ force: true });

		cy.intercept({
			url: "https://app.sherpany.com/static/locales/it-IT/translations.json",
		}).as("translation");

		cy.wait(1000);

		cy.get(".ant-select-selector").should("contain.text", "Italiano");

		let logInForm = [
			"Accedere",
			"Email",
			"Password",
			"Password dimenticata?",
			"Accedere",
			"o",
			"Accedere con SSO",
		];

		logInForm.forEach((logInText) => {
			cy.get(".ContentBox_container__15nrF").contains(logInText);
		});

		cy.get(".RequestDemoAction_container__uqBFr > span").should(
			"contain.text",
			"Non ha ancora un account?",
		);
		cy.get(".RequestDemoAction_link__GwUR1").should(
			"contain.text",
			"Richiedere una demo",
		);
		cy.get(".GetHelpAction_container___DT7O > .ant-btn > span").should(
			"contain.text",
			"Ottenere aiuto",
		);

		let footerLinks = [
			"Sherpany.com",
			"Risorse per le riunioni",
			"Informativa sulla privacy",
			"Condizioni d'uso",
			"Scaricare su",
		];

		footerLinks.forEach((footerLink) => {
			cy.get(".Footer_content__8Mqy8").contains(footerLink);
		});
	});
});
