import { Fragment } from "react";


export const MyDropDown = (props:any) =>{

    const { selected, setSelectedItem } = props;
    const options = [
        {key: '-1', value: '', text: '--Escoja una Opción--'},
        {key: '1',value: '2023', text: '2023'},
        {key: '2',value: '2022', text: '2022'},
        {key: '3',value: '2021', text: '2021'},
      ];

      const handleChange = (e:any) => {
        setSelectedItem(e.target.value);
      }

    return (
        <Fragment>
                <select className="form-select" style={{width:'50%'}} value={selected} onChange={handleChange} >
                    {options.map(option => (
                    <option key={option.key} value={option.value}>
                    {option.text}
                    </option>
                ))}
                </select>

        </Fragment>
    )
}