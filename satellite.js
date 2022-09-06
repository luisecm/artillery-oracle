module.exports = { satelliteCreateAccount }

async function satelliteCreateAccount(page) {
  // Open new page
  await page.goto('https://satellite-dev.on.fleek.co/');
  
  // Enter PIN
  let pinInput = '[placeholder="Enter Pin\\.\\.\\."]'
  await page.waitForSelector(pinInput)
  await page.locator(pinInput).click()
  await page.locator(pinInput).fill('12345')
  await page.locator(pinInput).press('Enter');
  
  // Click on Create Account
  await page.waitForSelector('button:has-text("Create Account")')
  await page.locator('button:has-text("Create Account")').click();
  //await expect(page).toHaveURL('https://satellite-dev.on.fleek.co/#/setup/phrase');

  // Click on "I Saved It"
  await page.waitForSelector('button:has-text("I Saved It")')
  await page.locator('button:has-text("I Saved It")').click();
  //await expect(page).toHaveURL('https://satellite-dev.on.fleek.co/#/auth/register');
  
  // Enter username and status
  await page.waitForSelector('[placeholder="Neil Spaceman\\.\\.\\."]')
  await page.locator('[placeholder="Neil Spaceman\\.\\.\\."]').click()
  await page.locator('[placeholder="Neil Spaceman\\.\\.\\."]').fill('qa123')
  await page.locator('[placeholder="Ready for launch\\.\\.\\."]').click()
  await page.locator('[placeholder="Ready for launch\\.\\.\\."]').fill('testing');
  await page.locator('button:has-text("Sign in")').click();
  //await expect(page).toHaveURL('https://satellite-dev.on.fleek.co/#/friends');

  // Once that account is created, click on Files
  await page.waitForSelector('button:has-text("Files")')
  await page.locator('button:has-text("Files")').click();
  //await expect(page).toHaveURL('https://satellite-dev.on.fleek.co/#/files');
  
  // Click on New File to be redirected to consent file scanning
  await page.waitForSelector('button:has-text("New File")')
  await page.locator('button:has-text("New File")').click();
  
  // Allow file scanning toggle switch and close modal
  await page.waitForSelector('div:nth-child(5) > div:nth-child(2) > .switch-container > .switch-button')
  await page.locator('div:nth-child(5) > div:nth-child(2) > .switch-container > .switch-button').click();
  await page.locator('.close-button').click();

  // Click again on new file and upload a random file
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('button:has-text("New File")').click(),
  ]);
  await fileChooser.setFiles('error.txt')
}