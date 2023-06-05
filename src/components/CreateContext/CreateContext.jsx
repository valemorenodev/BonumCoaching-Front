
import { createContext, useState } from 'react'

export const dataContext = createContext();

const data = {
  'email': 'valentina',
  'password': '123'
}

const CreateContext = (Children) => {
  const [dataState, setDataState] = useState(data)
  return (
    <dataContext.Provider value={{ dataState, setDataState }}>
      {Children}
    </dataContext.Provider>
  );
}

export default CreateContext;
