import { test, expect } from "@playwright/test";

test("sign in successfully", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  page.getByRole("textbox", { name: "Seu e-mail" }).fill("johndoe@example.com");
  page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticação para o seu e-mail.",
  );

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("sign in with wrong credentials", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  page.getByRole("textbox", { name: "Seu e-mail" }).fill("invalid@example.com");
  page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Credenciais inválidas.");

  expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/sign-in", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estabelecimento" }).click();

  expect(page.url()).toContain("/sign-up");
});
