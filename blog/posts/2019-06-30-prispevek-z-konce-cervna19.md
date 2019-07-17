---
tag: měsíc
author: onslm
date: 2019-06-30 11:22:40
location: Frýdek-Místek
---

# Přístupové tokeny

Access tokens allow your app to access the Graph API. They typically perform two functions:

    They allow your app to access a User's information without requiring the User's password.
    They allow us to identify your app, the User who is using your app, and the type of data the User has permitted your app to access.

All Graph API endpoints require an access token of some kind, so each time you access an endpoint, your request must include one.

## How Tokens Work

Access tokens conform to the OAuth 2.0 protocol. OAuth 2.0 allows entities such as a User or a Page to authorize tokens. Usually this is done through a web interface. Once authorized, apps can use those tokens to access specific information.

For example, this app is asking a User to give it permission to access the User's photos, videos, and email address:
