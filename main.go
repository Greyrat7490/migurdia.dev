package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
	"migurdia.dev/pages"

	"github.com/a-h/templ"
	"github.com/labstack/echo/v4"
)

var db = make(map[string]string)

func pingHandler(c echo.Context) error {
	return c.String(http.StatusOK, "pong")
}

func userHandler(c echo.Context) error {
	type userData struct {
		User string
		Value string
	}

	user := c.QueryParams().Get("name")
	value, ok := db[user]
	if ok {
		c.JSON(http.StatusOK, userData{ user, value })
	} else {
		c.JSON(http.StatusOK, userData{ user, "no value" })
	}
	return nil
}

func indexHandler(c echo.Context) error {
	return Render(c, http.StatusOK, pages.Index("something"))
}

func usersHandler(c echo.Context) error {
	users := make([]string, 0, len(db))
	for user := range db {
		users = append(users, user)
	}

	return Render(c, http.StatusOK, pages.Users(users))
}

func setupServer() *echo.Echo {
	e := echo.New()

	e.Static("/assets", "./assets")

	e.GET("/", indexHandler)
	e.GET("/users", usersHandler)

	e.GET("/api/ping", pingHandler)
	e.GET("/api/user/:name", userHandler)
	
	return e
}

func startServer(e *echo.Echo) {
	go func() {
		if err := e.Start(":8080"); err != nil && err != http.ErrServerClosed {
			log.Fatalf("listen: %s\n", err)
		}
	}()
}

func catchShutdown() {
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
}

func gracefullyShutdown(e *echo.Echo) {
	log.Println("Shuting down Server...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := e.Shutdown(ctx); err != nil {
		log.Println("Server Shutdown error:", err)
	}
	<-ctx.Done()

	log.Println("5 seconds timeout reached")
}

func main() {
	db["user1"] = "passwd"
	db["user2"] = "passwd2"

	e := setupServer()
	startServer(e)
	catchShutdown()
	gracefullyShutdown(e)

	log.Println("Server shutdown gracefully")
}

func Render(ctx echo.Context, statusCode int, t templ.Component) error {
	buf := templ.GetBuffer()
	defer templ.ReleaseBuffer(buf)

	if err := t.Render(ctx.Request().Context(), buf); err != nil {
		return err
	}

	return ctx.HTML(statusCode, buf.String())
}

