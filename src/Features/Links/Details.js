import React from 'react'
import { useApiHooks } from '../../Hooks/api_hooks';

const Details = ({ id }) => {

  const [load, data, err] = useApiHooks({ i: id }, id);

  // console.log(data);
  return (
    <div>

    </div>
  )
}

export default Details