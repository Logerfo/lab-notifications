[![Version](https://vsmarketplacebadge.apphb.com/version-short/logerfo.gitlab-notifications.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.gitlab-notifications)
[![Rating](https://vsmarketplacebadge.apphb.com/rating-short/logerfo.gitlab-notifications.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.gitlab-notifications)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/logerfo.gitlab-notifications.svg)](https://marketplace.visualstudio.com/items?itemName=logerfo.gitlab-notifications)
[![Build Status](https://travis-ci.org/Logerfo/gitlab-notifications.svg?branch=master)](https://travis-ci.org/Logerfo/gitlab-notifications)
[![Known Vulnerabilities](https://snyk.io/test/github/logerfo/gitlab-notifications/badge.svg)](https://snyk.io/test/github/logerfo/gitlab-notifications)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FLogerfo%2Fgitlab-notifications.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FLogerfo%2Fgitlab-notifications?ref=badge_shield)

# Gitlab notifications
This extension is based on a [similar work](https://github.com/fabiospampinato/vscode-github-notifications-bell) by [@fabiospampinato](https://github.com/fabiospampinato).

## Installing
### Set your private token
```json
{
    "gitlab-notifications.privateToken": "YOUR-TOKEN"
}
```
You can get your token [here](https://gitlab.com/profile/personal_access_tokens).

### If you're using a self-hosted server, set the URL
```json
{
    "gitlab-notifications.url": "https://gitlab.yourcompany.com/"
}
```
If you're using `gitlab.com`, you don't have to set it.

### Customizing
```jsonc
{
    "gitlab-notifications.aligment": "right", // left/right
    "gitlab-notifications.hideIfNone": true, // true/false
    "gitlab-notifications.refreshInterval": 300, // seconds
    "gitlab-notifications.showNumberOfNotifications": true, // true/false
    "gitlab-notifications.color": ""
}
```

## Contributing

Feel free to open any issues or pull requests. I will try to make time for them, if any.

## [Release Notes](CHANGELOG.md)

## Donate

<img src="https://i.imgur.com/ndlBtuX.png" width="200">

BTC: 1LoGErFoNzE1gCA5fzk6A82nV6iJdKssSZ


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FLogerfo%2Fgitlab-notifications.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FLogerfo%2Fgitlab-notifications?ref=badge_large)