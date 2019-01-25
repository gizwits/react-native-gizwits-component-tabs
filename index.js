
import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import PropTypes from 'prop-types';
import Button from './buttons';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'column',
    flex: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  buttons: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  tab: {
    flex: 1,
    paddingBottom: 16,
    paddingTop: 16
  },
  content: {
    flex: 1,
  },
  androidTabs: {
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  tabActive: {
    opacity: 1,
  },
  center: {
    textAlign: 'center',
    color: '#fff',
    opacity: 0.4,
    fontSize: 18,
  },
  tabContentView: {
    flex: 1,
    paddingTop: width * 0.05,
    paddingLeft: width * 0.04,
    paddingRight: width * 0.04
  }
});


class Tabs extends Component {
  render() {
    const { tabs, textStyle, onChange, page, children } = this.props;
    const child = children.filter(item => item.props.pageId === page);
    return (
      <View style={styles.tabs} tint="light" intensity={20}>
        <View style={styles.buttons}>
          {
            tabs.map((item, index) => {
              return (
                <Button
                  key={index}
                  onPress={() => onChange(item.id)}
                  style={[styles.tab]} underlayColor="rgba(0,0,0,0)"
                >
                  <Text style={[styles.center, textStyle, item.id === page ? styles.tabActive : {}]}>{item.title}</Text>
                </Button>
              );
            })
          }
        </View>
        <View style={styles.content}>
          {
            child
          }
        </View>

      </View>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  textStyle: PropTypes.object,
  page: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any,
};

const Tab = ({ children }) => {
  return (
    <View style={styles.tabContentView}>
      {children}
    </View>
  );
};

Tab.propTypes = {
  children: PropTypes.element,
};

export default Tabs;

export { Tab };
