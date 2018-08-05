import React, { Component } from 'react';
import {
    columnJustifyContent,
    columnAlignItems,
} from '../lib/stylesMapping';

class FlexColumn extends Component {
    render() {
        const {
            vAlign = 'top',
            hAlign = 'center',
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
            justifyContent: columnJustifyContent[hAlign],
            alignItems: columnAlignItems[vAlign],
        };

        return <Tag {...restProps} style={{...styles, propStyle}}>{children}</Tag>;
    }
}

export default FlexColumn;
