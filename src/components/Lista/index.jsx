import React from 'react';

function Lista({ style, titulo, descricao }) {
    return(
        <div className={style}>
            <h1>{titulo}</h1>
            <table>
                ...
            </table>
        </div>
    );
}

export default Lista;