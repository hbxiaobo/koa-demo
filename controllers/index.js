var fn_hello = async(ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome'
    });
};
var fn_first = async(ctx, next) => {
    ctx.render('index2.html', {
        title: 'Welcome'
    });
};
var fn_water = async(ctx, next) => {
    ctx.render('index3.html', {
        title: 'Welcome'
    })
}
var fn_kongming = async(ctx, next) => {
    ctx.render('index4.html', {
        title: 'Welcome'
    })
}
var fn_fireworks = async(ctx, next) => {
    ctx.render('index5.html', {
        title: 'Welcome'
    })
}
var fn_test = async(ctx, next) => {
    ctx.render('index6.html', {
        title: 'Welcome'
    })
}
var fn_rain = async(ctx, next) => {
    ctx.render('index7.html', {
        title: 'Welcome'
    })
}
var fn_map = async(ctx, next) => {
    ctx.render('index8.html', {
        title: 'Welcome'
    })
}
var fn_threeJs = async(ctx, next) => {
    ctx.render('index9.html', {
        title: 'Welcome'
    })
}
var fn_xxl = async(ctx, next) => {
    ctx.render('index10.html', {
        title: 'Welcome'
    })
}
var fn_demo = async(ctx, next) => {
    ctx.render('demo.html', {
        title: 'Welcome'
    })
}
var fn_orient = async(ctx, next) => {
    ctx.render('orient.html', {
        title: 'Welcome'
    })
}
var fn_textAnimate = async(ctx, next) => {
    ctx.render('textAnimate.html', {
        title: 'Welcome'
    })
}
var fn_sticky = async(ctx, next) => {
    ctx.render('topSticky.html', {
        title: 'Welcome'
    })
}
var fn_c3dPanorama = async(ctx, next) => {
    ctx.render('c3dPanorama.html', {
        title: 'Welcome'
    })
}
var fn_css3dEngine = async(ctx, next) => {
    ctx.render('css3dEngine.html', {
        title: 'Welcome'
    })
}
var fn_c3dDemo = async(ctx, next) => {
    ctx.render('c3d-demo.html', {
        title: 'Welcome'
    })
}
var fn_crossScreen = async(ctx, next) => {
    ctx.render('crossScreen.html', {
        title: 'Welcome'
    })
}
var fn_test = async(ctx, next) => {
    ctx.render('test.html', {
        title: 'Welcome'
    })
}
var fn_Tween = async(ctx, next) => {
    ctx.render('Tween.html', {
        title: 'Welcome'
    })
}
var fn_periodicTable = async(ctx, next) => {
    ctx.render('periodicTable.html', {
        title: 'Welcome'
    })
}
var fn_layout = async(ctx, next) => {
    ctx.render('layout.html', {
        title: 'Welcome'
    })
}

var fn_signin = async(ctx, next) => {
    var
        email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    if (email === 'admin@example.com' && password === '123456') {
        // 登录成功:
        ctx.render('signin-ok.html', {
            title: 'Sign In OK',
            name: 'Mr Node'
        });
    } else {
        // 登录失败:
        ctx.render('signin-failed.html', {
            title: 'Sign In Failed'
        });
    }
}
module.exports = {
    'GET /layout': fn_layout,
    'GET /test': fn_test,
    'GET /': fn_hello,
    'GET /index2': fn_first,
    'GET /index3': fn_water,
    'GET /index4': fn_kongming,
    'GET /index5': fn_fireworks,
    'GET /index6': fn_test,
    'GET /index7': fn_rain,
    'GET /index8': fn_map,
    'GET /index9': fn_threeJs,
    'GET /index10': fn_xxl,
    'GET /demo': fn_demo,
    'GET /orient': fn_orient,
    'GET /textAnimate': fn_textAnimate,
    'GET /c3dPanorama': fn_c3dPanorama,
    'GET /css3dEngine': fn_css3dEngine,
    'GET /sticky': fn_sticky,
    'GET /c3dDemo': fn_c3dDemo,
    'GET /crossScreen': fn_crossScreen,
    'GET /Tween': fn_Tween,
    'GET /periodicTable': fn_periodicTable,
    'POST /signin': fn_signin
};