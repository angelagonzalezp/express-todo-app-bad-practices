import express from "express";
const indexRouter = express.Router();

indexRouter.route("/").get((res) => res.render(index));

export default indexRouter;
