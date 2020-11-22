import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Dashboard, Kitchen, NoteAdd } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
});

export default function IconLabelTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<Dashboard />} label="Dashboard" href="/" />
                <Tab icon={<Kitchen />} label="Stock" href="/stock" />
                <Tab icon={<NoteAdd />} label="Shopping" href="/shopping" />
            </Tabs>
        </Paper>
    );
}
