import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordGenerator = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = passwordLength => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbersChars = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;\':",./<>?';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += numbersChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters, passwordLength) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charactersIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(charactersIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <View>
      <View style={styles.buttonPlace}>
        <Button
          title="Back to home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Password Generator</Text>

            <Formik
              initialValues={{passwordLength: ''}}
              //   validationSchema={PasswordS}
              onSubmit={values => {
                console.log(values);
                generatePasswordString(+values.passwordLength);
              }}>
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <Text style={styles.heading}>Password Length</Text>
                      {touched.passwordLength && errors.passwordLength && (
                        <Text style={styles.errorText}>
                          {errors.passwordLength}
                        </Text>
                      )}
                    </View>

                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include lowerCase</Text>
                    <BouncyCheckbox
                      disabledBuiltInState
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                    />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>
                      Include Uppercase letters
                    </Text>
                    <BouncyCheckbox
                      disabledBuiltInState
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                    />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Numbers</Text>
                    <BouncyCheckbox
                      disabledBuiltInState
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                    />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Symbols</Text>
                    <BouncyCheckbox
                      disabledBuiltInState
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                    />
                  </View>

                  <View style={styles.formActions}>
                    <TouchableOpacity
                      disabled={!isValid}
                      style={styles.primaryBtn}
                      onPress={handleSubmit}>
                      <Text style={styles.primaryBtnTxt}>
                        Generate Password
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.secondaryBtn}
                      onPress={() => {
                        handleReset();
                        resetPasswordState();
                      }}>
                      <Text style={styles.secondaryBtnTxt}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>

          {isPassGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.subTitle}>Result:</Text>
              <Text style={styles.description}>Long Press to copy</Text>
              <Text selectable={true} style={styles.generatedPassword}>
                {password}
              </Text>
            </View>
          ) : null}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default PasswordGenerator;

const styles = StyleSheet.create({
  buttonPlace: {
    width: 120,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  appContainer: {},
  formContainer: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    // borderBottomColor: 'black',
    borderWidth: 1,
  },
  inputColumn: {},
  heading: {},
  errorText: {},

  inputStyle: {
    borderWidth: 2,
    paddingHorizontal: 24,
  },

  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  primaryBtn: {
    backgroundColor: 'aqua',
    padding: 15,
    borderRadius: 10,
  },
  primaryBtnTxt: {
    color: 'black',
    fontWeight: 'bold',
  },
  secondaryBtn: {
    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 10,
  },
  secondaryBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    height: 130,
    padding: 24,
    backgroundColor: 'grey',
    borderRadius: 10,
    marginVertical: 10,
  },
  cardElevated: {
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  subTitle: {
    color: 'white',
    fontSize: 24,
  },
  description: {
    color: 'white',
    fontSize: 16,
  },
  generatedPassword: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
