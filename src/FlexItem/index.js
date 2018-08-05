import React, { Component } from 'react';

class FlexItem extends Component {
    render() {
        const {
            grow = false,
            shrink = true,
            as,
            children,
            ...restProps
        } = this.props;

        const Tag = as || 'div';
        return <Tag {...restProps}>{children}</Tag>;
    }
}

export default FlexItem;
