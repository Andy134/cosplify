import React from 'react';
import {List, Drawer, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {MoveToInbox, Mail} from '@material-ui/icons';

export default function Draw(props) {

    const anchor = 'left';

    function handleOnClose() {
        props.handleOnClose()
    }

    const list = (
        <div>
            <div>Acount</div>
            <Divider/>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text} onClick={handleOnClose}>
                        <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </div>
    )

    return (
        <div>
            <Drawer anchor={anchor} open={props.open} onClose={handleOnClose}>
                {list}
            </Drawer>
        </div>
    );
}
