import React from 'react'
import { Pagination } from 'antd';
export default function PaginationCustom({ defaultCurrent, total, defaultPageSize, onChange }) {
    // const onChange=(pageNumber)=>{
    //     console.log('Page: ', pageNumber);
    // }
    const render = React.useCallback((onChange) => {
        return <Pagination style={{ marginTop: '20px', marginBottom: '20px' }} showQuickJumper defaultCurrent={defaultCurrent} total={total} onChange={onChange} defaultPageSize={defaultPageSize} />
    }, [defaultCurrent,defaultPageSize,total])
    return (
        <>
           {render(onChange)}
        </>
   
    )
}
