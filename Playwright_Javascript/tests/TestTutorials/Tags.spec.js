const { test, expect } = require('@playwright/test');


test('Tag1@smoke', async ({ page }) => {
console.log("Tag1smoke");
})

test('Tag2@smoke', async ({ page }) => {
console.log("Tag2smoke");
})

test('Tag3@reg', async ({ page }) => {
console.log("Tag3reg");
})

test('Tag4@reg', async ({ page }) => {
console.log("Tag4reg");
})

test('Tag5@reg@smoke', async ({ page }) => {
console.log("Tag5");
})

test('Tag6@sanity', async ({ page }) => {
console.log("Tag6");

})

// Tag Command
// npx playwright test "Tags.spec.js" --grep "@smoke"
// npx playwright test "Tags.spec.js" --grep "@reg" --grep-invert "@smoke"