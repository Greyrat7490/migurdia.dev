# migurdia.dev
 
https://migurdia.dev

## Site is still in work ...

## Run locally with hot reloading

* install air for hot reloading
```bash
go install github.com/air-verse/air@latest
```

* start server in debug mode
```bash
go run . -d
```
* server will run on port 8080

* start server with hot reloading
```bash
air -- -d
```
* on port 8081 is the air proxy for hot reloading your browser on changes

## Start in production mode
* server with Let's Encrypt SSL gets started
```bash
go run .
```
