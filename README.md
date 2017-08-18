# weather
Query weather and notify you by sending email at 7:00 am everyday

##Usage
```js
const task = require('weather');
task.start(
    city: '宁波',     //city name
    service: 'Gmail', // email service
    auth: {           // email address and password
        user: '***@gmail.com',
        pass: '****'
    }
);
`````