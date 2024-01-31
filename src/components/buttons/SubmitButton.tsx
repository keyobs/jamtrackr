import { Button, ButtonProps } from '@rneui/base';
import { themeColors } from '@theme/colors';

type TSubmitButton = ButtonProps & {
  title: string;
  onPress: () => void;
};

const SubmitButton = (props: TSubmitButton) => {
    const { title, onPress } = props;

    return (
        <Button
            title={title}
            onPress={onPress}
            buttonStyle={{
                width: '80%',
                backgroundColor: themeColors.pink,
                borderRadius: 5,
                minHeight: 50,
            }}
            containerStyle={{ alignItems: 'center' }}
            disabledStyle={{
                borderWidth: 2,
                borderColor: '#00F',
            }}
            disabledTitleStyle={{ color: '#00F' }}
            {...props}
        />
    );
};

export default SubmitButton;
