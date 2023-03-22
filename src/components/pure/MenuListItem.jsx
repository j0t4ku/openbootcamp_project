import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// TODO: Add icons, HomeIcon, SettingIcon, 
import { BsHouse } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


const MenuListItems = ({ list }) => {
    
    const getIcon = () => {
        switch (icon) {
            case 'HOME':
                return (<BsHouse />)
            case 'TASKS':
                return (<BsHouse />)
            case 'SETTINGS':
                return (<BsHouse />)
            default:
                return (<BsHouse />)
    
        }
    }
    
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    }

    return (
        <List>
            {
                list.map(({ text, path, icon }, index) => {
                    return (
                        <ListItem key={index} button onClick={() => navigateTo(path)}>
                            <ListItemIcon>
                                {getIcon(icon)}
                            </ListItemIcon>
                            <ListItemText primary={text}>

                            </ListItemText>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
