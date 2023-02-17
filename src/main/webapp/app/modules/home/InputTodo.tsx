import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Label, TextInput } from 'flowbite-react';

interface IProps {
  addTodo: (arg: string) => void;
}

export default function InputTodo({ addTodo }: IProps) {
  const [textTodo, setTextTodo] = useState('');

  function addItem(input: string) {
    addTodo(input);
    setTextTodo('');
  }

  return (
    <section>
      <form
        className="flex gap-4 justify-between items-center"
        onSubmit={e => {
          // console.log('onSubmit');
          e.preventDefault();
          addItem(textTodo);
        }}
      >
        <Label htmlFor="tarefaInput" value="Tarefa:" />
        <TextInput id="tarefaInput" type="text" required value={textTodo} onChange={e => setTextTodo(e.target.value)} />
        <Button type="submit">Adicionar</Button>
      </form>
      {/* <label htmlFor="inputTodo">
                Tarefa:
                <input
                    id="inputTodo"
                    type="text"
                    value={textTodo}
                    onChange={(e) => setTextTodo(e.target.value)}
                />
            </label>
            <button type="button" onClick={() => addItem(textTodo)}>
                Adicionar
            </button> */}
    </section>
  );
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
