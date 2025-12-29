import {test, expect} from '@playwright/test'

test.beforeAll(async()=>{
console.log('Test Before All........')
})

test.afterAll(async()=>{
console.log('Test After All........')
})

test.beforeEach(async()=>{
console.log('Test Before Each........')
})

test.afterEach(async()=>{
console.log('Test After Each........')
})

// Only
// test.describe.only('Group1',()=>{

// test('Test1', async ({page}) => {    
// console.log('This is Test 1');
// })

// test('Test2', async ({page}) => {    
// console.log('This is Test 2');
// })
// })

// Skip
test.describe.skip('Group1',()=>{

test('Test1', async ({page}) => {    
console.log('This is Test 1');
})

test('Test2', async ({page}) => {    
console.log('This is Test 2');
})
})

test.describe('Group2',()=>{
test('Test3', async ({page}) => {    
console.log('This is Test 3');
})

test('Test4', async ({page}) => {    
console.log('This is Test 4');
})
})
