import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const DismissKeyboard = ({ children }: any): any => {
    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}> {children}
        </TouchableWithoutFeedback>
    )
};

export default DismissKeyboard;