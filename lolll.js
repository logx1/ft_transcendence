fetch("https://bus-med.1337.ma/api/tickets/book", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "le_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMxLCJsb2dpbiI6ImFiZGVsLW91IiwiaWF0IjoxNzI2OTQxMDUyLCJleHAiOjE3MjY5NDgyNTJ9.KFk5r1WP75WCTnOyoZ7tQ2dFgnRZQ34PzRbD5DLztcc",
    "Referer": "https://bus-med.1337.ma/home",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"departure_id\":184,\"to_campus\":false,\"parada_id\":\"5\",\"le_captcha\":\"wkrqdf\",\"le_captcha_token\":\"d0c8c55d-df42-432b-89d5-40370ea4f3fc\"}",
  "method": "POST"
});




fetch("https://bus-med.1337.ma/api/captcha/generate/184", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "le_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMxLCJsb2dpbiI6ImFiZGVsLW91IiwiaWF0IjoxNzI2OTQxMDUyLCJleHAiOjE3MjY5NDgyNTJ9.KFk5r1WP75WCTnOyoZ7tQ2dFgnRZQ34PzRbD5DLztcc",
    "Referer": "https://bus-med.1337.ma/home",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});