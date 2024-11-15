import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
const MultipageDocument = () => {
  return (
    <Document>
      {Array.from(new Array(5), (_, index) => (
        <Page key={`page_${index}`} size='A4' style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Page {index + 1}</Text>
            <div>
              <Text style={styles.text}>
                This is an example of rendering multiple pages in a PDF
                document.
              </Text>
            </div>
          </View>
        </Page>
      ))}
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    width: "300px",
    display: "block",
    marginLeft: "100px",
    backgroundColor: '#E4E4E4',
    marginBottom: '40px',
    border: '5px solid lightblue'
  },
  section: {
    margin: 10,
    padding: 50,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
    color: 'green'
  },
});
export default MultipageDocument;
