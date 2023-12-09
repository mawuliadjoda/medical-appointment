import { FormEvent, useEffect, useState } from 'react';
import "./Todo.css";

import { collection, addDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebase';

import {

    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Todo, TodoConverter } from './Todo';



// https://www.freecodecamp.org/news/how-to-use-the-firebase-database-in-react/
const TodoPage = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] =  useState<Todo[]>([]);

    const addTodo = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                name: todo,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const fetchPost = async () => {

        const pharmaciesRef = collection(db, 'todos');
        const q = query(pharmaciesRef, where("name", "!=", null), orderBy("name", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newTodos: Todo[] = [];
            querySnapshot.forEach((doc) => {
                const item = TodoConverter.fromFirestore(doc);
                newTodos.push(item);
            });
            setTodos(newTodos);
        },

            (error) => {
                console.log(error);
            }

        );
        return () => unsubscribe();
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    {import.meta.env.VITE_APP_NAME}
                </h1>

                <div>

                    <div>

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            <span className="flex items-center">Name</span>
                        </Typography>
                        <Input
                            crossOrigin={undefined}
                            size="lg"
                            placeholder="Numéro téléphone"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>

                    <div className="btn-container">
                        <Button
                            className="mt-6"
                            fullWidth
                            onClick={addTodo}>

                            Ajouter
                        </Button>
                    </div>

                </div>

                <div className="todo-content">
                    {
                        todos?.map((todo, i) => (
                            <p key={i}>
                                {todo.name}
                            </p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TodoPage