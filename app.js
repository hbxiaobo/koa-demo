const Koa  = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const controller = require('./controller');
const templating = require('./templating');
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

const isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
    app.use(staticFiles('/resource/', __dirname + '/resource'));
    app.use(staticFiles('/kongming/', __dirname + '/kongming'));
}

app.use(bodyParser());

app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));
app.use(controller());
app.listen(3000);