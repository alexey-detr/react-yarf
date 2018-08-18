import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlexItem extends Component {
    static propTypes = {
        grow: PropTypes.bool,
        shrink: PropTypes.bool,
        as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        children: PropTypes.element,
        style: PropTypes.object,
    };

    render() {
        const {
            grow = false,
            shrink = true,
            as,
            children,
            style: propStyle,
            ...restProps
        } = this.props;

        const Tag = as || 'div';

        const styles = {
            flexGrow: grow ? '1' : '0',
            flexShrink: shrink ? '1' : '0',
            ...propStyle,
        };

        return <Tag style={styles} {...restProps}>{children}</Tag>;
    }
}

export default FlexItem;
