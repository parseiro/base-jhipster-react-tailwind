import React, { useEffect, useState } from 'react';
import './app.scss';
import { Spinner, Toast } from 'flowbite-react';
import InputTodo from 'app/modules/home/InputTodo';
import { HiX } from 'react-icons/hi';
import { TodoList } from 'app/todoList';

function restaurarTarefas() {
  const tarefasJson = localStorage.getItem('tarefas') || '[]';
  return JSON.parse(tarefasJson);
}

function salvarTarefas(tarefas: string[]) {
  const json = JSON.stringify(tarefas);
  localStorage.setItem('tarefas', json);
}

export default function Home2() {
  const [listTodo, setListTodo] = useState<Array<string>>([]);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [toast, setToast] = useState(<div />);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setListTodo(restaurarTarefas());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function addTodo(todo: string) {
    const input = todo.trim();
    if (!listTodo.includes(input)) {
      listTodo.push(input);
      salvarTarefas(listTodo);
      setForceUpdate(!forceUpdate);
    } else {
      // console.log('repetido');
      setToast(
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Este item já está na lista.</div>
          <Toast.Toggle />
        </Toast>
      );
      setTimeout(() => {
        setToast(<div />);
        // console.log('apagando o toast');
      }, 1000);
    }
  }

  return (
    <main className="flex flex-col items-center">
      <InputTodo addTodo={(todo: string) => addTodo(todo)} />
      {isLoading && (
        <p className="flex align-items gap-5">
          <Spinner aria-label="Default status example" />
          Loading from Local Storage...
        </p>
      )}

      {!isLoading && <TodoList list={listTodo} />}
      {toast}
    </main>
  );
}
