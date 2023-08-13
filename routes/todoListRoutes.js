const express = require('express');
const router = express.Router();
const todoListContollers = require('../controllers/todoListControllers');
const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false });

// router.get('/', authentication, todoListContollers.getTodoList);
// router.post('/', authentication, todoListContollers.createTodoList);
// router.put('/:id', authentication, todoListContollers.updateTodoList);
// router.delete('/:id', authentication, todoListContollers.deleteTodoList);

router
	.route('/')
	.get(authentication, todoListContollers.getTodoList)
	.post(authentication, todoListContollers.createTodoList);

router
	.route('/:id')
	.put(authentication, todoListContollers.updateTodoList)
	.delete(authentication, todoListContollers.deleteTodoList);

module.exports = router;
