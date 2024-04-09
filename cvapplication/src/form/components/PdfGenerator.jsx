
import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import CVPreview from './Cvpreview';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFDocument = ({ person, educationEntries, experienceEntries, projectEntries, skillsEntries, certificationsEntries }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <CVPreview
          person={person}
          educationEntries={educationEntries}
          experienceEntries={experienceEntries}
          projectEntries={projectEntries}
          skillsEntries={skillsEntries}
          certificationsEntries={certificationsEntries}
        />
      </View>
    </Page>
  </Document>
);

const PDFGenerator = ({ person, educationEntries, experienceEntries, projectEntries, skillsEntries, certificationsEntries }) => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <PDFDocument
      person={person}
      educationEntries={educationEntries}
      experienceEntries={experienceEntries}
      projectEntries={projectEntries}
      skillsEntries={skillsEntries}
      certificationsEntries={certificationsEntries}
    />
  </PDFViewer>
);

export default PDFGenerator;