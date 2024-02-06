import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

import { BottomSheet, Button, Icon } from '@rneui/themed';
import { themeColors } from '@theme/colors';

type BottomSheetComponentProps = {
  deleteMessage: string | ReactElement;
  onClose: () => void;
  isVisible: boolean;
};

const DeleteBottomSheet: React.FunctionComponent<BottomSheetComponentProps> = (
    props,
) => {
    const { t } = useTranslation();
    const { deleteMessage, isVisible, onClose } = props;

    return (
        <BottomSheet modalProps={{}} isVisible={isVisible}>
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
                    onPress={() => alert('delete')}
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
