import React from "react";
import DataManager from "../../api/DataManager";

const DeleteButton = (props) => {
  const handleDelete = (tab, id) => {
    DataManager.delete(tab, id);
  };
};
