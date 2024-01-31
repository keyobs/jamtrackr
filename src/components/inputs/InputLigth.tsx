import { useState, MutableRefObject } from 'react';
import { TextInput } from 'react-native';

import { themeColors } from '@theme/colors';

import { Input, InputProps } from '@rneui/themed';

interface ILightInput {
  forwardedRef: MutableRefObject<TextInput | null>;
}

export const InputLight = (props: ILightInput & InputProps) => {
    const { forwardedRef } = props;
    const highLightColor = themeColors.lightSeaGreen;
    const inputBorder = themeColors.ivory;

    const [highlightInpputClass, setHighlightInpputClass] =
    useState<string>(inputBorder);

    const handleFocus = () => {
        setHighlightInpputClass(highLightColor);
    };

    const handleBlur = () => {
        setHighlightInpputClass(highLightColor);
    };

    return (
        <Input
            ref={forwardedRef}
            {...props}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            inputContainerStyle={{
                borderStyle: 'solid',
                borderWidth: 2,
                borderColor: highlightInpputClass,
                borderRadius: 10,
                paddingRight: 15,
                paddingLeft: 10,
                marginTop: 10,
                backgroundColor: themeColors.ivory,
            }}
            labelStyle={{
                fontSize: 14,
                fontWeight: 'normal',
                color: themeColors.ivory,
            }}
        />
    );
};
