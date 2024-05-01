import { ITodo } from '../../../../core/interfaces/Todo/ITodo'

interface Todo {
    id: string;
    title: string;
    description: string;
    important: boolean;
    completed: boolean;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    TodoCategory: {
        category: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }[];
}

export class TodoFormatHelper {
	static format ( todos: Todo[] ): ITodo[] {
		return todos.map( ( todo ) => ({
			id          : todo.id ,
			title       : todo.title ,
			description : todo.description ,
			important   : todo.important ,
			completed   : todo.completed ,
			createdAt   : todo.createdAt ,
			updatedAt   : todo.updatedAt ,
			category    : todo.TodoCategory[0]?.category?.name || null ,
		}) )
	}

	static formatOne ( todo: Todo ): ITodo {
		return ({
			id          : todo.id ,
			title       : todo.title ,
			description : todo.description ,
			important   : todo.important ,
			completed   : todo.completed ,
			createdAt   : todo.createdAt ,
			updatedAt   : todo.updatedAt ,
			category    : todo.TodoCategory[0]?.category?.name || null ,
		})
	}
}
