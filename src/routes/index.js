import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
import urlsRouter from "./urlsRouther.js";

const router = Router();
router.use(authRouter);
router.use(userRouter);
router.use(urlsRouter);

export default router;