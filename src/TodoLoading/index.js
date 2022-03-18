import React from "react";
import './TodosLoading.css';

function TodoLoading() {
    return (
        <div className="LoadingTodo-container">
            <p className="LoadingTodo-text">Cargando datos</p>
            <p className="LoadingTodo-text">Cargando datos</p>
            <p className="LoadingTodo-text">Cargando datos</p>
            <p className="LoadingTodo-text">Cargando datos</p>
        </div>
        )
}

export { TodoLoading };