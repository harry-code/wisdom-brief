import React from 'react';
import { Tabs } from 'antd';
import { RoutesData } from '~/routes';
import { withRouter } from 'react-router-dom';

const { TabPane } = Tabs;

class HeadTabs extends React.Component {
  newTabIndex: number;
  state: any;
  constructor(props: any) {
    super(props);
    this.newTabIndex = 0;
    this.state = {
      activeKey: RoutesData[0].routes[0].path,
      panes: [RoutesData[0].routes[0]],
      routes: []
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    const { pathname } = this.props.location
    console.log('1111', pathname)
  }


  onChange = (activeKey: any) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey: any, action: React.Key) => {
    //@ts-ignore
    this[action](targetKey);
  };

  remove = (targetKey: any) => {
    let { activeKey } = this.state;
    let lastIndex: number = 0;
    this.state.panes.forEach((pane: { key: any; }, i: number) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter((pane: { key: any; }) => pane.path !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].path;
      } else {
        activeKey = panes[0].path;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map((pane: { title: React.ReactNode; path: string; content: React.ReactNode; }) => (
            <TabPane tab={pane.title} key={pane.path}></TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

// @ts-ignore
export default withRouter(HeadTabs);