---
title: Learning about Heroku’s dynos
description: >-
  Today, in my journey to create those awesome Telegram bots that everyone wants
  (although no one knows it yet), we’ve got to a little fight…
date: '2017-03-06T23:20:53.400Z'
categories: []
keywords: []
slug: /@alexgascon/learning-about-herokus-dynos-bba625341adb
---

Today, in my journey to create those awesome Telegram bots that everyone wants (although no one knows it yet), we’ve got to a little fight with Heroku’s dynos and their possibilities. And, to save you time, effort and a lot of wandering, I’ve decided to share what I’ve learned:

In Heroku, we have three different dyno configuration, that we’ll have to choose depending on the task we want them to do.

*   **Web dynos:** those dynos are the ones in charge of receiving the HTTP traffic of our app. **It’s critical to bind them to the port that Heroku provides you,** or otherwise it will kill the process within 60 seconds of execution. You can obtain this port reading the environment variable ‘PORT’
*   **Worker dynos**: They can be used for almost any task, but they’re targeted to background or queuing jobs, what in most cases makes them the perfect choice when hosting Telegram bots. You can have different ones in the same app and assign each one to a different process, and you don’t need to bind them to any port.
*   **One-off dynos:** These dynos are quite different to the previous ones: instead of executing continuously, they do an sporadic job and then finish their execution; therefore, they are more useful for those tasks with well-delimited start and end.

In my case, I use Heroku to host my Telegram bots, so I’ll have two options:

1.  Using a web dynos + a Flask server with a webhook to listen the assigned port
2.  Using a worker dynos and periodically polling the server for updates

Currently, after trying both approaches, I’m using the second one: it seems to be less problematic (probably setting a Flask server for something such a simple app isn’t the best approach) and it doesn’t require to care as much for the infrastructure.

What about you? Do you know any other possibility or suggestion? Don’t hesitate and leave it in the comments!