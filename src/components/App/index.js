import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../NavBar';
import Footer from '../Footer';
import Stories from '../Stories';

function App() {
  // Create a theme to set global color palette
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff6600',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Stories />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
