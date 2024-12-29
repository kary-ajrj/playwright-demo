import {expect, test} from "@playwright/test";
test.describe('APIs for users', () => {
    test('list users on the second page', async ({request}) => {
        const users = await request.get('api/users?page=2')
        expect(users.ok()).toBeTruthy()
        expect(await users.json()).toEqual(expect.objectContaining({
            "page": 2,
            "per_page": 6,
            "total": 12,
            "total_pages": 2,
        }))
    })

    test('create a user',async ({request})=>{
        const user = await request.post('api/users',{
            data:{
                "name": "morpheus",
                "job": "leader"
            }
        })
        expect(user.ok()).toBeTruthy()
        await expect(await user.json()).toHaveProperty('createdAt')
    })
})
