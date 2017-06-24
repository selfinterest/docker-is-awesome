const Koa = require("koa");
const app = new Koa();

app.use(async function(ctx){
    ctx.body = "This is a test";
});

app.listen(process.env.PORT || 8080);