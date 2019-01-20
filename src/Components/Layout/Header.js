// Stolen from Tabs demo at material-ui site.
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import { Typography } from 'material-ui';
import { withRouter } from 'react-router-dom';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.dests = [
      '/',
      '/about',
    ];
console.log('constructor, props', props.location.pathname, this.dests.indexOf(props.location.pathname));
    let currentPath = props.location.pathname;
    let currentValue = this.dests.indexOf(currentPath) || 0;
    this.state = {
      value: currentValue
    };
  }

  navigate = (value) => {
    var dest = this.dests[value];
// Apparently the reason why this isn't updating the comonent has to do with Update Blocking?
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
//    this.props.history.push(dest);
    document.location = dest;
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.navigate(value);
  };

  componentDidMount() {
    console.log('componentDidMount', this.props.history, this.props.location);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.props.history, this.props.location);
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" />
            <Tab label="About" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(SimpleTabs));
