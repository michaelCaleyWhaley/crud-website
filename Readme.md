# Consistent message board

Built using Express.js

https://caley-message-board.herokuapp.com/

## Purpose
The consistent message board operates as a place to leave a single message on a website which will not be wiped out if it is put to sleep or the js is allowed to stop. In essence a simple CRUD app.

## Usage

```javascript
npm start
```
On first run you need to send a post request to /create . The application will then create an entry in the database which it will draw from in the future.

