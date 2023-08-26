[![Known Vulnerabilities](https://snyk.io/test/github/logerfo/lab-notifications/badge.svg)](https://snyk.io/test/github/logerfo/lab-notifications)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FLogerfo%2Flab-notifications.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FLogerfo%2Flab-notifications?ref=badge_shield)

# Lab Notifications
This extension is based on a [similar work](https://github.com/fabiospampinato/vscode-github-notifications-bell) by [@fabiospampinato](https://github.com/fabiospampinato).

## Installing
### Set your private token
```json
{
    "lab-notifications.privateToken": "YOUR-TOKEN"
}
```
You can get your token [here](https://gitlab.com/profile/personal_access_tokens).  
The required scope is `read_api`.  
You can provide your OAuth token also by setting an environment variable named: LAB_NOTIFICATIONS_TOKEN.

### If you're using a self-hosted server, set the URL
```json
{
    "lab-notifications.url": "https://gitlab.yourcompany.com/"
}
```
If you're using `gitlab.com`, you don't have to set it.

### Customizing
```jsonc
{
    "lab-notifications.aligment": "right", // left/right
    "lab-notifications.hideIfNone": true, // true/false
    "lab-notifications.refreshInterval": 300, // seconds
    "lab-notifications.showNumberOfNotifications": true, // true/false
    "lab-notifications.color": ""
}
```

## Contributing

If you have suggestions for how close-label could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## [Release Notes](CHANGELOG.md)

## Donate

<img src="https://i.imgur.com/ndlBtuX.png" width="200">

BTC: 1LoGErFoNzE1gCA5fzk6A82nV6iJdKssSZ


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FLogerfo%2Flab-notifications.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FLogerfo%2Flab-notifications?ref=badge_large)
