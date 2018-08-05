import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    rowAlignItems,
    rowJustifyContent,
} from '../lib/stylesMapping';

class FlexRow extends Component {
    static propTypes = {
        vAlign: PropTypes.oneOf(['top', 'bottom', 'center', 'stretch', 'baseline']),
        hAlign: PropTypes.oneOf(['left', 'right', 'center', 'spaceBetween', 'spaceAround', 'spaceEvenly']),
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
            flexWrap: wrap ? 'wrap' : undefined,
            justifyContent: rowJustifyContent[hAlign],
            alignItems: rowAlignItems[vAlign],
        };

        return <Tag {...restProps} style={{ ...styles, propStyle }}>{children}</Tag>;
    }
}

export default FlexRow;
