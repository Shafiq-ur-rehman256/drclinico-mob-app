import { Snackbar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import { setSnackBar } from '../store/reducers';
import {
    StyleSheet,
  } from "react-native";
export const CustomSnackBar = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.state.main)
    if (state.SnackBar.show) {
        setTimeout(() => {
            dispatch(setSnackBar({show: false, message: ''}))
        }, 3000);
    }
    // setSnackBar({show: true, message: ''})
    return (
        <Snackbar
        style={styles.snackBarStyle}
        visible={state.SnackBar.show}
        >
        {state.SnackBar.message}
      </Snackbar>
    )

}

const styles = StyleSheet.create({
    snackBarStyle: {
      backgroundColor: "#2FC1FF",
      textAlign: 'center'
    },
    
  });