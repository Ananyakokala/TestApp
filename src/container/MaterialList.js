import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { ListSubheader } from '@material-ui/core';

export default class MaterialList extends Component {

    render() {
        return (
            <List onClick = {this.props.click}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>

                    <ListSubheader >
                        {this.props.subheader}
                    </ListSubheader>
                    <ListItemText
                        primary={this.props.primary}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary">
                                </Typography>
                                {this.props.secondary}
                            </React.Fragment>} />
                </ListItem>

                <Divider variant="inset" component="li" />
            </List>
        );
    }
}

