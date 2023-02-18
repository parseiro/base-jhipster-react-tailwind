import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';

interface IProps {
  addTodo: (arg: string) => Promise<void>;
}

export default function InputTodo({ addTodo }: IProps) {
  const [textTodo, setTextTodo] = useState('');

  const modalEl = document.getElementById('modalEl');
  const options: ModalOptions = {
    placement: 'top-center',
    backdrop: 'static',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    closable: true,
    onShow() {
      document.getElementById('task-name').focus();
    },
    onHide() {
      document.querySelector('[modal-backdrop]').remove();
    },
  };
  const modal: ModalInterface = new Modal(modalEl, options);

  async function addItem(input: string) {
    try {
      await addTodo(input);
      modal.hide();
      modalEl.classList.add('hidden');
      setTextTodo('');
    } catch (e) {}
  }

  return (
    <section>
      <button
        /* data-modal-target="modalEl"
        data-modal-toggle="modalEl" */
        className={
          `block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none ` +
          `focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 ` +
          `dark:hover:bg-blue-700 dark:focus:ring-blue-800`
        }
        type="button"
        onClick={() => modal.show()}
      >
        Nova tarefa
      </button>

      <div
        id="modalEl"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              /* data-modal-hide="modalEl" */
              onClick={() => modal.hide()}
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Criar tarefa</h3>
              <form
                className={
                  'flex gap-4 justify-center items-center' /* +
                  "block max-w-sm p-6 bg-white ` + " +
                  "`border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 ` + `" +
                  "dark:border-gray-700 dark:hover:bg-gray-700" */
                }
                onSubmit={e => {
                  e.preventDefault();
                  addItem(textTodo);
                }}
              >
                <label htmlFor="small-input" className="block text-sm font-medium text-gray-900 dark:text-white">
                  Tarefa:
                </label>
                <input
                  type="text"
                  id="task-name"
                  className={
                    `block w-full p-2 text-gray-900 border border-gray-300 rounded-lg ` +
                    `bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 ` +
                    `dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 ` +
                    `dark:focus:border-blue-500`
                  }
                  required
                  value={textTodo}
                  onChange={e => setTextTodo(e.target.value)}
                />
                <button
                  type="submit"
                  className={
                    `px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg ` +
                    `hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 ` +
                    `dark:hover:bg-blue-700 dark:focus:ring-blue-800`
                  }
                >
                  Adicionar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
