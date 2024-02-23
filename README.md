# pm2-poc

 - install pm2 globally
```
npm i pm2@latest -g
```

- create a js file with pm2 config


## Gen ssl certificate

```
openssl genrsa -out key.pem
```

```
openssl req -new -key key.pem -out csr.pem
```

```
openssl x509 -req -days 90 -in csr.pem -signkey key.pem -out cert.pem
```