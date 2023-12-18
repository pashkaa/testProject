const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const PORT = 3001;
const {createPool} = require("mysql");

app.use(cors());

const server = http.createServer(app);

const pool = createPool({
  host: "localhost",
  user:"root",
  password:"rootpassword",
  connectionLimit:10
})

pool.query('select * from apidb.users', (err, res) => {
  return console.log(res);
})

const io = new Server(server , {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

var connectedUsersCount = 0;

const orders = [
    {
        id: 0,
        title: 'Длинное предлинное длинное название прихода',
        date: '2023-01-29 12:09:33',
        description: 'desc',
        products: [
          {
            id: 1,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 100, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2023-06-29 12:09:33'
          },{
            id: 2,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 200, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          },{
            id: 3,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 300, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          }
        ]
      },
      {
        id: 1,
        title: 'Order 2',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products: [
          {
            id: 1,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 100, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          },{
            id: 2,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 100, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          }
        ]
      },
      {
        id: 2,
        title: 'Order 3',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products: [
          {
            id: 4,
            serialNumber: 1234,
            isNew: 1,
            photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
              start: '2017-06-29 12:09:33',
              end: '2017-06-29 12:09:33'
            },
            price: [
              {value: 100, symbol: 'USD', isDefault: 0},
              {value: 2600, symbol: 'UAH', isDefault: 1}
            ],
            order: 1,
            date: '2017-06-29 12:09:33'
          }
        ]
      },{
        id: 3,
        title: 'Order 4',
        date: '2017-06-29 12:09:33',
        description: 'desc',
        products: [
    
        ]
      }
]

const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: { start: '2017-06-29 12:09:33',end: '2017-06-29 12:09:33'},
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},{value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 2',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 3',
    type: 'Monitors 2',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 4',
    type: 'Monitors 2',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 5',
    type: 'Monitors',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 6,
    serialNumber: 1234,
    isNew: 1,
    photo: 'https://i.pinimg.com/564x/1a/0c/80/1a0c809ae4d5174fe478ddb1b30d0157.jpg',
    title: 'Product 6',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  }
]

io.on('connection', socket => {
    console.log("User connected");
  
    connectedUsersCount += 1;

    socket.broadcast.emit('connectedUsersCount', connectedUsersCount);

    socket.on('disconnect', (data) => {
        connectedUsersCount -= 1;
        console.log("User disconnected");
        socket.broadcast.emit('connectedUsersCount', connectedUsersCount);
    });
}); 

app.get('/getOnline', (req, res) => {
  res.send({ connectedUsersCount });
});

app.get('/orders', (req, res) => {
  res.send({ orders });
});

app.get('/products', (req, res) => {
  res.send({ products });
});

server.listen(PORT, () => {
    console.log("Server is running!");
});