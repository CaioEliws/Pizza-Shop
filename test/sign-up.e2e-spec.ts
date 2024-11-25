import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Joel Dom')
  await page.getByLabel('Seu e-mail').fill('joeldom@gmail.com')
  await page.getByLabel('Seu celular').fill('2184710278')

  await page.getByRole('button', { name: 'Concluir cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!.')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('Joel Dom')
  await page.getByLabel('Seu e-mail').fill('joeldom1@gmail.com')
  await page.getByLabel('Seu celular').fill('2184710278')

  await page.getByRole('button', { name: 'Concluir cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})