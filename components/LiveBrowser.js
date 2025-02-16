import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

const LiveBrowser = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://open.spotify.com' }}
        style={styles.webview}
        // Optionally, add props for better control:
        // onNavigationStateChange={...}
        // injectedJavaScript={...}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
})

export default LiveBrowser
