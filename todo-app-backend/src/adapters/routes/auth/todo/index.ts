import { Router } from 'express'
import { AuthenticationMiddleware } from '../../../middlewares/AuthenticationMiddleware'
import { createTodoRoutes } from './createTodo.routes'

import { getTodosRoutes } from './getTodos.routes'
const todoRoutes = Router()
const authenticateToken = AuthenticationMiddleware.authenticateToken

todoRoutes.use( authenticateToken )

todoRoutes.use( '/create' , createTodoRoutes )

todoRoutes.use( '/get' , getTodosRoutes )

// todoRoutes.use( '/update' , updateTodoRoutes )

// todoRoutes.use( '/delete' , deleteTodoRoutes )

// todoRoutes.use( '/delete' , deleteTodoRoutes )

export default todoRoutes
