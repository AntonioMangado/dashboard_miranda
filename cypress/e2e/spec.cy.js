describe('Login Page', () => {
  it('doesnt log in when clicking Login with no credentials', () => {
    cy.visit('http://dashboard--miranda.s3-website.eu-west-3.amazonaws.com/')

    cy.contains('Login').click()

    cy.url().should("include", "/login")
  })

  it('logs in when clicking Login with credentials', () => {
    cy.visit('http://dashboard--miranda.s3-website.eu-west-3.amazonaws.com/')

    
    cy.get('input[type="text"]').type('admin')
    cy.get('input[type="password"]').type('admin')
    cy.contains('Login').click()
    cy.url().should("include", "/dashboard")
})
})