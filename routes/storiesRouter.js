import express from "express";
import {
    getAll,
    getSingle,
    postOne,
    changeOne,
    deleteOne,
} from "../controllers/stories.js";

const storiesRouter = express.Router();

storiesRouter.get("/", getAll);
storiesRouter.get("/id:", getSingle);
storiesRouter.post("/", postOne);
storiesRouter.put("/:id", changeOne);
storiesRouter.delete("/:id", deleteOne);

export default storiesRouter;
