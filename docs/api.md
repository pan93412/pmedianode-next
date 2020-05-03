# API
## `GET /api/get/video`
### Example Response
```http
Content-Type: application/json; charset=UTF-8

{
  "videos": [
    {
      "id": "untitled-6",
      "title": "喔不。",
      "desc": "",
      "author": "",
      "tags": [],
      "episodes": [
        {
          "name": "喔不。",
          "url": "/video/untitled-6/VID_4.mp4"
        }
      ]
    },
    {
      "id": "meowmeowmeow",
      "title": "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
      "desc": "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
      "author": "",
      "tags": ["meow", "喵"],
      "episodes": [
        {
          "name": "喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵喵",
          "url": "/video/meowmeowmeow/meow.mp4"
        }
      ]
    },
    {
      "id": "oh-really-igamer",
      "title": "\"Oh, really?\" game reviews | IGamer",
      "desc": "Lorem ipsum dolor sit amet",
      "author": "IGamer",
      "tags": ["Oh, really?", "game", "reviews", "IGamer"],
      "episodes": [
        {
          "name": "Oh, really game reviews",
          "url": "/video/oh-really-igamer/ohreally.mp4"
        },
        {
          "name": "Oh, really official intro",
          "url": "/video/oh-really-igamer/oh-really-intro.mp4"
        }
      ]
    },
    {
      "id": "24hr-working-music-stream",
      "title": "【24小時】免費的作業音樂放送",
      "desc": "作業用音樂;24小時;免費",
      "author": "",
      "tags": ["作業用音樂", "24小時", "免費"],
      "episodes": [
        {
          "name": "作業用音樂",
          "url": "https://www.example.com/24hr-working-music-stream.m3u8"
        }
      ]
    }
  ]
}
```

## `GET /api/get/audio`
### Example Response
```http
Content-Type: application/json; charset=UTF-8

{
  "audios": [
    {
      "id": "test-music-1",
      "title": "測試音樂 1",
      "desc": "",
      "author": "",
      "tags": [],
      "tracks": [
        {
          "name": "Audio Track 1",
          "url": "/audio/test-music-1/1/ummmm.mp3"
        },
        {
          "name": "Audio Track 2",
          "url": "/audio/test-music-1/2/testing.mp3"
        }
      ]
    }
  ]
}
```
