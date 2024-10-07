exports.handler = (event, context, callback) => {
    console.log('f2 called')
    callback(null, {
        body: JSON.stringify({
            data: 'f2'
        }),
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        },
    })
}