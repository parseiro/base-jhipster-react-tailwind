import Item from 'app/modules/home/Item';
import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'flowbite-react';

interface TodoListProps {
  list: string[];
}

export function TodoList({ list }: TodoListProps) {
  return (
    <section id="todoList" className="w-100">
      <Table hoverable striped>
        <Table.Head>
          <Table.HeadCell>Task</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {list.map((todo: string) => (
            <Table.Row key={todo} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Item content={todo} />
              </Table.Cell>
              <Table.Cell>
                <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
