
import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import PropTypes from 'prop-types';
import Button from './buttons';
import PlatformBlurView from './PlatformBlurView';

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
    paddingTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)'
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
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
    fontSize: 18,
  },
  tabContentView: {
    flex: 1,
  }
});


class Tabs extends Component {
  render() {
    const { textStyle, onChange, page, children, tintColor, buttonStyles, buttonBoxStyles, tabsStyles } = this.props;
    const child = children.filter(item => item.props.pageId === page);

    const titles = children.map(item => {
      const { title, pageId, ccessible, accessibilityLabel, testID } = item.props;
      return { title, pageId, ccessible, accessibilityLabel, testID };
    })

    return (
      <PlatformBlurView style={[styles.tabs, tabsStyles]}>
        <View style={[styles.buttons, buttonBoxStyles]}>
          {
            titles.map((item, index) => {
              const { pageId, title, accessible, accessibilityLabel, testID } = item;
              return (
                <Button
                  accessible={accessible}
                  accessibilityLabel={accessibilityLabel}
                  testID={testID}
                  key={index}
                  onPress={() => onChange(pageId)}
                  style={
                    [
                      styles.tab,
                      item.pageId === page ? { borderBottomColor: tintColor } : {},
                      buttonStyles,
                    ]
                  } underlayColor="rgba(0,0,0,0)"
                >
                  <Text style={[styles.center, textStyle, pageId === page ? { color: tintColor } : {}]}>{title}</Text>
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

      </PlatformBlurView>
    );
  }
}

Tabs.propTypes = {
  textStyle: PropTypes.object,
  page: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.any,
  tintColor: PropTypes.string,
  buttonStyles: PropTypes.object,
  buttonBoxStyles: PropTypes.object,
  tabsStyles: PropTypes.object,
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
