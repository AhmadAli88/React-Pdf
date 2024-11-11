import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const AnnotatedDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Annotated PDF</Text>
          <Text style={styles.text}>
            This is an example of rendering a PDF document with a simulated annotation.
          </Text>
        </View>
        
        {/* Simulated Annotation */}
        <View style={styles.annotationBox}>
          <Text style={styles.annotationText}>This is an annotation</Text>
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
  },
  annotationBox: {
    position: 'absolute',
    top: 150, // Positioning to simulate annotation
    left: 50,
    width: 200,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 255, 0.1)', // Light blue background for annotation
    border: '1px solid blue',
  },
  annotationText: {
    color: 'blue',
    fontSize: 12,
  },
});

export { AnnotatedDocument };
