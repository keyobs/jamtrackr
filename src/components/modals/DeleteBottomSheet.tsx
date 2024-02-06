import { ReactElement, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

import { BottomSheet, BottomSheetProps, Button, Icon } from '@rneui/themed';
import { themeColors } from '@theme/colors';

type TBottomSheetComponent = {
  isVisible: boolean;
  deleteMessage: string | ReactElement;
  onClose: () => void;
  onDelete: () => void;
};

const DeleteBottomSheet: FunctionComponent<
  BottomSheetProps & TBottomSheetComponent
> = (props) => {
    const { t } = useTranslation();
    const { isVisible, deleteMessage, onClose, onDelete } = props;

    return (
        <BottomSheet modalProps={{}} isVisible={isVisible} {...props}>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button type="clear" onPress={onClose}>
                        <Icon
                            type="ant-design"
                            name="close"
                            size={35}
                            color={themeColors.red}
                        />
                    </Button>
                </View>
                <View style={styles.messageContainer}>
                    <Text style={styles.message}>{deleteMessage}</Text>
                </View>
                <Button
                    title={t('generic_delete_modal_message')}
                    containerStyle={{ marginHorizontal: 50 }}
                    onPress={onDelete}
                    color={'#f44200'}
                />
            </View>
        </BottomSheet>
    );
};

export default DeleteBottomSheet;

const styles = StyleSheet.create({
    container: {
        minHeight: 250,
        height: 'auto',
        backgroundColor: themeColors.ivory,
        justifyContent: 'space-around',
        padding: 10,
        paddingBottom: 40,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'flex-end',
    },
    closeButton: {
        height: 50,
        width: 50,
    },
    messageContainer: {
        justifyContent: 'center',
        marginBottom: 30,
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 35,
    },
});
