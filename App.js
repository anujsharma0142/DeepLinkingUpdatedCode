import React, { Component } from 'react';
import { View, Button, Alert, Linking } from 'react-native';

class App extends Component {
  openAppWithPackageName = async () => {
    const appPackageName = 'app://pushnotification'; // Replace with the package name of the app you want to open

    console.log('app open', appPackageName);

    await Linking.openURL(appPackageName)
      .then(supported => {
        if (!supported) {
          console.log('App is not installed. Redirecting to the Play Store...');
          const storePackageName =
            'https://play.google.com/store/apps/details?id=com.maxlifeinsurance.www.twa';
          Linking.openURL(storePackageName);
        }
      })
      .catch(err => {
        console.error('An error occurred', err);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Open App" onPress={this.openAppWithPackageName} />
      </View>
    );
  }
}

export default App;
