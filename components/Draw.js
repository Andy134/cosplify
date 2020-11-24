import React from 'react';
import { List, Drawer, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { MoveToInbox, Mail } from '@material-ui/icons';

export default function Draw(props) {

    const anchor = 'left';

    function handleOnClose() {
        props.handleOnClose()
    }

    const list = (
        <div>
            <List onClick={handleOnClose}>
                {['Inbox', 'Starred', 'Send email'].map((text, index) => (
                    <ListItem button key={text} >
                        <ListItemIcon>{index % 2 === 0 ? <MoveToInbox /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                <Divider />
                <ListItem button key={'Inbox'} >
                    <ListItemIcon><MoveToInbox /></ListItemIcon>
                    <ListItemText primary={'Inbox'} />
                </ListItem>
            </List>
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
