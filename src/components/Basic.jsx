import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDFViewer = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Welcome to react-pdf!</Text>
            <Text style={styles.text}>
              This is an example of rendering a simple PDF document using the react-pdf library.
            </Text>
          </View>
        </Page>
      </Document>
    );
  };
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 50,
      flexGrow: 1
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
       color: 'red'
    },
    text: {
      fontSize: 14,
      marginBottom: 8,
     
    }
  });
export default PDFViewer