import * as requestPromise from 'request-promise'

async function test () {
    const result = await requestPromise.get('www.google.com')
    console.log(result)
}

test()
