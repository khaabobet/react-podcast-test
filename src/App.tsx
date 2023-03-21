import React from 'react';
import './styles/main.scss';
import {MainPage} from "./pages/MainPage";
import {PageStateProvider} from "./context/PageState/PageStateProvider";

function App() {
  return (
      <PageStateProvider>
        <MainPage />
      </PageStateProvider>
  );
}

export default App;
