import express from 'express';
import routes from 'routes';
import {
  readAll,
  readOne,
  create,
  deleteOne,
  deleteMany,
  patch,
} from 'controllers/projectController';
import { onlyPrivate } from 'middlewares/user';

const Router = express.Router();

Router.get(routes.readAll, onlyPrivate, readAll);
Router.get(routes.readOne, onlyPrivate, readOne);
Router.post(routes.create, onlyPrivate, create);
Router.delete(routes.deleteOne, onlyPrivate, deleteOne);
Router.delete(routes.deleteMany, onlyPrivate, deleteMany);
Router.patch(routes.patch, onlyPrivate, patch);

export default Router;
