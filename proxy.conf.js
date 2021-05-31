let url=`http://localhost:4201/ionic`
const PROXY_CONFIG = [
{
    context:"/basicdrivergetView*",
        target: `${url}/basicdrivergetView`,
        secure: false,
        logLevel: "debug",
        changeOrigin: true ,
        pathRewrite: {
            "^/basicdrivergetView*": ""
          } 
    },
    {
        context:"/propertygetView*",
            target: `${url}/propertygetView`,
            secure: false,
            logLevel: "debug",
            changeOrigin: true ,
            pathRewrite: {
                "^/propertygetView*": ""
              } 
        },
        {
            context:"/trafficgetView*",
                target: `${url}/trafficgetView`,
                secure: false,
                logLevel: "debug",
                changeOrigin: true ,
                pathRewrite: {
                    "^/trafficgetView*": ""
                  } 
            },
            {
                context:"/technicalgetView*",
                    target: `${url}/technicalgetView`,
                    secure: false,
                    logLevel: "debug",
                    changeOrigin: true ,
                    pathRewrite: {
                        "^/technicalgetView*": ""
                      } 
                },
                {
                    context:"/questiongetView*",
                        target: `${url}/questiongetView`,
                        secure: false,
                        logLevel: "debug",
                        changeOrigin: true ,
                        pathRewrite: {
                            "^/questiongetView*": ""
                          } 
                    }, {
                        context:"/penaltygetView*",
                            target: `${url}/penaltygetView`,
                            secure: false,
                            logLevel: "debug",
                            changeOrigin: true ,
                            pathRewrite: {
                                "^/penaltygetView*": ""
                              } 
                        },
                {
                    context:"/typedriverlicensegetView*",
                        target: `${url}/typedriverlicensegetView`,
                        secure: false,
                        logLevel: "debug",
                        changeOrigin: true ,
                        pathRewrite: {
                            "^/typedriverlicensegetView*": ""
                          } 
                    },
                    {
                        context:"/examgetView*",
                            target: `${url}/examgetView`,
                            secure: false,
                            logLevel: "debug",
                            changeOrigin: true ,
                            pathRewrite: {
                                "^/examgetView*": ""
                              } 
                        },
                        {
                            context:"/videoetView*",
                                target: `${url}/videoetView`,
                                secure: false,
                                logLevel: "debug",
                                changeOrigin: true ,
                                pathRewrite: {
                                    "^/videoetView*": ""
                                  } 
                            }
]
module.exports = PROXY_CONFIG;