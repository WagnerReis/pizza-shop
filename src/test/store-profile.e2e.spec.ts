import { test, expect } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByText("Perfil da loja").click();

  await page.getByRole("textbox", { name: "Nome" }).fill("Rocket pizza");
  await page
    .getByRole("textbox", { name: "Descrição" })
    .fill("Another description");

  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Perfil atualizado com sucesso!");

  await expect(toast).toBeVisible();

  await page.getByRole("button", { name: "Cancelar" }).click();

  await expect(
    page.getByRole("button", { name: "Rocket pizza" }),
  ).toBeVisible();
});

test("update profile with error", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByText("Perfil da loja").click();

  await page.getByRole("textbox", { name: "Nome" }).fill("Another name");
  await page
    .getByRole("textbox", { name: "Descrição" })
    .fill("Another description");

  await page.getByRole("button", { name: "Salvar" }).click();

  await page.waitForLoadState("networkidle");

  const toast = page.getByText("Falha ao atualizar o perfil, tente novamente.");

  await expect(toast).toBeVisible();
});
