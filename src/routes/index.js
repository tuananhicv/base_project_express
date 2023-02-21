function route(app) {
    app.use('/user', function (req, res, next) {
        res.render('hello')
    })
}

module.exports = route;