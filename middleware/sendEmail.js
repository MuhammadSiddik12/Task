exports.sendEmail = (source) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(source)
        }, 2000)
    })
}