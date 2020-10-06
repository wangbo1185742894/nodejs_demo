const express = require(`express`)
const router = express.Router()


router.use((req, res, next) => {
    console.log(`路由执行成功啦~~~`, Date.now());
    next()
})


router.get(`/`, (req, res, next) => {
    res.json({
        status: 200,
        data: `user`
    })
})


router.get(`/data`, (req, res, next) => {
    res.json({
        status: 200,
        data: "用户数据"
    })
})

module.exports = router