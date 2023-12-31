
import './App.css';

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import SideMenu from './components/SideMenu';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className="App">
      <AppHeader/>
       <div className='sideMenuandPageContent'>
         <SideMenu></SideMenu>
         <PageContent></PageContent>
       </div>
     < AppFooter/>
      
    </div>
  );
}

export default App;
