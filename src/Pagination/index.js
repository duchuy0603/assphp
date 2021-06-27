import React from 'react';

function Pagination({ pagination, onPageChange }) {
    const { _page, _limit, totalRows } = pagination;
    const totalpage = Math.ceil(totalRows / _limit);
    function onHandlePageChane(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }
    return (
        <div>

            <button
                disabled={_page <= 1}
                onClick={() => onHandlePageChane(_page - 1)}
            >
                Prev
            </button>
            <button
                disabled={_page >= totalpage}
                onClick={() => onHandlePageChane(_page + 1)}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;