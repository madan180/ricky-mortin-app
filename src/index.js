import express from "express";
import { matchRoutes } from 'react-router-config';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import Routes from './client/components/Routes/routes'

const app = express();

const PORT = 8000;

// Declare public directory
app.use(express.static("public"));

// Home route
app.get("*", (req, res) => {
  const store = createStore();
  const promises = (matchRoutes(Routes, req.path)).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(state => {
    res.send(renderer(req, store));
  })
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
