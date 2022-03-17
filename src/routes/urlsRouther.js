import { Router } from "express";
import { shortenUrl, getShortUrl, deleteUrl } from "../controllers/urlsController.js";

const urlsRouter = Router();
urlsRouter.post('/urls/shorten', shortenUrl);
urlsRouter.get('/urls/:shortUrl', getShortUrl);
urlsRouter.delete('/urls/:id', deleteUrl);
export default urlsRouter;