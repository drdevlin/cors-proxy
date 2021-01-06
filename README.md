# Cors Proxy
Just a very simple web server for doing a very simple GET request to a server without CORS configured.

## Technologies
* NodeJS
* Express

## Code Examples
```js
app.get('/', (req, res) => {
  const url = req.query.url;
  const queryString = rebuildQuery(req.query);
  if (url) {
    let data = '';
    https.get(url + queryString, response => {
      response.on('data', chunk => data += chunk);
      response.on('close', () => {
        res.set('Access-Control-Allow-Origin', process.env.WHITELIST);
        res.send(data);
      });
    });
  }
});
```

## Contact
Created by [@drdevlin](mailto:drdevlin@fastmail.com) Devlin Russell  - feel free to contact me!