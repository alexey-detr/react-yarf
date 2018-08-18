import React, { Component } from 'react';
import {
    columnAlignItems,
    columnJustifyContent,
} from '../lib/stylesMapping';
import PropTypes from 'prop-types';

class FlexColumn extends Component {
    static propTypes = {
        vAlign: PropTypes.oneOf(['top', 'bottom', 'center', 'spaceBetween', 'spaceAround', 'spaceEvenly']),
        hAlign: PropTypes.oneOf(['left', 'right', 'center', 'stretch', 'baseline']),
        wrap: PropTypes.bool,
        as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        children: PropTypes.element,
        style: PropTypes.object,
    };

    render() {
        const {
            vAlign = 'center',
            hAlign = 'left',
            wrap = false,
            as,
            children,
            style: propStyle,
            ...restProps
        } = this.props;

        const Tag = as || 'div';

        const styles = {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: wrap ? 'wrap' : undefined,
            justifyContent: columnJustifyContent[vAlign],
            alignItems: columnAlignItems[hAlign],
            ...propStyle,
        };

        return <Tag {...restProps} style={styles}>{children}</Tag>;
    }
}

export default FlexColumn;
