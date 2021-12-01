import express from "express";
import {
    getAll,
    getSingle,
    postOne,
    changeOne,
    deleteOne,
} from "../controllers/users.js";

const usersRouter = express.Router();

usersRouter.get("/", getAll);
usersRouter.get("/id:", getSingle);
usersRouter.post("/", postOne);
usersRouter.put("/:id", changeOne);
usersRouter.delete("/:id", deleteOne);

export default usersRouter;
