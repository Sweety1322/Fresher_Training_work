const {test,expect} = require ('@playwright/test')

test('Title and Login', async ({page})=>
{
  await page.goto('https://www.saucedemo.com/')
  const titlE =await page.title()
  console.log('Page title is ', titlE)
  await expect (page).toHaveTitle('Swag Labs')
  await page.locator('#user-name').fill("Sweety")
  await page.locator('#password').fill("abcd")
  await page.locator('[type="submit"]').click()
  await page.getByText('Epic sadface: Username and password do not match any user in this service').isVisible()
  await page.locator('.error-button').click()
  await page.fill('#user-name', '')
  await page.locator('#user-name').fill("standard_user")
  await page.fill('#password', '')
  await page.locator('#password').fill('secret_sauce')
  await page.locator('[type="submit"]').click()
  
  await page.pause()
})
