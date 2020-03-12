/**
 * Milestone 1 : Promises and aync await
 * convert a promise to async and await
 * 
 * @author Akaash
 * @version 0.1
 * @since 09/03/2020
 */

//Promise
const fetchData = userId => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject('Fetch failed..!')
            }
            const fakeData = {
                id: userId,
                name: 'Akaash'
            }
            resolve(fakeData)
        }, 200)
    })
}

fetchData(10)
    .then(user => {
        console.log('Here is your data from promise :', user)
    })
    .catch(err => {
        console.error(err)
    })

//Above promise is converted into async and await
const fetchUser = async userId => {
    try {
        const user = await fetchData(userId)
        console.log('Async await displays the data from converting above promise :', user)
    }
    catch (err) {
        console.error(err)
    }
}

fetchUser(50)

//Tried with new function of different object in async/await function
const fetchData2 = (userId) => {
    return {
        id: userId,
        name: 'Arun'
    }
}

//async/await 
const fetchUser1 = async userId => {
    try {
        const user = await fetchData2(userId)
        console.log('Async await displays the data :', user)
    }
    catch (err) {
        console.error(err)
    }
}

fetchUser1(100)

