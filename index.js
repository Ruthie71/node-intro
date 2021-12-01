import express from "express";
import storiesRouter from "./routes/storiesRouter.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();
const port = process.env.PORT || 5000;

app.use("/stories", storiesRouter);
app.use("/users", usersRouter);

app.listen(port, () => console.log(`Server started listening on port ${port}`));
