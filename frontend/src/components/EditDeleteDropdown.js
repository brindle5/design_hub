// Code for edit/delete dropdown is based on CI's Moments Project

// jshint esversion: 11, jquery: true

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";


const DropdownMenu = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const EditDeleteDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left" size="lg">
      <Dropdown.Toggle as={DropdownMenu} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};