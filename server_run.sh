#!/bin/bash
curl --location --request POST 'http://localhost:8081/memes' \

--header 'Content-Type: application/json' \

--data-raw '{

"name": "ashok kumar",

"url": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",

"caption": "This is a meme"

}'