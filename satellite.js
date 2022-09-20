module.exports = { satelliteCreateAccount }

async function satelliteCreateAccount(page) {
  // Open new page
  await page.goto('https://hippo.satellite.im/');
  
  // Enter PIN
  let pinInput = '.input'
  await page.waitForSelector(pinInput)
  await page.locator(pinInput).click()
  await page.locator(pinInput).fill('12345')
  await page.locator(pinInput).press('Enter');
  
  // Click on Create Account
  await page.waitForSelector('button:has-text("Create Account")')
  await page.locator('button:has-text("Create Account")').click();

  // Click on "I Saved It"
  await page.waitForSelector('button:has-text("I Saved It")')
  await page.locator('button:has-text("I Saved It")').click();
  
  // Enter username and status
  await page.waitForSelector('[placeholder="Neil Spaceman\\.\\.\\."]')
  await page.locator('[placeholder="Neil Spaceman\\.\\.\\."]').click()
  await page.locator('[placeholder="Neil Spaceman\\.\\.\\."]').fill('qa123')
  await page.locator('[placeholder="Ready for launch\\.\\.\\."]').click()
  await page.locator('[placeholder="Ready for launch\\.\\.\\."]').fill('testing');
  await page.locator('button:has-text("Sign in")').click();

  // Close Welcome Modal
  /*let gotItButton = "//div[@id='app']//div[@class='container']//div[@class='welcome-content']/button[@type='button']"
  await page.waitForSelector(gotItButton)
  await page.locator(gotItButton).click();

  //Once that account is created, click on Files
  let filesButton = '.sidebar-full-btn.color-dark'
  await page.waitForSelector(filesButton)
  await page.locator(filesButton).click();
  
  // Allow file scanning toggle switch and close modal
  let newFileButton = '.add-container > .button.color-primary.size-md'
  await page.waitForSelector(newFileButton)
  await page.locator(newFileButton).click()

  // Consent to File Scanning Modal
  await page.waitForSelector('.confirm-button')
  await page.locator('.confirm-button').click()

  // Click again on new file and upload a random file
  //await page.waitForSelector(newFileButton)
  //await page.locator(newFileButton).click()
  //const [fileChooser] = await Promise.all([
  //  page.waitForEvent('filechooser'),
  //  page.locator('button:has-text("New File")').click(),
  //]);
  //await fileChooser.setFiles('testfile.txt')

  //Clear Local Storage
  //Click on Settings
  let settingsButton = '.circle-group > button:nth-of-type(2)'
  await page.waitForSelector(settingsButton)
  await page.locator(settingsButton).click()
  //Click on Storage
  await page.waitForSelector('text=Storage')
  await page.locator('text=Storage').click()
  //Click on Clear Local Storage
  await page.waitForSelector('text=Clear Local Storage')
  await page.locator('text=Clear Local Storage').click()
  // Confirm Local Storage Deletion
  await page.waitForSelector('text=Yes, Really, Clear Local Storage')
  await page.locator('text=Yes, Really, Clear Local Storage').click()

  //Ensure page was reloaded
  await page.waitForSelector('text=CHOOSE YOUR PASSWORD', { state: 'visible' })*/
}