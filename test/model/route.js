const Router = require('koa-router');
const controller = require('');

$classStart
const router = new Router({});

$interfaceStart
router.$method("$url", controller.$interfaceName);
$interfaceEnd

$classEnd

module.exports = router;