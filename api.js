export const login = async () => await new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            firstName: "Zach",
            lastName: "Edwards"
        })
    }, 2000)
})