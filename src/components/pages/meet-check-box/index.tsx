import React, { useState } from 'react';
import { DatePicker, Select, Tree } from 'antd';
import { RoutesData, routes } from '~/routes';
import { useHistory } from 'react-router-dom';
import './index.less'

const { Option } = Select

function MeetCheckBox() {
  const treeData = [
    {
      title: '十五届三中全会',
      key: '0-0',
      children: [
        { title: '第一届人大常委会', key: '0-0-0', isLeaf: true },
        { title: '第二届人大常委会', key: '0-0-1', isLeaf: true },
      ],
    },
    {
      title: '十四届三中全会',
      key: '0-1',
      children: [
        { title: '第一届人大常委会', key: '0-1-0', isLeaf: true },
        { title: '第二届人大常委会', key: '0-1-1', isLeaf: true },
      ],
    },
  ];
  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onSelect = (keys: React.Key[], info: any) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };
  return (
    <div className="meet">
      <div className="meet-name">会议名称</div>
      <div className="meet-time">
        <DatePicker onChange={onChange} />
        <Select defaultValue="全部" style={{ width: 120 }} onChange={handleChange}>
          <Option value="all">全部</Option>
          <Option value="am">上午</Option>
          <Option value="pm">下午</Option>
        </Select>
      </div>
      {
        treeData.length ? <Tree
          onSelect={onSelect}
          onExpand={onExpand}
          treeData={treeData}
        /> : <div className="empty-tree">暂无数据</div>
      }

    </div>
  )
}

export default MeetCheckBox;