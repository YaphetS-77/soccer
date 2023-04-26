import axios from 'axios';
import { SettingOutlined } from '@ant-design/icons';
import { Collapse, Select } from 'antd';
import React, { useEffect, useState } from 'react';
const { Panel } = Collapse;
const { Option } = Select;
const App = () => {
  const [expandIconPosition, setExpandIconPosition] = useState('start');
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const [league, setLeague] = useState(null);
  const fetchLeague = async () => {
    const params = {
      category: 'soccer'
    }
    const nur = await axios({
      url: 'https://livescore6.p.rapidapi.com/leagues/v2/list',
      method: 'get',
      params: params,
      headers: {
        'X-RapidAPI-Key': '3acc76c17dmshb1b742e5beeeea5p1eca63jsn7d438a2f4b79',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    })
    console.log('leagues', nur);
    if (nur.status == 200) {
      setLeague(nur.data.Ccg);
    }
  }
  useEffect(() => {
    fetchLeague();
  }, [])
  return (
    <>
      <Collapse className='mt-3'
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
      >
        {league != null ?
            <>
              {league.map((item) =>
        <Panel className='' header={item.Cnm} key={item.Cid} extra={genExtra()}>
                {item.Stages.map((item)=>
                  <Panel className='bg-secondary p-2 mb-2 text-light' header={item.Sdn}>
                    
                  </Panel>
                )
                }
        </Panel>
        )
              }</>
            : <></>
          }
      </Collapse>
      <br />
      <span>Expand Icon Position: </span>
      <Select
        value={expandIconPosition}
        style={{
          margin: '0 8px',
        }}
        onChange={onPositionChange}
      >
        <Option value="start">start</Option>
        <Option value="end">end</Option>
      </Select>
    </>
  );
};
export default App;