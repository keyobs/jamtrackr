import { StyleSheet, View } from 'react-native';
import { Button, ButtonProps } from '@rneui/base';

type TSubmitButton = ButtonProps & {
  title: string;
  onPress: () => void;
};

const SubmitButton = (props: TSubmitButton) => {
    const { title, onPress } = props;

    return (
        <View style={styles.container}>
            <Button
                title={title}
                onPress={onPress}
                buttonStyle={{ width: '80%', backgroundColor: '#E846E1' }}
                containerStyle={{ alignItems: 'center' }}
                disabledStyle={{
                    borderWidth: 2,
                    borderColor: '#00F',
                }}
                disabledTitleStyle={{ color: '#00F' }}
                {...props}
            />
        </View>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    container: {},
});
