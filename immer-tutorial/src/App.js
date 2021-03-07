import './App.css';
import React, {useCallback, useRef, useState} from "react";
import {produce} from "immer";

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({name: '', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });
  const onChange = useCallback(
    e => {
      const {name, value} = e.target;
      setForm(
        // {...form, [name]: [value]}
        produce(form, draft => {
          draft[name] = value
        })
      );
      console.log('onChange ' + name + '=' + value + ', ' + e.target);
    }, [form]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };
      setData(
        // {...data, array: data.array.concat(info)}
        produce(data, draft => {
          draft.array.push(info);
        })
      );
      setForm({name: '', username: ''});
      nextId.current += 1;
      console.log('onSubmit info=' + info.id, info.name, info.username + ', nextId=' + nextId.current)
    }, [data, form.name, form.username]
  );

  const onRemove = useCallback(
    id => {
      setData(
        // {...data, array: data.array.filter(info => info.id != id)}
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1)
        })
      )
    }
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="username" placeholder="Username" value={form.username} onChange={onChange}/>
        <input name="name" placeholder="Name" value={form.name} onChange={onChange}/>
        <button type="submit">Add</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
              <li key={info.id} onClick={() => onRemove(info.id)}>
                {info.username} ({info.name})
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
