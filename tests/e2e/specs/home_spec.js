describe("homepage tests", () => {
  before(() => {
    cy.visit("/")
  })
  it("should link metamask wallet", () => {
    cy.contains("Connect Wallet").click()
    cy.get("#wallet-connect-metamask").click()
    cy.acceptMetamaskAccess()
    cy.fetchMetamaskWalletAddress().then((address) => {
      cy.get(`div[title=${address}]`).should("exist")
    })
  })
  it("should be able to check wallet balances", () => {
    cy.get(".eqGhLO").contains("Wallet").click({ force: true })
    cy.contains("BNB Balance").should("exist")
    cy.contains("CAKE Balance").should("exist")
  })
  it("should be able to check recent transactions", () => {
    cy.get(".kUxtnz").contains("Transactions").click()
    cy.get(".cdAtbz").should("not.be.null")
  })
  it("should be able to disconnect wallet", () => {
    cy.get(".eqGhLO").contains("Disconnect").click({ force: true })
    cy.get("button").contains("Connect Wallet").should("exist")
  })
})
