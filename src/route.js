import express from 'express';
import asyncWrapper from './middlewares/async-wrapper';
import commentService from "./services/comment";
import listService from "./services/list";

const router = express.Router();

/* 
  ENHANCEMENT: 
  1. should handle HTTP status code. For example.
  - return status code 200 when the request succeeded.
  - return status code 404 when the server cannot find the request resource.
  - return status code 500 when the server has encoutered.

  2. handle middleware for authentication of user who can access the reource or not.
*/

// API1 : show all lists which need to use pagination.
router.get('/lists', asyncWrapper(async (req, res) => {
  const { offset=0, limit=5 } = req.query;
  res.json(await listService.showAll({ offset, limit }));
}));

// API2 : show list detail when user click on list box from list page.
router.get('/lists/:listId', asyncWrapper(async (req, res) => {
  const { listId } = req.params;
  res.json(await listService.showOne(listId));
}));

// API3 : update status on list detail page.
router.put('/lists/:listId', asyncWrapper(async (req, res) => {
  const { listId } = req.params;
  res.json(await listService.update(listId, req.body));
}));

// API4 : add-on API for user who need to create a new list.
router.post('/lists', asyncWrapper(async (req, res) => {
  res.json(await listService.create(req.body));
}));

// API5 : remove list from requirement that user can be จัดเก็บ.
router.delete('/lists/:listId', asyncWrapper(async (req, res) => {
  const { listId } = req.params;
  res.json(await listService.remove(listId));
}));


// API6 : show all comments by each list in list detail page.
router.get('/lists/:listId/comments', asyncWrapper(async (req, res) => { 
  const { listId } = req.params;
  const { offset=0, limit=5 } = req.query;
  res.json(await commentService.showByListId(listId, { offset, limit }));
}));

// API6 : create new comment in list detail page.
router.post('/lists/:listId/comments', asyncWrapper(async (req, res) => {
  const { listId } = req.params;
  res.json(await commentService.create({ ...req.body, listId }));
}));


export default router;