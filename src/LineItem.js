import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
         <li className="item" >
            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(item.id)}
              aria-label = {"Delete" + item.item}
            />
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
          </li>
  )
}

export default LineItem