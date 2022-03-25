let ID = ""
let Key = ""

let testurl = "https://testflight.apple.com/v3/accounts/" + Key + "/ru/"
let header = {
    "X-Session-Id": "CNmrDBIQsJhXC5pFRRqlesQnD95KdQ==",
    "X-Session-Digest": "477d976fab1b7531e92f2cb4d262dc0049cc7075",
    "X-Request-Id": "149977CA-CE61-4372-AB9E-A7B81F926C0A"
}
$httpClient.get({url: testurl + ID,headers: header}, function(error, resp, data) {
    let jsonData = JSON.parse(data)
    if (jsonData.data.status == "FULL") {
        $done(console.log(jsonData.data.message))
    } else {
        $httpClient.post({url: testurl + ID + "/accept",headers: header}, function(error, resp, body) {
            let jsonBody = JSON.parse(body)
            $notification.post(jsonBody.data.name, "TestFlight加入成功", "")
            console.log(jsonBody.data.name + " TestFlight加入成功")
            $done()
        });
    }
});
