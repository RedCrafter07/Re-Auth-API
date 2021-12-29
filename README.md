# Re-Auth-API
The API Wrapper for the Re-Auth API.

## But wait... What is re-auth?
A modern authentication system. Read more on our [homepage](https://auth.redcrafter07.de).

## Installation
To install, type this command in your console:
```
npm i re-auth-api
```

To create a new app, navigate to [the Website](https://auth.redcrafter07.de), login/register, go to settings, enable Developer, go to Applications and create a new one. Copy the ID and the token. Then, you can setup Re-Auth like this:

```js
const reAuth = require("re-auth-api");
let client = new reAuth()
  .setID(id)
  .setToken(token);

//wrapper for await
(async () => {
  console.log(await client.validate()); //if returned "Authorized!", you did everything right.
})()
```

To authorize a user, you can use this URL:
```https://auth.redcrafter07.de/auth/<YOUR ID>```

## License
[MIT](https://github.com/RedCrafter07/Re-Auth-API/blob/main/LICENSE)
