# API
## `GET /api/get-video`
### Response
```http
Content-Type: application/json; charset=UTF-8

{
  "videos": [
    {
      "id": "test-vid",
      "title": "測試影片",
      "desc": "這是部測試影片。",
      "author": "",
      "tags": ["test", "video"],
      "episodes": [
        {
          "name": "影片 1",
          "url": "/video/test-vid/1.mp4"
        },
        {
          "name": "影片 2",
          "url": "/video/test-vid/2.mp4"
        }
      ]
    }
  ]
}
```

Note that `author` will be an empty
string currently.