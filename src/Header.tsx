import * as React from 'react';

interface IProps {
    name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
    <h1>
        The {props.name} Project.
    </h1>
);

Header.defaultProps = {
    name: 'hello world',
}

export default Header;