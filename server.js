
const express = require('express');
const session = require('express-session');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

const createSession = {
  secret: 'Lemon',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(createSession));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
});

