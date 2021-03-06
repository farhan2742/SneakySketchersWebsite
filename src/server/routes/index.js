const   express     = require('express'),
        path        = require('path'),
        router      = express.Router({mergeParams: true});

// Send Landing Page

router.get('/' ,(req, res) => {
    res.sendFile('dist/index.html' , { root: __dirname + '/../../../' })
});

// Send an not found error
/*
router.get("/serviceWorker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./../../../dist", "service_worker.js"));
});
*/
router.get('*', function (req, res) {
    res.send("ERROR404: Page not found")
});

module.exports = router;