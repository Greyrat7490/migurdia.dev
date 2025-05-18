package main

import (
	"flag"
	"net/http"

	"github.com/gin-gonic/gin"
)

var db = make(map[string]string)

func pingHandler(c *gin.Context) {
	c.String(http.StatusOK, "pong")
}

func userHandler(c *gin.Context) {
	user := c.Params.ByName("name")
	value, ok := db[user]
	if ok {
		c.JSON(http.StatusOK, gin.H{"user": user, "value": value})
	} else {
		c.JSON(http.StatusOK, gin.H{"user": user, "status": "no value"})
	}
}

func indexHandler(c *gin.Context) {
	type indexData struct {
		Title string
	}

	c.HTML(http.StatusOK, "index.tmpl", indexData{ "My page", })
}

func usersHandler(c *gin.Context) {
	users := make([]string, len(db))
	for user := range db {
		users = append(users, user)
	}

	c.HTML(http.StatusOK, "users.tmpl", struct { 
		Users []string
	}{
		users,
	})
}

func main() {
	debugMode := flag.Bool("d", false, "debug mode")
    flag.Parse()

	db["user1"] = "passwd"
	db["user2"] = "passwd2"

	if !*debugMode {
		gin.SetMode(gin.ReleaseMode)
	}

	router := gin.Default()

	router.SetTrustedProxies([]string{"127.0.0.1/8"})
	router.LoadHTMLGlob("templates/**/*")
	router.Static("/assets", "./assets")

	router.GET("/", indexHandler)
	router.GET("/users", usersHandler)

	router.GET("/api/ping", pingHandler)
	router.GET("/api/user/:name", userHandler)


	router.Run(":8080")
}
