const {test,expect} = require ('@playwright/test')
test('Title and Login shetty', async ({page})=>
{
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  const Title = await page.title()
  console.log ('Title of the page is ', Title)
  await page.locator('#username').fill('shivangi@12345')
  await page.locator('#password').fill('12345')
  await page.locator('.radiotextsty').last().click()
  await page.locator('#okayBtn').click()
  expect( page.locator('.radiotextsty').last()).toBeChecked()
  const dropdown= page.locator('select.form-control')
  await dropdown.selectOption('Consultant')
  await page.locator('#terms').click()
  await page.locator("[type='submit']").click()
  console.log(await page.locator('[style*="block"]').textContent())
  await page.locator('#username').fill('rahulshettyacademy')
  await page.locator("#password").fill('learning')
  await page.locator("[type='submit']").click()

  await page.pause()
  
})
