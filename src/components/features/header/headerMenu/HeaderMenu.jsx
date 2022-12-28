import React, { useState } from 'react';
import { Link } from "react-router-dom";
import paths from '../../../../configs/paths';
import theme from '../../../theme';
import Icon from '../../../global/common/Icon';
import { Navigation, List, ListItem, Sublist, SublistItem } from '../../../global/common/container.styled';
import { ButtonNavigation } from '../../../global/common/contents.styled';

function HeaderMenu() {
    const [open, setOpen] = useState(false);

    const action = () => {
        setOpen(!open);
    };

    const getTheme = () => {
        let color = open ? theme.colors.white : theme.colors.red40;
        return color;
    };

    let color = getTheme();

    return (
        <>
            <ButtonNavigation onClick={action} color={color}>
                <Icon draw={theme.svgs.bars} color={color} />
            </ButtonNavigation>

            {open && (
                <Navigation>
                    <List>
                        <ListItem>
                            <Link to={paths.home.path}>
                                <Icon draw={theme.svgs.home} color={color} margin />
                                {paths.home.name}
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={paths.projects.path}>
                                <Icon draw={theme.svgs.projects} color={color} margin />
                                {paths.projects.name}
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={paths.diy.path}>
                                <Icon draw={theme.svgs.sides} color={color} margin />
                                {paths.diy.name}
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={paths.contact.path}>
                                <Icon draw={theme.svgs.contact} color={color} margin />
                                {paths.contact.name}
                            </Link>
                        </ListItem>
                    </List>
                    <Sublist>
                        <SublistItem>
                            <Link to={paths.external.linkedin}>
                                <Icon draw={theme.svgs.linkedin} color={color} />
                            </Link>
                        </SublistItem>
                        <SublistItem>
                            <Link to={paths.external.malt}>
                                <Icon draw={theme.svgs.malt} color={color} />
                            </Link>
                        </SublistItem>
                        <SublistItem>
                            <Link to={paths.external.github}>
                                <Icon draw={theme.svgs.github} color={color} />
                            </Link>
                        </SublistItem>
                    </Sublist>
                </Navigation>
            )}
        </>
    );
}

export default HeaderMenu;