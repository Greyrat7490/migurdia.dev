package main

import (
	"context"
	"flag"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

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

func setupServer() *http.Server {
	router := gin.Default()

	router.SetTrustedProxies([]string{"127.0.0.1/8"})
	router.LoadHTMLGlob("templates/**/*")
	router.Static("/assets", "./assets")

	router.GET("/", indexHandler)
	router.GET("/users", usersHandler)

	router.GET("/api/ping", pingHandler)
	router.GET("/api/user/:name", userHandler)

	return &http.Server{
		Addr:    ":8080",
		Handler: router.Handler(),
	}
}

func startServer(srv *http.Server) {
	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("listen: %s\n", err)
		}
	}()
}

func catchShutdown() {
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
}

func gracefullyShutdown(srv *http.Server) {
	log.Println("Shuting down Server...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Println("Server Shutdown error:", err)
	}
	<-ctx.Done()

	log.Println("5 seconds timeout reached")
}

func main() {
	db["user1"] = "passwd"
	db["user2"] = "passwd2"

	debugMode := flag.Bool("d", false, "debug mode")
    flag.Parse()
	if !*debugMode {
		gin.SetMode(gin.ReleaseMode)
	}

	srv := setupServer()
	startServer(srv)
	catchShutdown()
	gracefullyShutdown(srv)

	log.Println("Server shutdown gracefully")
}
