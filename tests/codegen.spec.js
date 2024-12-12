import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Checkboxes' }).click();
  await page.getByRole('checkbox').first().check();
  await expect(page.getByRole('checkbox').first()).toBeChecked();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Frames', exact: true }).click();
  await page.getByRole('link', { name: 'iFrame' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('iframe[title="Rich Text Area"]').contentFrame().locator('html').click();
});