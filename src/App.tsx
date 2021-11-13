import React from 'react';
import Header from './components/Header'
import ContentLeft from './components/ContentLeft'
import ContentHighlight from './components/ContentHighlight';
import ContentRight from './components/ContentRight';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="App font-overpass">
      <Header />
      <main className=''>
        <ContentLeft />
        <ContentHighlight />
        <ContentRight />
      </main>
      <Footer />
    </div>
  );
}

export default App;
