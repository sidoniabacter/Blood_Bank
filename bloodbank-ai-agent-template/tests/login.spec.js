const { expect, test } = require("@playwright/test");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const loginUrl = pathToFileURL(path.resolve(__dirname, "../login.html")).href;

let browserErrors;

test.beforeEach(async ({ page }) => {
  browserErrors = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") {
      browserErrors.push(message.text());
    }
  });
  await page.goto(loginUrl);
});

test.afterEach(() => {
  expect(browserErrors).toEqual([]);
});

test("enables Login only when both fields contain text", async ({ page }) => {
  const email = page.getByLabel("E-mail address");
  const password = page.getByLabel("Password");
  const loginButton = page.getByRole("button", { name: "Login" });

  await expect(loginButton).toBeDisabled();
  await email.fill("donor@bloodbank.test");
  await expect(loginButton).toBeDisabled();
  await password.fill("GiveLife2026");
  await expect(loginButton).toBeEnabled();
  await email.fill("");
  await expect(loginButton).toBeDisabled();
  await email.fill("donor@bloodbank.test");
  await password.fill("");
  await expect(loginButton).toBeDisabled();
});

test("shows an inline error when the e-mail is missing", async ({ page }) => {
  await page.locator("#login-form").evaluate((form) => form.requestSubmit());

  await expect(page.locator("#email-error")).toHaveText(
    "Please enter your e-mail address.",
  );
  await expect(page.locator("#email")).toHaveAttribute("aria-invalid", "true");
});

test("shows an inline error when the password is missing", async ({ page }) => {
  await page.getByLabel("E-mail address").fill("donor@bloodbank.test");
  await page.locator("#login-form").evaluate((form) => form.requestSubmit());

  await expect(page.locator("#password-error")).toHaveText(
    "Please enter your password.",
  );
  await expect(page.locator("#password")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
});

test("clears inline validation errors when the affected field is edited", async ({
  page,
}) => {
  const email = page.getByLabel("E-mail address");
  const password = page.getByLabel("Password");
  const form = page.locator("#login-form");

  await form.evaluate((element) => element.requestSubmit());
  await expect(page.locator("#email-error")).toBeVisible();
  await email.fill("donor@bloodbank.test");
  await expect(page.locator("#email-error")).toBeHidden();
  await expect(email).not.toHaveAttribute("aria-invalid", "true");

  await form.evaluate((element) => element.requestSubmit());
  await expect(page.locator("#password-error")).toBeVisible();
  await password.fill("GiveLife2026");
  await expect(page.locator("#password-error")).toBeHidden();
  await expect(password).not.toHaveAttribute("aria-invalid", "true");
});

test("rejects malformed e-mail addresses inline", async ({ page }) => {
  await page.getByLabel("E-mail address").fill("not-an-email");
  await page.getByLabel("Password").fill("some-password");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.locator("#email-error")).toHaveText(
    "Enter a valid e-mail address, such as name@example.com.",
  );
  await expect(page.locator("#email")).toHaveAttribute("aria-invalid", "true");
  await expect(page).toHaveURL(loginUrl);
});

test("shows and clears the incorrect-credentials message while staying on login", async ({
  page,
}) => {
  await page.getByLabel("E-mail address").fill("someone@example.com");
  await page.getByLabel("Password").fill("incorrect");
  await page.getByRole("button", { name: "Login" }).click();

  const message = page.getByRole("alert");
  await expect(message).toHaveText(
    "The e-mail address or password is incorrect.",
  );
  await expect(page).toHaveURL(loginUrl);

  await page.getByLabel("E-mail address").fill("another@example.com");
  await expect(message).toBeHidden();
  await page.getByLabel("Password").fill("still-incorrect");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(message).toBeVisible();
  await page.getByLabel("Password").fill("edited-password");
  await expect(message).toBeHidden();
});

test("signs in with the demo account and returns to login from home", async ({
  page,
}) => {
  await page.getByLabel("E-mail address").fill("DONOR@BloodBank.Test");
  await page.getByLabel("Password").fill("GiveLife2026");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(
    pathToFileURL(path.resolve(__dirname, "../home.html")).href,
  );
  await expect(
    page.getByRole("heading", { name: "Welcome to Blood Bank" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Return to login" }).click();
  await expect(page).toHaveURL(loginUrl);
  await expect(
    page.getByRole("heading", { name: "Sign in to your account" }),
  ).toBeVisible();
});

test("reveals and hides the demo account details", async ({ page }) => {
  const toggle = page.getByRole("button", { name: "Show demo account" });
  const details = page.locator("#demo-details");

  await expect(details).toBeHidden();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(details).toBeVisible();
  await expect(details).toContainText("donor@bloodbank.test");
  await expect(details).toContainText("GiveLife2026");
  await expect(
    page.getByRole("button", { name: "Hide demo account" }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("button", { name: "Hide demo account" }).click();
  await expect(details).toBeHidden();
  await expect(
    page.getByRole("button", { name: "Show demo account" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("toggles password visibility without changing its value", async ({
  page,
}) => {
  const password = page.getByLabel("Password");
  const toggle = page.locator("#password-toggle");
  const value = "secret-password";

  await password.fill(value);
  await expect(password).toHaveAttribute("type", "password");
  await toggle.click();
  await expect(password).toHaveAttribute("type", "text");
  await expect(password).toHaveValue(value);
  await expect(toggle).toHaveText("Hide password");
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await toggle.click();
  await expect(password).toHaveAttribute("type", "password");
  await expect(password).toHaveValue(value);
  await expect(toggle).toHaveText("Show password");
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
});
