fetch("https://www.igdb.com/games/crazy-traffic-city-parking-simulator", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9,ar;q=0.8",
    "cache-control": "max-age=0",
    "priority": "u=0, i",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "force-login=0; country=504; force-login=1; OptanonAlertBoxClosed=2024-10-06T20:55:29.550Z; force-login=0; social_register=true; u=abdelou1234567; cf_clearance=r7jCV7nLDLQXQB5vUNqlNwr.9exBXfp12VWgmRnk9KA-1728248924-1.2.1.1-S53XcvCb8h87v4EV8aeTblu.tzSNz2socfVSX5GM9Eozy9mwFIZzILR95cHeNgbYgGEnXTQ9KdxzGeLhxjJZ215yJ9ZycpqdtEl0dCIn3.a4d1ymfUzREdjz7rCOgcvk6mwD3tOmKHdm5fc3AeEWldsTKR8Q4be2LfPUqjpdmtuBO8Q6IrrB6QoIs99o0WxkaVpvx8Zqq74A900NcvXi0WuONl_hEdqHJz6M2iY0yOmfKnbFbO3kQt0Y7XICjKfz54bBZt3nvMPxx9D8bZzPuAEv8Q5vs661HjJ2zdEHR2PjLx5AjXBqEcrWBxrMwmBnJKJBY2q.Xad6Cr2EU9sqbo8dChv96FvUXMEH.dhWqLi5J6AVRHsaoBD4FUAKRmKci84kRH00guEc3AibHBXrDQ; __cf_bm=Ter_yc.dAstNfiOFo5vXW1g.LTKDZBgovuKUZI5NF1k-1728249229-1.0.1.1-5ZhkfPg4dxQvi5GBnHyPnt7rbgLn_WVzgw_Z9rujV9c47Kn9o2Fqov8LMkn0ZhGVDq1ZGY0eWYb9tK0mN8AGrg; OptanonConsent=isIABGlobal=false&datestamp=Sun+Oct+06+2024+22%3A19%3A01+GMT%2B0100+(GMT%2B01%3A00)&version=202210.1.0&consentId=71aff127-e7ff-4d45-9e2d-1cb80047b482&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CBG41%3A1%2CC0002%3A1%2CC0004%3A1%2CBG42%3A1&hosts=H24%3A1%2CH10%3A1&genVendors=&geolocation=MA%3B06&AwaitingReconsent=false; mp_c9b6d5ed3e9e4ad20b3fac745421a240_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A192639d96b251c-0363f0f91edb86-17525637-fa000-192639d96b251c%22%2C%22%24device_id%22%3A%20%22192639d96b251c-0363f0f91edb86-17525637-fa000-192639d96b251c%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; csrf=fxA9iauPBGgLV5WslSjb6K-3WzQYU6S5UxLZThXk9ubJVP4ZraRHQSEJTx0QQZspPSwZed7WSlwiPaapHT5rRw; _server_session=a2RRI51R%2FqRdRVu%2BoJElORakZ9hMT52fskwdGTvFkEJvLHlh5kDL2cOVKBgypP7OM0PLkUuZl2ADDkF5e1a0uW2%2F3%2BruepXkRgch9MPwuUrr%2Fk9Y6xmmiWpg7%2FbHkoQvV%2BSip8V%2F3xCdgOSYxHq8Jb%2B9f4HKxcbUI2CrcFeG9%2FcfJIJcb3xCNlu8XkpX%2FhQYz2wZYqg2GkBc7dc3%2Fb%2BSvId38o6cOV%2Ft1PMoxCPb4eYyOtmyzlVyhtKOPB131BIom5SwsgCEleTMjEVL0LpoDmqOX1Co34ISnRqfEnjgbe2YQy3pWLS%2FRAyDTpHumHMmtlHhNAJLZmVK1dYQBg19BosY1eIGdlSuhtoOYO8qsfNomGtto6giXXsDZdULAyCc9fVY1iWH2jlJ%2BbxHjXIxb9GvevZ2aODxq1AUiR283BMuJyCQNbRJzUsDIGdtHTsKNBTV%2FQP9fwh%2FfPoaXtv6mvd4VjygnTg%2BickPMT1kasF0pbv6eEB20jNW0cWFz%2FO2bdPskZzMqQ%3D%3D--vXYTrld5rD8aKAij--JVydCbuHDMR%2BLibls1IcHQ%3D%3D",
    "Referer": "https://www.igdb.com/games/coming_soon?page=7",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});