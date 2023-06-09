import { NextFunction, Request, Response, Router } from "express";
const { PrismaClient } = require("@prisma/client");

const prisma = PrismaClient();
const router = Router();

router.post("/users/sign_up", async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {},
    });
  } catch (error) {
    next(error);
  }
});
