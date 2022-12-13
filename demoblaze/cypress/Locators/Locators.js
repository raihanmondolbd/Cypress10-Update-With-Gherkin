class locatorsPage{

    // url="https://khatabook.com/";
    url="https://demo.ferppi.fikuro.fi/#/";

    tilli = '#account-menu > span > span'
    english = '//a[contains(text(),"English")]' 
    sighin = '#login'
    username = '#username'
    password = '#password'
    signInSubmit = '.btn'

// Sales Order
    SalesTn_xpath = '//*[@id="sales"]'
    Ordertn_xpath = "//a/span[contains(text(), 'Sales Order')]"
    Sales_SOsortpage_xpath = "(//th[@field = 'salesOrderNo'])[1]"
    Sales_firstsales_xpath = '//div/table/tbody/tr[1]/td[2]/a'
    Sales_ordernum = "//jhi-salesorder-vertex/form/div/div[2]/div[1]/h2/span[2]"
// Sales Invoice
    SalesinvTn = "//span[contains(text(),'Sales Invoice') and @jhitranslate = 'global.menu.entities.salesInvoice' ]"
    First_inv = "//div/table/tbody/tr[1]/td[1]/a"
    invoice_no = "//span[@jhitranslate ='quotationgwApp.salesInvoice.detail.title' ]/following-sibling::span"
// Work Card
    top_nav = '//*[@jhitranslate="global.menu.entities.prodPlanning"]'
    workcard_nav = '//*[@jhitranslate="global.menu.entities.workCard"]'
    first_view = '(//*[@jhitranslate="entity.action.view"])[1]'
    work_number = "//*[@id='field_worknumber']"
// Sales Machine Test
    Sales_SOCreateNewButton_xpath = '/html/body/jhi-main/div/div/div[2]/div/jhi-sales-order-evo-advanced-list/div/h2/button[1]/span[2]'
    Sales_SONewTitle_xpath = '/html/body/jhi-main/div/div/div[2]/div/jhi-salesorder-vertex/form/div/div[2]/div[1]/h2/span[2]'
    Sales_SOCustomerNameSearch_xpath = '(//*[@id="customerName"])[1]'
    locator_customername_dropdown_firstchild_xpath = '(//button[@class="dropdown-item ng-star-inserted"][@role="option"])[1]'
    Sales_SOTermofDeliverySearch_xpath = '//*[@id="field_termOfDelivery"]/div'
    locator_TOD_dropdown_firstchild_css ='(//button[@class="dropdown-item active ng-star-inserted"])[1]'

     

}

export default locatorsPage;
