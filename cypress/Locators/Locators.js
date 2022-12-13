class locatorsPage{

    home = "//a[contains(text(), 'Home ')]"
    phone = "//a[contains(text(), 'Phones')]"
    laptop = "//a[contains(., 'Laptops')]"
    monitors = "//a[contains(., 'Monitors')]"
    firstProduct = "(//h4[@class='card-title'])[1]/a"
    addToCard = "//a[contains(text(), 'Add to cart')]"
    cart = "//a[contains(text(), 'Cart')]"
    placeOrder = "//button[contains(text(), 'Place Order')]"
    nameTextBox = "//input[@id='name']"
    countryTextBox = "//input[@id='country']"
    cityTextBox = "//input[@id='city']"
    creditCardTextBox = "//input[@id='card']"
    monthTextBox = "//input[@id='month']"
    yearTextBox = "//input[@id='year']"
    purchaseButton = "//button[contains(text(), 'Purchase')]"
// Contact
    contact = "//a[contains(., 'Contact')]"
    contactEmailTextBox = '//input[@id="recipient-email"]'
    contactNameTextBox = '//input[@id="recipient-name"]'
    messageTextBox = '//textarea[@id="message-text"]'
    sendMessage = '//button[contains(., "Send message")]'
    closeMessage = '(//button[contains(., "Close")])[1]'
//About us
    aboutUs = '(//a[contains(., "About us")])[1]'
    play = '//button[@title="Play"]'
    pause = '//button[@title="Pause"]'
    aboutUsClose = '(//button[contains(., "Close")])[5]'
// Log in
    login = "//a[contains(., 'Log in')]"
    userName = '//input[@id="loginusername"]'
    password = '//input[@id="loginpassword"]'
    loginClose = '(//button[contains(., "Close")])[4]'
// Sign up
    signup = '//a[contains(., "Sign up")]'
    signupUsername = '//input[@id="sign-username"]'
    signupPassword = '//input[@id="sign-password"]'
    signupClose = '(//button[contains(., "Close")])[2]'



   

}

export default locatorsPage;
