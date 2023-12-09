import { DocumentData, QueryDocumentSnapshot, Timestamp } from "firebase/firestore"

export type Todo = {
    id?: string,
    name: string,
    createTime?: Timestamp,
}


export const TodoConverter = {
    toFirestore: (todo: Todo) => {
        return {
            id: todo.id,
            name: todo.name,
            createTime: todo.createTime
        };
    },
    fromFirestore: (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
        const todo: Todo = {
            id: doc.id,
            ...doc.data()
        } as Todo
        return todo;
    }
};
