import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

export const Sidebar = (props: any) => {

    const onAnalyzerClick = () => {
        props.onAnalyzerClick()
    }

    const onNormalizerClick = () => {
        props.onNormalizerClick()
    }

    return (
        <Drawer variant="permanent" PaperProps={{sx: {width: 250}}}>
            <List>
                <ListItemButton>
                    <ListItemText 
                        primary="Candlesticks analyzer" 
                        onClick={onAnalyzerClick}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText 
                        primary="CSV normalizer" 
                        onClick={onNormalizerClick}/>
                </ListItemButton>
                {/* Add more list items as needed */}
            </List>
        </Drawer>
    );
}

Sidebar.defaultProps =
{
    onAnalyzerClick: function(){},
    onNormalizerClick: function(){},
}

Sidebar.propTypes = 
{
    onAnalyzerClick: PropTypes.func,
    onNormalizerClick: PropTypes.func,
}

