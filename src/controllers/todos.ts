import { RequestHandler } from "express";

import { Todos } from "../models/todos";

export const createTodo: RequestHandler = async (req, res, next) => {
  const todos = await Todos.create({
    ...req.body,
  });
  void res.status(200).json({
    message: "Todo created successfully",
    data: todos,
  });
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo: Todos | null = await Todos.findByPk(id);
  await Todos.destroy({
    where: {
      id,
    },
  });
  void res.status(200).json({
    message: "Todo deleted successfully",
    data: deletedTodo,
  });
};

export const getAllTodo: RequestHandler = async (req, res, next) => {
  const allTodos: Todos[] = await Todos.findAll();
  void res.status(200).json({
    message: "Todos fetched successfully",
    data: allTodos,
  });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Todos | null = await Todos.findByPk(id);
  void res.status(200).json({
    message: "Todo fetched successfully",
    data: todos,
  });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Todos | null = await Todos.findByPk(id);
  await Todos.update(
    { ...req.body },
    {
      where: {
        id,
      },
    }
  );
  void res.status(200).json({
    message: "Todo updated successfully",
    data: todos,
  });
};
