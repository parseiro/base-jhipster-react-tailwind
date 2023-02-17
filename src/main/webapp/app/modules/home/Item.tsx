import PropTypes from 'prop-types';
import React from 'react';

interface IProps {
  content: string;
}

export default function Item({ content }: IProps) {
  return <div className="Item">{content}</div>;
}

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
